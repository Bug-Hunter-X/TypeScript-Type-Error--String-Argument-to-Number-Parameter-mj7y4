# TypeScript Type Error: String Argument to Number Parameter

This repository demonstrates a common type error in TypeScript: providing an argument of an incorrect type to a function.  The `bug.ts` file shows the problematic code, while `bugSolution.ts` provides a corrected version.

## Bug

The `add` function is defined to accept two number arguments and return their sum. However, in the `result` variable assignment, a string ('2') is passed as the second argument.  TypeScript's type checker correctly identifies this as a type error.

## Solution

The solution involves ensuring the arguments passed to the `add` function are of the correct type.  This can be achieved through explicit type casting or by ensuring the input data is consistently numeric.