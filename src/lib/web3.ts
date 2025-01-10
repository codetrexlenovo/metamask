// lib/web3.js
import {Web3} from "web3";
import { VestingContractABI } from "@/lib/utils/VestingContractABI";
let w3;
let connectedAddress
const url=process.env.NEXT_PUBLIC_RPC_MAINNET
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // MetaMask is running
//   window.ethereum.request({ method: 'eth_requestAccounts' }).then((response: string[])=>{

// 	console.log("Calling from web3.ts");

// 	const responseAccounts = response as string[]; 

//     connectedAddress= responseAccounts[0]
//   }
// );

window.ethereum.request({ method: 'eth_requestAccounts' })
.then((response: string[]) => {
  console.log("Response from MetaMask:", response);
  if (response && response.length > 0) {
	connectedAddress = response[0];
  } else {
	console.error("No accounts found in MetaMask.");
	connectedAddress = null;
  }
});

  w3 = new Web3(window.ethereum);
} else {
  // Fallback to HTTP provider
  w3 = new Web3(new Web3.providers.HttpProvider(`${url}`))

}

// Replace with your actual contract ABI
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "_round",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_cliffDurationInMonths",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_durationInMonths",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_initialUnlockPercentage",
				"type": "uint256"
			}
		],
		"name": "addVesting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tgeTime",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "AdminGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "admin",
				"type": "address"
			}
		],
		"name": "AdminRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "_round",
				"type": "uint8"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "_round",
				"type": "uint8"
			}
		],
		"name": "claimInitialUnlockedTokens",
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
		"name": "grantAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "round",
				"type": "uint8"
			}
		],
		"name": "InitialTokensReleased",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "releaseInitialAmountFromIDO",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			}
		],
		"name": "revokeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "round",
				"type": "uint8"
			}
		],
		"name": "TokensClaimed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_adminAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferToAdminAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "adminAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferToAdminAddress",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "round",
				"type": "uint8"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cliff",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "end",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "initialUnlock",
				"type": "uint256"
			}
		],
		"name": "VestingAdded",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "admins",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "allocatedAmounts",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "beneficiaryVestingIndices",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "_round",
				"type": "uint8"
			}
		],
		"name": "calculateClaimable",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "_round",
				"type": "uint8"
			}
		],
		"name": "calculateInitialClaimable",
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
		"name": "calculateTotalVestedAmount",
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
		"inputs": [
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "round",
				"type": "uint8"
			}
		],
		"name": "calculateTotalVestedForRound",
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
		"name": "getBalance",
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
		"inputs": [
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "_round",
				"type": "uint8"
			}
		],
		"name": "getRemainingAmountForRound",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"name": "getVestingSchedules",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum TokenSaleContract.VestingRounds",
						"name": "round",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "claimed",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "cliff",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "end",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "initialUnlock",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isInitialClaimed",
						"type": "bool"
					}
				],
				"internalType": "struct TokenSaleContract.Vesting[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "superAdmin",
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
		"name": "tgeTime",
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
		"name": "totalSupply",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "vestings",
		"outputs": [
			{
				"internalType": "enum TokenSaleContract.VestingRounds",
				"name": "round",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cliff",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "end",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "initialUnlock",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isInitialClaimed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Replace with your actual contract address
const contractAddress= process.env.NEXT_PUBLIC_FINAL_CONTRACT 
const vestingContractAddress = process.env.NEXT_PUBLIC_VESTING_CONTRACT_ADDRESS;
// Instantiate the contract object
const contract = new w3.eth.Contract(contractABI, contractAddress,);
const VestingContract = new w3.eth.Contract(
  VestingContractABI,
  vestingContractAddress
);
export { w3, contract,connectedAddress,VestingContract };



