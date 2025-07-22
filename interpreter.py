# interpreter.py

import unicodedata
from asteval import Interpreter

# Initialize evaluator with no unsafe built-ins
aeval = Interpreter()

# Add str function to the evaluator
aeval.symtable['str'] = str

# Add श्रेणी (range) function
def marathi_range(*args):
    """Marathi equivalent of Python's range function"""
    if len(args) == 1:
        result = list(range(args[0]))
    elif len(args) == 2:
        result = list(range(args[0], args[1]))
    elif len(args) == 3:
        result = list(range(args[0], args[1], args[2]))
    else:
        raise ValueError("श्रेणी requires 1-3 arguments")
    return result

aeval.symtable['श्रेणी'] = marathi_range

variables = {}
block_stack = []  # Stack to track blocks (if/else, loops)
loop_stack = []
functions = {}
current_function = None
function_body = []
in_function_def = False
return_value = None
debug = False  # Set to False to disable debug output

def convert_marathi_digits(text):
    """Convert Marathi (Devanagari) digits to English digits."""
    marathi_to_english = str.maketrans("०१२३४५६७८९", "0123456789")
    return text.translate(marathi_to_english)

def translate_expression(expr):
    """Translate Marathi expressions to Python-compatible expressions."""
    # Replace Marathi quotes with standard quotes
    expr = expr.replace('"', '"').replace('"', '"')
    
    # Replace Marathi operators with Python operators
    expr = expr.replace('आणि', 'and')
    expr = expr.replace('किंवा', 'or')
    expr = expr.replace('नाही', 'not')
    expr = expr.replace('खरे', 'True')
    expr = expr.replace('खोटे', 'False')
    
    # Replace string concatenation with proper Python syntax
    if '+' in expr and ('"' in expr or "'" in expr):
        parts = []
        current = ""
        in_string = False
        quote_char = None
        
        for char in expr:
            if char in ['"', "'"]:
                if not in_string:
                    in_string = True
                    quote_char = char
                    current += char
                elif char == quote_char:
                    in_string = False
                    quote_char = None
                    current += char
                else:
                    current += char
            elif char == '+' and not in_string:
                parts.append(current.strip())
                current = ""
            else:
                current += char
                
        if current:
            parts.append(current.strip())
            
        # Convert non-string parts to str() calls
        for i in range(len(parts)):
            if not (parts[i].startswith('"') and parts[i].endswith('"')) and \
               not (parts[i].startswith("'") and parts[i].endswith("'")):
                parts[i] = f"str({parts[i]})"
                
        expr = " + ".join(parts)
    
    return expr

def execute_function(func_name, args):
    """Execute a user-defined function"""
    global return_value
    
    if func_name not in functions:
        raise ValueError(f"Function '{func_name}' is not defined")
    
    func_def = functions[func_name]
    param_names = func_def['params']
    body = func_def['body']
    
    # Check if argument count matches parameter count
    if len(args) != len(param_names):
        raise ValueError(f"Function '{func_name}' expects {len(param_names)} arguments, got {len(args)}")
    
    # Save current variable state
    old_vars = variables.copy()
    
    # Set up parameters as variables
    for i, param in enumerate(param_names):
        variables[param] = args[i]
        aeval.symtable[param] = args[i]
    
    # Execute function body
    return_value = None
    run_marathi_code('\n'.join(body), is_function=True)
    result = return_value
    
    # Restore variable state (excluding new global variables)
    for var in list(variables.keys()):
        if var not in old_vars:
            del variables[var]
            if var in aeval.symtable:
                del aeval.symtable[var]
        else:
            variables[var] = old_vars[var]
            aeval.symtable[var] = old_vars[var]
    
    return result

def should_execute_line():
    """Determine if the current line should be executed based on block conditions"""
    if not block_stack:
        return True
        
    # Check all blocks in the stack
    for block in block_stack:
        if not block['active']:
            return False
            
    return True

def run_marathi_code(code, is_function=False):
    global block_stack, loop_stack, in_function_def
    global current_function, function_body, return_value
    
    lines = code.splitlines()
    i = 0
    
    while i < len(lines):
        line = unicodedata.normalize("NFC", lines[i])      # Normalize text
        line = convert_marathi_digits(line)                # Convert digits
        stripped = line.strip()
        indentation = len(line) - len(line.lstrip())
        
        if debug:
            print(f"Processing line {i+1}: '{stripped}'")
        
        # Skip empty lines or comments
        if not stripped or stripped.startswith('#'):
            i += 1
            continue
        
        # Process indentation - check if we're exiting blocks
        while block_stack and indentation <= block_stack[-1]['indent']:
            exited_block = block_stack.pop()
            if debug:
                print(f"Exiting block: {exited_block}")
            if exited_block['type'] == 'loop':
                # For loops, we need to handle iteration
                if exited_block['loop_type'] == 'for':
                    exited_block['index'] += 1
                    if exited_block['index'] < len(exited_block['iterable']):
                        # Continue the loop with the next item
                        variables[exited_block['var']] = exited_block['iterable'][exited_block['index']]
                        aeval.symtable[exited_block['var']] = variables[exited_block['var']]
                        i = exited_block['start_line']
                        block_stack.append(exited_block)
                        continue
                elif exited_block['loop_type'] == 'while':
                    # Check the condition again
                    try:
                        result = aeval(exited_block['condition'])
                        if result:
                            # Continue the loop
                            i = exited_block['start_line']
                            block_stack.append(exited_block)
                            continue
                    except Exception as e:
                        print(f"⚠️ Error in while condition: {e}")
        
        # Check if we're inside a function definition
        if in_function_def and not stripped.startswith("समाप्त"):
            function_body.append(line)
            i += 1
            continue
            
        # Determine if this line should be executed
        should_execute = should_execute_line()
        
        if debug:
            print(f"Should execute: {should_execute}")
            
        try:
            # Function definition
            if stripped.startswith("कार्य "):
                parts = stripped[5:].split("(", 1)
                if len(parts) == 2 and parts[1].endswith("):"):
                    func_name = parts[0].strip()
                    params_str = parts[1][:-2].strip()
                    params = [p.strip() for p in params_str.split(",")] if params_str else []
                    
                    in_function_def = True
                    current_function = func_name
                    function_body = []
                    functions[func_name] = {'params': params, 'body': function_body}
                else:
                    print(f"⚠️ Error on line {i+1}: Invalid function definition")
            
            # End of function definition
            elif stripped == "समाप्त":
                if in_function_def:
                    in_function_def = False
                else:
                    print(f"⚠️ Error on line {i+1}: 'समाप्त' without matching function definition")
            
            # Return statement
            elif stripped.startswith("परत "):
                if should_execute:
                    expr = stripped[5:].strip()
                    expr = translate_expression(expr)
                    return_value = aeval(expr)
                    if is_function:
                        return return_value
            
            # Function call
            elif "(" in stripped and ")" in stripped and not any(stripped.startswith(x) for x in ["जर ", "जोपर्यंत ", "छापा("]) and "=" not in stripped:
                if should_execute:
                    # Extract function name and arguments
                    func_call = stripped
                    open_paren = func_call.find("(")
                    if open_paren > 0:
                        func_name = func_call[:open_paren].strip()
                        args_str = func_call[open_paren+1:func_call.rfind(")")].strip()
                        args = []
                        
                        # Parse arguments
                        if args_str:
                            for arg in args_str.split(","):
                                arg = arg.strip()
                                arg = translate_expression(arg)
                                args.append(aeval(arg))
                        
                        # Execute function
                        result = execute_function(func_name, args)
                        if result is not None and not is_function:
                            print(result)
            
            # For loop
            elif stripped.startswith("साठी "):
                if should_execute:
                    # Extract loop variable and iterable
                    loop_def = stripped[6:].rstrip(":")
                    
                    if " मध्ये " in loop_def:
                        var_name, iterable_expr = loop_def.split(" मध्ये ", 1)
                        var_name = var_name.strip()
                        iterable_expr = iterable_expr.strip()
                        
                        if debug:
                            print(f"For loop: var={var_name}, expr={iterable_expr}")
                        
                        try:
                            # Get the iterable from a variable or expression
                            if iterable_expr in variables:
                                iterable = variables[iterable_expr]
                                if debug:
                                    print(f"Using variable {iterable_expr} = {iterable}")
                            else:
                                # It's an expression, evaluate it
                                iterable_expr = translate_expression(iterable_expr)
                                iterable = aeval(iterable_expr)
                                if debug:
                                    print(f"Evaluated {iterable_expr} to {iterable}")
                            
                            # Create loop block
                            loop_block = {
                                'type': 'loop',
                                'loop_type': 'for',
                                'var': var_name,
                                'iterable': list(iterable),
                                'index': 0,
                                'start_line': i,
                                'indent': indentation,
                                'active': True
                            }
                            
                            # Set initial variable value
                            if loop_block['iterable']:
                                variables[var_name] = loop_block['iterable'][0]
                                aeval.symtable[var_name] = variables[var_name]
                                block_stack.append(loop_block)
                                if debug:
                                    print(f"Started for loop with {var_name}={variables[var_name]}")
                            else:
                                # Empty iterable, skip the loop block
                                # Find the end of the loop block
                                j = i + 1
                                while j < len(lines):
                                    next_line = lines[j]
                                    next_indent = len(next_line) - len(next_line.lstrip())
                                    if next_indent <= indentation and next_line.strip() and not next_line.strip().startswith('#'):
                                        break
                                    j += 1
                                i = j - 1  # Will be incremented at the end of the loop
                        except Exception as e:
                            print(f"⚠️ Error in for loop: {e}")
                            # Skip the loop block
                            j = i + 1
                            while j < len(lines):
                                next_line = lines[j]
                                next_indent = len(next_line) - len(next_line.lstrip())
                                if next_indent <= indentation and next_line.strip() and not next_line.strip().startswith('#'):
                                    break
                                j += 1
                            i = j - 1  # Will be incremented at the end of the loop
                    else:
                        print(f"⚠️ Error on line {i+1}: Invalid for loop syntax")
                
            # While loop
            elif stripped.startswith("जोपर्यंत "):
                if should_execute:
                    condition = stripped[9:].rstrip(":")
                    condition = translate_expression(condition)
                    
                    try:
                        result = aeval(condition)
                        
                        # Create while block
                        while_block = {
                            'type': 'loop',
                            'loop_type': 'while',
                            'condition': condition,
                            'start_line': i,
                            'indent': indentation,
                            'active': bool(result)
                        }
                        
                        block_stack.append(while_block)
                        
                        if not result:
                            # Condition is false, skip the loop block
                            j = i + 1
                            while j < len(lines):
                                next_line = lines[j]
                                next_indent = len(next_line) - len(next_line.lstrip())
                                if next_indent <= indentation and next_line.strip() and not next_line.strip().startswith('#'):
                                    break
                                j += 1
                            i = j - 1  # Will be incremented at the end of the loop
                            block_stack.pop()  # Remove the inactive while block
                    except Exception as e:
                        print(f"⚠️ Error in while condition: {e}")
                        # Skip the loop block
                        j = i + 1
                        while j < len(lines):
                            next_line = lines[j]
                            next_indent = len(next_line) - len(next_line.lstrip())
                            if next_indent <= indentation and next_line.strip() and not next_line.strip().startswith('#'):
                                break
                            j += 1
                        i = j - 1  # Will be incremented at the end of the loop
            
            # Break statement
            elif stripped == "तोडा":
                if should_execute:
                    # Find the innermost loop block and exit it
                    for j in range(len(block_stack) - 1, -1, -1):
                        if block_stack[j]['type'] == 'loop':
                            # Remove all blocks up to and including this loop
                            del block_stack[j:]
                            break
                    
                    # Skip to the end of the loop block
                    loop_indent = block_stack[-1]['indent'] if block_stack else 0
                    j = i + 1
                    while j < len(lines):
                        next_line = lines[j]
                        next_indent = len(next_line) - len(next_line.lstrip())
                        if next_indent <= loop_indent and next_line.strip() and not next_line.strip().startswith('#'):
                            break
                        j += 1
                    i = j - 1  # Will be incremented at the end of the loop
            
            # Continue statement
            elif stripped == "पुढे":
                if should_execute:
                    # Find the innermost loop block
                    for j in range(len(block_stack) - 1, -1, -1):
                        if block_stack[j]['type'] == 'loop':
                            loop_block = block_stack[j]
                            
                            if loop_block['loop_type'] == 'for':
                                # Advance to next item
                                loop_block['index'] += 1
                                if loop_block['index'] < len(loop_block['iterable']):
                                    variables[loop_block['var']] = loop_block['iterable'][loop_block['index']]
                                    aeval.symtable[loop_block['var']] = variables[loop_block['var']]
                                    i = loop_block['start_line']
                                else:
                                    # End of iteration, remove the loop block
                                    del block_stack[j:]
                            else:  # while loop
                                i = loop_block['start_line'] - 1  # Will be incremented at the end
                            break
            
            # If statement
            elif stripped.startswith("जर "):
                condition = stripped[3:].rstrip(":")
                condition = translate_expression(condition)
                
                if should_execute:
                    try:
                        result = aeval(condition)
                        
                        # Create if block
                        if_block = {
                            'type': 'if',
                            'condition_result': bool(result),
                            'has_else': False,
                            'in_else': False,
                            'indent': indentation,
                            'active': bool(result)
                        }
                        
                        block_stack.append(if_block)
                        
                    except Exception as e:
                        print(f"⚠️ Error in condition: {e}")
                        # Create inactive if block
                        if_block = {
                            'type': 'if',
                            'condition_result': False,
                            'has_else': False,
                            'in_else': False,
                            'indent': indentation,
                            'active': False
                        }
                        block_stack.append(if_block)
                else:
                    # Create inactive if block (we're in an inactive parent block)
                    if_block = {
                        'type': 'if',
                        'condition_result': False,
                        'has_else': False,
                        'in_else': False,
                        'indent': indentation,
                        'active': False
                    }
                    block_stack.append(if_block)
                    
            # Else statement
            elif stripped == "नाहीतर:":
                # Find the most recent if block
                for j in range(len(block_stack) - 1, -1, -1):
                    if block_stack[j]['type'] == 'if' and not block_stack[j]['in_else']:
                        # Mark this as an else block
                        block_stack[j]['in_else'] = True
                        block_stack[j]['has_else'] = True
                        block_stack[j]['active'] = not block_stack[j]['condition_result']
                        break
                
            # Print statement
            elif stripped.startswith("छापा("):
                if should_execute:
                    # Extract content between parentheses
                    start_idx = stripped.find("(")
                    end_idx = stripped.rfind(")")
                    
                    if start_idx != -1 and end_idx != -1:
                        to_print = stripped[start_idx+1:end_idx]
                        # Handle string literals
                        if (to_print.startswith('"') and to_print.endswith('"')) or \
                           (to_print.startswith("'") and to_print.endswith("'")):
                            # It's a string literal, print directly
                            print(to_print[1:-1])
                        else:
                            # It's an expression, evaluate it
                            to_print = translate_expression(to_print)
                            try:
                                result = aeval(to_print)
                                print(result)
                            except Exception as e:
                                print(f"⚠️ Error evaluating expression: {e}")
                    else:
                        print("⚠️ Error: Invalid छापा statement")

            # Variable assignment
            elif "=" in stripped and not "==" in stripped:
                if should_execute:
                    name, value = stripped.split("=", 1)
                    name = name.strip()
                    value = value.strip()
                    
                    if debug:
                        print(f"Assignment: {name} = {value}")
                    
                    # Check if the value contains a function call
                    if "(" in value and ")" in value:
                        func_name = value.split("(")[0].strip()
                        if func_name == "श्रेणी":
                            # Handle श्रेणी function specially
                            args_str = value[value.find("(")+1:value.rfind(")")]
                            args = [arg.strip() for arg in args_str.split(",")]
                            args = [int(aeval(translate_expression(arg))) for arg in args]
                            
                            if debug:
                                print(f"श्रेणी args: {args}")
                            
                            if len(args) == 1:
                                result = list(range(args[0]))
                            elif len(args) == 2:
                                result = list(range(args[0], args[1]))
                            elif len(args) == 3:
                                result = list(range(args[0], args[1], args[2]))
                            else:
                                raise ValueError("श्रेणी requires 1-3 arguments")
                            
                            variables[name] = result
                            aeval.symtable[name] = result
                            
                            if debug:
                                print(f"Set {name} = {result}")
                        else:
                            # Regular function call
                            value = translate_expression(value)
                            try:
                                variables[name] = aeval(value)
                                aeval.symtable[name] = variables[name]
                            except Exception as e:
                                print(f"⚠️ Error in assignment: {e}")
                    else:
                        # Regular assignment
                        value = translate_expression(value)
                        try:
                            variables[name] = aeval(value)
                            aeval.symtable[name] = variables[name]
                        except Exception as e:
                            print(f"⚠️ Error in assignment: {e}")

            # Any other expression
            elif stripped and should_execute:
                expr = translate_expression(stripped)
                try:
                    result = aeval(expr)
                    if result is not None and not is_function:
                        print(result)
                except Exception as e:
                    print(f"⚠️ Error evaluating expression: {e}")
                        
        except Exception as e:
            print(f"⚠️ Error on line {i+1}: {e}")
            
        i += 1
