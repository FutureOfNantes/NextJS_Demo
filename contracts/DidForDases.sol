// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DidForDases {
    struct Entities {
        //Struct
        address publicKey;
        string entityName;
        string emailContact;
    }

    //An array of 'ListOfEntities' structs
    Entities[] public listOfEntities;

    function idAssociation(
        string memory _entityName,
        string memory _emailContact
    ) public {
        listOfEntities.push(Entities(msg.sender, _entityName, _emailContact));
    }

    function idUpdate(string memory _entityName, string memory _emailContact)
        public
    {
        for (uint256 i = 0; i < listOfEntities.length; i++) {
            if (listOfEntities[i].publicKey == msg.sender) {
                listOfEntities[i].entityName = _entityName;
                listOfEntities[i].emailContact = _emailContact;
            }
        }
    }

    function idDelete() public {
        for (uint256 i = 0; i < listOfEntities.length; i++) {
            if (
                listOfEntities[i].publicKey == msg.sender &&
                listOfEntities.length > 1
            ) {
                listOfEntities[i] = listOfEntities[listOfEntities.length - 1];
                listOfEntities.pop();
            }
        }
    }

    function getAssociatedEntitiesList()
        public
        view
        returns (Entities[] memory)
    {
        return listOfEntities;
    }
}
