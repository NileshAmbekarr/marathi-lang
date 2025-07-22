from interpreter import run_marathi_code
import sys

if len(sys.argv) != 2:
    print("वापर: python run.py examples/hello.mr")
    sys.exit(1)

filename = sys.argv[1]

with open(filename, encoding="utf-8") as f:
    code = f.read()

run_marathi_code(code)
