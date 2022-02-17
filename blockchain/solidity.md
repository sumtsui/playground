### External functions
External functions are meant to be called by other contracts. They cannot be used for internal call. To call external function within contract this.function_name() call is required. State variables cannot be marked as external.

The expressions this.g(8); and c.g(2); (where c is a contract instance) are also valid function calls, but this time, the function will be called “externally”, via a message call and not directly via jumps. Please note that function calls on this cannot be used in the constructor, as the actual contract has not been created yet.
https://docs.soliditylang.org/en/v0.8.3/control-structures.html#external-function-calls