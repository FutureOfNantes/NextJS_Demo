console.log("hello dapp developers!!!")

const ssAddress = '0xF13a7F17F42de89a5f19cF2B7dcc9158C5BD33f2';

const ssABI = [
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
        "inputs": [],
        "name": "idDelete",
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
    }
];

window.addEventListener('load', function () {

    if (typeof window.ethereum !== 'undefined') {
        console.log('window.ethereum is enabled')
        if (window.ethereum.isMetaMask === true) {
            console.log('MetaMask is active')
            let mmDetected = document.getElementById('mm-detected')
            mmDetected.innerHTML += 'MetaMask Is Available!'

            // add in web3 here
            var web3 = new Web3(window.ethereum)

        } else {
            console.log('MetaMask is not available')
            alert('You need to install Metamask!')
            let mmDetected = document.getElementById('mm-detected')
            mmDetected.innerHTML += 'MetaMask Not Available!'
            // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
            // mmDetected.appendChild(node)
        }
    } else {
        console.log('window.ethereum is not found')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
    }
})


//var web3 = new Web3(window.ethereum)

const mmEnable = document.getElementById('mm-connect-button');

mmEnable.onclick = async () => {
    await ethereum.request({
        method:
            'eth_requestAccounts'
    })
    var mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = ethereum.selectedAddress;

}

const ssAssociation = document.getElementById('ss-association-button');

ssAssociation.onclick = async () => {
    const ssName = document.getElementById('ss-name').value;
    console.log(ssName)
    const ssEmail = document.getElementById('ss-email').value;
    console.log(ssEmail)

    var web3 = new Web3(window.ethereum)

    const associate = new web3.eth.Contract(ssABI, ssAddress)

    await associate.methods.idAssociation(ssName, ssEmail).send({ from: ethereum.selectedAddress })
}

const superTest = document.getElementById('test');
superTest.onclick = async () => {
    var web3 = new Web3(window.ethereum)
    const mega = new web3.eth.Contract(ssABI, ssAddress)
    giga = await mega.methods.getAssociatedEntitiesList().call();
    fetch = document.getElementById('fetch');
       for(var i=0; i <giga.length; i++){
           var newRow = fetch.insertRow(fetch.length);
           for(var j=0; j<giga[i].length; j++){
               var cell = newRow.insertCell(j);
               cell.innerHTML = giga[i][j];
           }
       }

}

