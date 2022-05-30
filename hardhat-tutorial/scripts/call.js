const ethers = require('ethers');

async function call(){
    // The Contract interface
    let abi = [
        "event ValueChanged(address indexed author, string oldValue, string newValue)",
        "constructor(string value)",
        "function getValue() view returns (string value)",
        "function setValue(string value)"
    ];

    // Connect to the network
    let provider = ethers.getDefaultProvider();

    // The address from the above deployment example
    let contractAddress = "0xA329aA3D071469013e724270F3F60C1485aFeC5d";

    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(contractAddress, abi, provider);


    let currentValue = await contract.getValue();

    console.log(currentValue);

}
