### Design Pattern Decisions
* Inter-Contract Execution : function `callChangeNumberEntities` from contract `EntitiesNumber.sol` is using function `changeNumberEntities` from contract `DidForDases.sol`
* Inheritance and Interfaces : contract `DidForDases.sol` inherits from `Ownable.sol`
* Access Control Design Patterns : function `replaceAdmin` from contract `DidForDases.sol` has a restricted access