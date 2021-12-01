// SPDX-License-Identifier: MIT
pragma solidity 0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title An association between public address and entity name/entity contact
/// @author Perrin Grandne
/// @notice This contract allows to add a row in an array with the address of the sender, his name and his email

//The contract inherits from Ownable module of Open Zeppelin
contract DidForDases is Ownable {
    //This declares a structure type, which will be used as structure of the array with the list of entities
    struct Entities {
        address publicKey; // It is the address of the entity who wants to be added
        string entityName; // It is the name of the entity
        string emailContact; // It is a contact address of the Entity
    }

    Entities[] public listOfEntities; //Array which list these entites, based on Entities struct

    address public dasesAdmin; //Owner of the smart contract and manager of the list of entities
    //It is duplicated with owner from Ownable (but I prefer this name...)

    uint public maxEntities; // Maximum number of Entities in the list

    event Trace(string message, address sender); //Event to trace the interactions

    //Store the address of the creator of the contract and fill in the array with this address as Admin of Dases
    constructor() {
        dasesAdmin = msg.sender;
        listOfEntities.push(
            Entities(dasesAdmin, "DASES Administrator", "contact@dases.com")
        );
        //Fix the maximum numbr of Entities in the list
        maxEntities = 10;
    }

    //Verify that the applicant is not the admin of Dases (to avoid a deletion by mistake)
    modifier notTheAdmin() {
        require(msg.sender != dasesAdmin);
        _;
    }

    //Verify that the applicant is not already in the list to avoid duplicate entities
    modifier notAlreadyExisting() {
        //Read all the array to verify that the entity is not already existing
        for (uint256 i = 0; i < listOfEntities.length; i++) {
            if (listOfEntities[i].publicKey != msg.sender) {} else {
                //If the address is already existing, the transaction is reverted
                revert(
                    "Your address is already existing in the list of Entities"
                );
            }
        }
        emit Trace('The address is not existing in the list of Entities and can be added', msg.sender);
        _;
    }

    //Associate the address of the applicant to his entity name and his email contact
    //This assocatiion is stored in the Array listOfEntities
    function idAssociation(
        string memory _entityName,
        string memory _emailContact
    ) public notAlreadyExisting {
        //Verify that the number of Entities is not at the limit
        require(listOfEntities.length<maxEntities,'The maximum number of entities is reached'); 
        //Adding the new entity
        listOfEntities.push(Entities(msg.sender, _entityName, _emailContact));
    }

    //Update the entity name and the email contact of applicant into the array ListOfEntities
    function idUpdate(string memory _entityName, string memory _emailContact)
        public
    {
        //Search the entity address and update name and contact when the address is found
        for (uint256 i = 0; i < listOfEntities.length; i++) {
            if (listOfEntities[i].publicKey == msg.sender) {
                listOfEntities[i].entityName = _entityName;
                listOfEntities[i].emailContact = _emailContact;
                break;
            }
        }
    }

    //Delete the row of the applicant into the array ListOfEntities
    function idDelete() public notTheAdmin {
        for (uint256 i = 0; i < listOfEntities.length; i++) {
            if (listOfEntities[i].publicKey == msg.sender) {
                listOfEntities[i] = listOfEntities[listOfEntities.length - 1];
                listOfEntities.pop();
            }
        }
    }

    //Delete all the rows exept the first one which is entity DASES Admin
    function completeCleaning() public onlyOwner {
        delete listOfEntities;
        listOfEntities.push(
            Entities(dasesAdmin, "DASES Administrator", "contact@dases.com")
        );
    }

    //Replace The Administrator
    function replaceAdmin(address _newAdmin) public onlyOwner {
        dasesAdmin = _newAdmin;
        transferOwnership(_newAdmin);
        listOfEntities[0].publicKey = dasesAdmin;
    }

        //This function changes the maximum number of Entities in the list
        //It can only be called by another contract or accounts
    function changeNumberEntities(uint _maxEntities) external {
        maxEntities = _maxEntities;
    }

    //Collect the list of Entities
    function getAssociatedEntitiesList()
        public
        view
        returns (Entities[] memory)
    {
        return listOfEntities;
    }
}
