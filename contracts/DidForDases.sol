// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DidForDases {
    struct Entities {
        //Structue of the Entities who participate in Dases
        address publicKey;
        string entityName;
        string emailContact;
    }

    //Array who list these entites, based on Entitiees struct
    Entities[] public listOfEntities;

    //Associate the address of the applicant to his entity name and his email contact
    //This assocatiion is stored in the Array listOfEntities
    function idAssociation(
        string memory _entityName,
        string memory _emailContact
    ) public {
        listOfEntities.push(Entities(msg.sender, _entityName, _emailContact));
    }

    //Update the entity name and the email contact of applicant into the array ListOfEntities
    function idUpdate(string memory _entityName, string memory _emailContact)
        public
    {
        for (uint256 i = 0; i < listOfEntities.length; i++) {
            if (listOfEntities[i].publicKey == msg.sender) {
                listOfEntities[i].entityName = _entityName;
                listOfEntities[i].emailContact = _emailContact;
                break;
            }
        }
    }

    //Delete the row of the applicant into the array ListOfEntities
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

    //Collect the list of Entities
    function getAssociatedEntitiesList()
        public
        view
        returns (Entities[] memory)
    {
        return listOfEntities;
    }
}
