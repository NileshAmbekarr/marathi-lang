# मराठी-लँग (Marathi-Lang)

A simple programming language written in Marathi (मराठी), implemented in Python.

## Setup Instructions

### Prerequisites
- Python 3.6 or higher
- pip (Python package manager)

### Installation

#### From GitHub (Current Method)
1. Clone the repository:
```
git clone https://github.com/yourusername/marathi-lang.git
cd marathi-lang
```

2. Install dependencies:
```
pip install asteval
```

#### From PyPI (Coming Soon)
In the future, you'll be able to install directly via pip:
```
pip install marathi-lang
```

And run programs with:
```
marathi-run your_program.mr
```

### Running Your First Program
1. Create a file with `.mr` extension (e.g., `first.mr`)
2. Write your Marathi code in the file
3. Run it using:
```
python run.py first.mr
```

### Quick Start Example
Create a file named `hello.mr` with the following content:

```
# My first Marathi program
छापा("नमस्कार, जग!")  # Hello, World!

# Variables
संख्या = 5
छापा("संख्या = " + संख्या)

# If statement
जर संख्या > 3:
    छापा("संख्या ३ पेक्षा मोठी आहे")
```

Run it with:
```
python run.py hello.mr
```

Expected output:
```
नमस्कार, जग!
संख्या = 5
संख्या ३ पेक्षा मोठी आहे
```

## Features Implemented

- Variables and arithmetic operations
- Conditional statements (if-else)
- Loops (while and for)
- Functions with parameters and return values
- Recursive functions
- String operations
- Boolean operators (and, or, not)
- Comments
- Marathi (Devanagari) digit support

## Syntax

### Variables and Operators

```
# Variable assignment
अ = 5
ब = 10
योग = अ + ब

# Arithmetic operations
गुणाकार = अ * ब
भागाकार = ब / अ
बाकी = ब % अ
वजाबाकी = ब - अ
```

### Printing

```
छापा("Hello, World!")
छापा(अ + ब)
छापा("अ + ब = " + योग)
```

### Conditional Statements

```
जर अ > ब:
    छापा("अ मोठा आहे")
नाहीतर:
    छापा("ब मोठा आहे")
```

### Boolean Operators

```
खरे_आहे = खरे
खोटे_आहे = खोटे

जर अ < ब आणि खरे_आहे:
    छापा("अ हा ब पेक्षा लहान आहे आणि खरे_आहे खरे आहे")

जर अ > ब किंवा खरे_आहे:
    छापा("अ हा ब पेक्षा मोठा आहे किंवा खरे_आहे खरे आहे")

जर नाही खोटे_आहे:
    छापा("खोटे_आहे खरे नाही")
```

### Loops

#### While Loop

```
संख्या = 5
जोपर्यंत संख्या > 0:
    छापा(संख्या)
    संख्या = संख्या - 1
```

#### For Loop

```
साठी i मध्ये श्रेणी(1, 6):
    छापा(i)
```

### Break and Continue

```
साठी संख्या मध्ये श्रेणी(1, 10):
    जर संख्या == 5:
        तोडा
    छापा(संख्या)

साठी संख्या मध्ये श्रेणी(1, 6):
    जर संख्या == 3:
        पुढे
    छापा(संख्या)
```

### Functions

```
कार्य गुणाकार(अ, ब):
    परत अ * ब
समाप्त

कार्य फॅक्टोरियल(न):
    जर न <= 1:
        परत 1
    नाहीतर:
        परत न * फॅक्टोरियल(न - 1)
समाप्त

# Function calls
छापा(गुणाकार(4, 5))
छापा(फॅक्टोरियल(5))
```

## Running

```
python run.py examples/hello.mr
```

## Examples

Check the `examples/` directory for sample programs:

- `hello.mr`: A simple hello world program
- `for_loop.mr`: Demonstrates for loops
- `demo.mr`: A comprehensive demo of all features

## Known Issues

- Unicode variable name handling in for loops
- Nested blocks handling
- Error reporting

## Future Improvements

- Lists and dictionaries
- File I/O operations
- Error handling with try-catch
- Classes and objects
- Standard library
- Interactive REPL
- Better indentation handling
- Improved error messages in Marathi

## Architecture

The interpreter uses:

1. `asteval` library for expression evaluation
2. Custom parsing for Marathi syntax
3. Block-based execution for control structures
4. Variable and function scope management

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues. 