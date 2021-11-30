# blockchain-developer-bootcamp-final-project
My final project for Consensys Developer Bootcamp is available on this link : https://did-for-dases.on.fleek.co/

### Decentralized Identity (DID) for Data Space Education and Skills (DaSES)

--- 

DaSES will be a space for exchange and decentralized storage about data education and skills from a multi-party ecosystem.

In this ecosystem, the contracting between Data Providers and Data Users will be done on the Blockchain with smart contracts.
These entities (Data Provider and Data Users) must be identified on the Blockchain for doing and signing this contract.

This project is an example about "How to associate information with an entity and its address" as a very basic MVP. The term 'DID' is not used correctly because it is not a real DID but just an association between public key and entity name and email contact.
It is just a small first step to apprehend how the blockchain works.
In the long term, we plan to use https://walt.id and its SSI Kit for DID managing.

### Directory Structure

The purpose of this MVP is to create a first contract to store an array with one column for the public address of the entity, a second column with the name of the entity, and a thrid column with the email contact of the entity.

The project is deployed on Rinkeby Test Network
### How to run this project locally:
Clone the repository in a local folder and launch:
- npm install or yarn install

Launch:
- truffle deploy 
- truffle migrate --network development

It is recommanded to use Liver Server (extension of Visual Studio Code) as a development local Server

Go to repository client for launching index.html
##### Prerequisites
MetaMask is requested in your browser. The Network must be localhost if you use it locally or Rinkeby if you use it on the tesnet
Please install the latest version of Node.Js and npm or yarn

Locally, we use port: 8545
You need to create an .env file with 2 variables :
- MNEMONIC="PUT-YOUR_SEED_PHRASE"
- INFURA_URL=PUT_YOUR_INNFURA_RINKEBY_URL
##### Contracts
The name of the main contract is DidForDases.sol and it is located in the contracts repository.

This contract associates the creator as Dases Administrator (he has some specific rights on the arrray, like clear it, or transfer his ownership...)
Each account can contact the contract by adding a name and an email address and request to be associated to them on the array : function idAssociatioh
Then the entity can request to udapte its information (name, email address) or can request to be deleted of the list : function idUpdate, idDelete

There is one function to access to the table to display it on a webpage : function getAssociatedEntitiesList

One entity cannot be stored 2 times in the array, no duplication. The number of entities in this list is limited to 10 but this number can be changed.

Finally, one other contract : EntitiesNumber allows to access to this variable and change it
##### Frontend
The Front End is very basic (one index.html and one dapp.js, no React) and accessible into the client folder
