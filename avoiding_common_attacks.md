### Avoiding Common Attacks
* Specific Compiler Pragma is used for `DidForDases.sol` and `EntitiesNumber.sol` (not for Migrations.sol but created by truffle init)
* Built-In Variable Names : No shadowed name
* Proper Use of Require and Revert : Used as much as possible when it was useful and towards the beginning. Revert is used with a if-else statement
* Use Modifiers Only for Validations : The modifiders were used just for validations  and no external calls were done 