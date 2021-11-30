console.log("Welcome to DID for Dases App!")

const ssAddress = '0xb45b95554Aa12A49B70797fff266Df15fcD8BE3D';

const ssABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "Trace",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "dasesAdmin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listOfEntities",
    "outputs": [
      {
        "internalType": "address",
        "name": "publicKey",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "entityName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "emailContact",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxEntities",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_entityName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_emailContact",
        "type": "string"
      }
    ],
    "name": "idAssociation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_entityName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_emailContact",
        "type": "string"
      }
    ],
    "name": "idUpdate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "idDelete",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "completeCleaning",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newAdmin",
        "type": "address"
      }
    ],
    "name": "replaceAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxEntities",
        "type": "uint256"
      }
    ],
    "name": "changeNumberEntities",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAssociatedEntitiesList",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "publicKey",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "entityName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "emailContact",
            "type": "string"
          }
        ],
        "internalType": "struct DidForDases.Entities[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
//Verification Of Metamask availability 
window.addEventListener('load', function () {
  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
    } else {
      console.log('MetaMask is not available')
      alert('MetaMask is not Available. You need to install Metamask!')
    }
  } else {
    console.log('window.ethereum is not found')
    alert('MetaMask is not Available. You need to install Metamask!')
  }
})

//Interaction with button for Metamask Connection
var mmEnable = document.getElementById('mm-connect-button');
mmEnable.innerHTML = "Connect to Metamask"

//When the connection is done, the address is displayed
mmEnable.onclick = async () => {
  await ethereum.request({
    method:
      'eth_requestAccounts'
  })
  mmEnable.innerHTML = "Connected to: " + ethereum.selectedAddress;
}

//Interaction with button for adding an association in the list of entities
const ssAssociation = document.getElementById('association-button');
ssAssociation.onclick = async () => {
  // Recording Name and Email from the Form into variables
  const associationName = document.getElementById('ass-name').value;
  console.log(associationName)
  const associationEmail = document.getElementById('ass-email').value;
  console.log(associationEmail)
  //Clear the values of the form
  document.getElementById('ass-name').value = '';
  document.getElementById('ass-email').value = '';
  // Sending the Name and Email into the smart contract associated to the sender address
  var web3 = new Web3(window.ethereum)
  const associate = new web3.eth.Contract(ssABI, ssAddress)
  await associate.methods.idAssociation(associationName, associationEmail).send({ from: ethereum.selectedAddress })
  //Reload of the page to display the new association in the list
  location.reload()
}

//Interaction with button for updating an association in the list of entities
const ssUpdate = document.getElementById('update-button');
ssUpdate.onclick = async () => {
  // Recording Name and Email from the Form into variables
  const updateName = document.getElementById('upd-name').value;
  console.log(updateName)
  const updateEmail = document.getElementById('upd-email').value;
  console.log(updateEmail)
  //Clear the values of the form
  document.getElementById('upd-name').value = '';
  document.getElementById('upd-email').value = '';
  // Sending the Name and Email into the smart contract associated to the sender address for the update
  var web3 = new Web3(window.ethereum)
  const associate = new web3.eth.Contract(ssABI, ssAddress)

  await associate.methods.idUpdate(updateName, updateEmail).send({ from: ethereum.selectedAddress })
  //Reload of the page to display the  update in the list
  location.reload()
}

//Interaction with button for address removal into the list
const ssDelete = document.getElementById('delete-button');
ssDelete.onclick = async () => {
  // Sending the sender address into the smart contract for removal
  var web3 = new Web3(window.ethereum)
  const associate = new web3.eth.Contract(ssABI, ssAddress)
  await associate.methods.idDelete().send({ from: ethereum.selectedAddress })
  //Reload of the page to display the  update in the list
  location.reload()
}

//Function to display the list of entities based on the array from the smart contract
async function listOfEntities() {
  var web3 = new Web3(window.ethereum)
  const smartContract = new web3.eth.Contract(ssABI, ssAddress)
  //Collect the list of entities (loe) from the smart contract
  loe = await smartContract.methods.getAssociatedEntitiesList().call();
  //creation of a table based on this loe
  entitiesTable = document.getElementById('entitiesTable');
  for (var i = 0; i < loe.length; i++) {
    var newRow = entitiesTable.insertRow(entitiesTable.length);
    for (var j = 0; j < loe[i].length; j++) {
      var cell = newRow.insertCell(j);
      cell.innerHTML = loe[i][j];
    }
  }
}