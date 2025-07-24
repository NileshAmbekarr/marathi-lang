# मराठी-लँग (Marathi-Lang): Project State as of July 2025

## Project Overview

**मराठी-लँग** is a programming language written in Marathi (मराठी), implemented in Python. The project aims to make programming more accessible to Marathi speakers by providing a language that uses familiar vocabulary and syntax.

## Purpose

The primary goals of this project are:

1. **Educational**: To help Marathi speakers learn programming concepts in their native language
2. **Accessibility**: To lower the barrier to entry for programming in regions where Marathi is spoken
3. **Cultural**: To promote computational thinking in Marathi and demonstrate that programming isn't limited to English
4. **Technical**: To explore language design and interpreter implementation

## Current Implementation

The interpreter is built in Python using the `asteval` library for expression evaluation, with custom parsing for Marathi syntax. It follows a block-based execution model for control structures and manages variable and function scopes.

## Current Features

The language currently supports:

- **Variables and Arithmetic**: Variable assignment and basic arithmetic operations
- **Conditional Statements**: If-else constructs (`जर`-`नाहीतर`)
- **Loops**: While loops (`जोपर्यंत`) and for loops (`साठी`)
- **Functions**: Function definition (`कार्य`), parameters, return values (`परत`), and recursion
- **Output**: Print statements (`छापा`)
- **String Operations**: String concatenation and manipulation
- **Boolean Logic**: Boolean operators (`आणि`, `किंवा`, `नाही`)
- **Comments**: Line comments using `#`
- **Devanagari Digits**: Support for Marathi numerical digits (०१२३४५६७८९)
- **Control Flow**: Break (`तोडा`) and continue (`पुढे`) statements

## Known Issues

The current implementation has several limitations:

1. **Unicode Variable Handling**: Issues with Unicode variable names, particularly in for loops
2. **Nested Block Handling**: Inconsistent behavior with deeply nested code blocks
3. **Error Reporting**: Limited error messages and debugging capabilities
4. **Indentation Sensitivity**: Inconsistent handling of indentation for block structures
5. **Performance**: Interpreter performance could be improved
6. **Limited Standard Library**: No built-in functions beyond basic operations
7. **Scope Management**: Function and variable scoping needs refinement

## Future Roadmap

### Short-term Goals

1. Fix Unicode variable name handling
2. Improve error reporting with Marathi error messages
3. Enhance nested block handling
4. Publish to PyPI for easier installation
5. Add documentation in both English and Marathi

### Medium-term Goals

1. Implement data structures (lists, dictionaries)
2. Add file I/O operations
3. Create a standard library of common functions
4. Develop an interactive REPL (Read-Eval-Print Loop)
5. Add error handling with try-catch mechanisms

### Long-term Vision

1. Develop a web-based IDE for मराठी-लँग
2. Create educational materials in Marathi
3. Implement object-oriented programming features
4. Build a community of contributors and users
5. Extend to other Indian languages using the same framework

## Community and Contribution

The project is open-source and welcomes contributions. Areas where help is particularly needed:

1. Bug fixes for known issues
2. Documentation in Marathi
3. Example programs
4. Testing across different environments
5. Educational resource development

## Technical Debt

Areas that need refactoring:

1. Parser implementation needs to be more robust
2. Block handling logic should be simplified
3. Variable and function scope management needs restructuring
4. Error handling system requires a complete overhaul

## Conclusion

मराठी-लँग represents an important step toward making programming accessible in Marathi. While still in early development, the foundation is in place for a fully-featured programming language that could have significant educational and cultural impact.

