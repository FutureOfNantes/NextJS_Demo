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

The project is deployed on `Rinkeby` Test Network

##### Prerequisites
MetaMask is requested in your browser. The Network must be localhost if you use it locally or Rinkeby if you use it on the tesnet
###### Install nodejs
Download and install latest node.js from [here](https://nodejs.org/en/download/). 
Install nodejs by unpacking it and adding to the `PATH`.
```bash
$ sudo mkdir -p /usr/local/lib/nodejs
$ sudo tar -xJvf node-v10.16.3-darwin-x64.tar -C /usr/local/lib/nodejs
$ export PATH=/usr/local/lib/nodejs/node-v10.16.3-darwin-x64/bin:$PATH
```
Note: Make npm and node commands accessible for your user (without sudo). Run 
```bash
$ mkdir ~/.npm-packages
$ npm config set prefix ~/.npm-packages
```
Finally, verify the install:
```bash
$ node -v
$ npm version
```

###### Setup Truffle
Truffle is a world class development environment, testing framework and asset 
pipeline for blockchains using the Ethereum Virtual Machine (EVM).
Install truffle using npm:
```bash
$ npm install -g truffle
```
You need to create an .env file with 2 variables in the root directory for depoying the smart contract on the testnet:
* MNEMONIC="PUT-YOUR_SEED_PHRASE"
* INFURA_URL=PUT_YOUR_INNFURA_RINKEBY_URL

### How to run this project locally:
Locally, we use port: 8545
Clone the repository in a local folder:
```bash
$ git clone https://github.com/pgrandne/blockchain-developer-bootcamp-final-project.git
```

 Launch (you can also use yarn if you prefer):
 ```bash
$ npm install
```

If you want you can use Ganache:
Ganache is a personal blockchain for Ethereum development you can use to 
deploy contracts, develop your applications, and run tests. It is a test
Ethereum node - safe and free to run as it creates your private testing 
blockchain network. Download Ganache from 
[here](https://www.trufflesuite.com/ganache). 


Launch the deployment and the migration of the smart contracts:
 ```bash
$ truffle compile 
$ truffle migrate --network development
```
If you want to migrate the contract on the testnet, please replace development by rinkeby

* When the contract is migrated, find the adress of the smart contract in the terminal and copy it
* Got to client/dapp.js and paste the address into the row 3 const ssAddress ="PAST_HERE"

It is recommanded to use Liver Server (extension of Visual Studio Code) as a development local Server

Go to repository client for launching index.html

You can interact with the contract

If you don't have eth on the testnet : https://faucet.rinkeby.io/

##### Contracts
The name of the main contract is `DidForDases.sol` and it is located in the contracts repository.

This contract associates the creator as Dases Administrator (he has some specific rights on the arrray, like clear it, or transfer his ownership...)
Each account can contact the contract by adding a name and an email address and request to be associated to them on the array : function `idAssociation`
Then the entity can request to udapte its information (name, email address) or can request to be deleted of the list : function `idUpdate`, `idDelete`

There is one function to access to the table to display it on a webpage : function `getAssociatedEntitiesList`

One entity cannot be stored 2 times in the array, no duplication. The number of entities in this list is limited to 10 but this number can be changed.

Finally, one other contract : EntitiesNumber allows to access to this variable and change the maximum number of entities
##### Frontend
The Front End is very basic (one index.html and one dapp.js, no React) and accessible into the client folder

##### Dapp
* Connect to Metamask
* Add your entity
* Update yuor entity
* Delete your entity

##### Test
* For launching tests, please open an new terminal and launch Ganache
* Verify the port in Ganache : RPC SERVER HTTP://127.0.0.1:8545. If the port is not 8545 you have to open settings window, click on Server and change the Port number. Click on Restart
* When Ganache is lauched on the expected port, please launch
 ```bash
$ truffle test
```
All tests should be passed with no error
##### My Ethereum Address
0x1a2b8bd408413179524e3e61FfA1378b7b7688D5


##### Link for the screencast recording
https://drive.google.com/drive/folders/1a8g4u8rhoUnHhU8CyNydKDtTsuLiBkXT?usp=sharing

##### Comment
The front end is not dynamic as expected, it should be replaced by React to get a dyanmic table at the left of the page and to avoid the reload of the page after each transaction