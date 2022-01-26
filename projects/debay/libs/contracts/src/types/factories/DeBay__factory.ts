/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DeBay, DeBayInterface } from "../DeBay";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f44654261790000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4442415900000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612b6e80620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461026f578063b88d4fde1461028b578063c87b56dd146102a7578063e985e9c5146102d7576100ea565b80636352211e146101f157806370a082311461022157806395d89b4114610251576100ea565b8063095ea7b3116100c8578063095ea7b31461016d578063110bcd451461018957806323b872dd146101b957806342842e0e146101d5576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611c1b565b610307565b6040516101169190612021565b60405180910390f35b6101276103e9565b604051610134919061203c565b60405180910390f35b61015760048036038101906101529190611c6d565b61047b565b6040516101649190611fba565b60405180910390f35b61018760048036038101906101829190611bdf565b610500565b005b6101a3600480360381019061019e9190611b8b565b610618565b6040516101b0919061225e565b60405180910390f35b6101d360048036038101906101ce9190611a85565b610650565b005b6101ef60048036038101906101ea9190611a85565b6106b0565b005b61020b60048036038101906102069190611c6d565b6106d0565b6040516102189190611fba565b60405180910390f35b61023b60048036038101906102369190611a20565b610782565b604051610248919061225e565b60405180910390f35b61025961083a565b604051610266919061203c565b60405180910390f35b61028960048036038101906102849190611b4f565b6108cc565b005b6102a560048036038101906102a09190611ad4565b6108e2565b005b6102c160048036038101906102bc9190611c6d565b610944565b6040516102ce919061203c565b60405180910390f35b6102f160048036038101906102ec9190611a49565b610a96565b6040516102fe9190612021565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e182610b2a565b5b9050919050565b6060600080546103f8906124b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610424906124b4565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610b94565b6104c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bc906121be565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061050b826106d0565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561057c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105739061221e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661059b610c00565b73ffffffffffffffffffffffffffffffffffffffff1614806105ca57506105c9816105c4610c00565b610a96565b5b610609576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610600906120fe565b60405180910390fd5b6106138383610c08565b505050565b60006106246007610cc1565b60006106306007610cd7565b905061063c8482610ce5565b6106468184610eb3565b8091505092915050565b61066161065b610c00565b82610f27565b6106a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106979061223e565b60405180910390fd5b6106ab838383611005565b505050565b6106cb838383604051806020016040528060008152506108e2565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610779576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107709061213e565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9061211e565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610849906124b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610875906124b4565b80156108c25780601f10610897576101008083540402835291602001916108c2565b820191906000526020600020905b8154815290600101906020018083116108a557829003601f168201915b5050505050905090565b6108de6108d7610c00565b8383611261565b5050565b6108f36108ed610c00565b83610f27565b610932576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109299061223e565b60405180910390fd5b61093e848484846113ce565b50505050565b606061094f82610b94565b61098e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109859061219e565b60405180910390fd5b60006006600084815260200190815260200160002080546109ae906124b4565b80601f01602080910402602001604051908101604052809291908181526020018280546109da906124b4565b8015610a275780601f106109fc57610100808354040283529160200191610a27565b820191906000526020600020905b815481529060010190602001808311610a0a57829003601f168201915b505050505090506000610a3861142a565b9050600081511415610a4e578192505050610a91565b600082511115610a83578082604051602001610a6b929190611f96565b60405160208183030381529060405292505050610a91565b610a8c84611441565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c7b836106d0565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4c9061217e565b60405180910390fd5b610d5e81610b94565b15610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d959061207e565b60405180910390fd5b610daa600083836114e8565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dfa9190612343565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b610ebc82610b94565b610efb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef29061215e565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190610f22929190611844565b505050565b6000610f3282610b94565b610f71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f68906120de565b60405180910390fd5b6000610f7c836106d0565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610feb57508373ffffffffffffffffffffffffffffffffffffffff16610fd38461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b80610ffc5750610ffb8185610a96565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611025826106d0565b73ffffffffffffffffffffffffffffffffffffffff161461107b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611072906121de565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e29061209e565b60405180910390fd5b6110f68383836114e8565b611101600082610c08565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461115191906123ca565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111a89190612343565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c7906120be565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113c19190612021565b60405180910390a3505050565b6113d9848484611005565b6113e5848484846114ed565b611424576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141b9061205e565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061144c82610b94565b61148b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611482906121fe565b60405180910390fd5b600061149561142a565b905060008151116114b557604051806020016040528060008152506114e0565b806114bf84611684565b6040516020016114d0929190611f96565b6040516020818303038152906040525b915050919050565b505050565b600061150e8473ffffffffffffffffffffffffffffffffffffffff16611831565b15611677578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611537610c00565b8786866040518563ffffffff1660e01b81526004016115599493929190611fd5565b602060405180830381600087803b15801561157357600080fd5b505af19250505080156115a457506040513d601f19601f820116820180604052508101906115a19190611c44565b60015b611627573d80600081146115d4576040519150601f19603f3d011682016040523d82523d6000602084013e6115d9565b606091505b5060008151141561161f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116169061205e565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061167c565b600190505b949350505050565b606060008214156116cc576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061182c565b600082905060005b600082146116fe5780806116e790612517565b915050600a826116f79190612399565b91506116d4565b60008167ffffffffffffffff811115611740577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156117725781602001600182028036833780820191505090505b5090505b600085146118255760018261178b91906123ca565b9150600a8561179a9190612560565b60306117a69190612343565b60f81b8183815181106117e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561181e9190612399565b9450611776565b8093505050505b919050565b600080823b905060008111915050919050565b828054611850906124b4565b90600052602060002090601f01602090048101928261187257600085556118b9565b82601f1061188b57805160ff19168380011785556118b9565b828001600101855582156118b9579182015b828111156118b857825182559160200191906001019061189d565b5b5090506118c691906118ca565b5090565b5b808211156118e35760008160009055506001016118cb565b5090565b60006118fa6118f58461229e565b612279565b90508281526020810184848401111561191257600080fd5b61191d848285612472565b509392505050565b6000611938611933846122cf565b612279565b90508281526020810184848401111561195057600080fd5b61195b848285612472565b509392505050565b60008135905061197281612adc565b92915050565b60008135905061198781612af3565b92915050565b60008135905061199c81612b0a565b92915050565b6000815190506119b181612b0a565b92915050565b600082601f8301126119c857600080fd5b81356119d88482602086016118e7565b91505092915050565b600082601f8301126119f257600080fd5b8135611a02848260208601611925565b91505092915050565b600081359050611a1a81612b21565b92915050565b600060208284031215611a3257600080fd5b6000611a4084828501611963565b91505092915050565b60008060408385031215611a5c57600080fd5b6000611a6a85828601611963565b9250506020611a7b85828601611963565b9150509250929050565b600080600060608486031215611a9a57600080fd5b6000611aa886828701611963565b9350506020611ab986828701611963565b9250506040611aca86828701611a0b565b9150509250925092565b60008060008060808587031215611aea57600080fd5b6000611af887828801611963565b9450506020611b0987828801611963565b9350506040611b1a87828801611a0b565b925050606085013567ffffffffffffffff811115611b3757600080fd5b611b43878288016119b7565b91505092959194509250565b60008060408385031215611b6257600080fd5b6000611b7085828601611963565b9250506020611b8185828601611978565b9150509250929050565b60008060408385031215611b9e57600080fd5b6000611bac85828601611963565b925050602083013567ffffffffffffffff811115611bc957600080fd5b611bd5858286016119e1565b9150509250929050565b60008060408385031215611bf257600080fd5b6000611c0085828601611963565b9250506020611c1185828601611a0b565b9150509250929050565b600060208284031215611c2d57600080fd5b6000611c3b8482850161198d565b91505092915050565b600060208284031215611c5657600080fd5b6000611c64848285016119a2565b91505092915050565b600060208284031215611c7f57600080fd5b6000611c8d84828501611a0b565b91505092915050565b611c9f816123fe565b82525050565b611cae81612410565b82525050565b6000611cbf82612300565b611cc98185612316565b9350611cd9818560208601612481565b611ce28161264d565b840191505092915050565b6000611cf88261230b565b611d028185612327565b9350611d12818560208601612481565b611d1b8161264d565b840191505092915050565b6000611d318261230b565b611d3b8185612338565b9350611d4b818560208601612481565b80840191505092915050565b6000611d64603283612327565b9150611d6f8261265e565b604082019050919050565b6000611d87601c83612327565b9150611d92826126ad565b602082019050919050565b6000611daa602483612327565b9150611db5826126d6565b604082019050919050565b6000611dcd601983612327565b9150611dd882612725565b602082019050919050565b6000611df0602c83612327565b9150611dfb8261274e565b604082019050919050565b6000611e13603883612327565b9150611e1e8261279d565b604082019050919050565b6000611e36602a83612327565b9150611e41826127ec565b604082019050919050565b6000611e59602983612327565b9150611e648261283b565b604082019050919050565b6000611e7c602e83612327565b9150611e878261288a565b604082019050919050565b6000611e9f602083612327565b9150611eaa826128d9565b602082019050919050565b6000611ec2603183612327565b9150611ecd82612902565b604082019050919050565b6000611ee5602c83612327565b9150611ef082612951565b604082019050919050565b6000611f08602983612327565b9150611f13826129a0565b604082019050919050565b6000611f2b602f83612327565b9150611f36826129ef565b604082019050919050565b6000611f4e602183612327565b9150611f5982612a3e565b604082019050919050565b6000611f71603183612327565b9150611f7c82612a8d565b604082019050919050565b611f9081612468565b82525050565b6000611fa28285611d26565b9150611fae8284611d26565b91508190509392505050565b6000602082019050611fcf6000830184611c96565b92915050565b6000608082019050611fea6000830187611c96565b611ff76020830186611c96565b6120046040830185611f87565b81810360608301526120168184611cb4565b905095945050505050565b60006020820190506120366000830184611ca5565b92915050565b600060208201905081810360008301526120568184611ced565b905092915050565b6000602082019050818103600083015261207781611d57565b9050919050565b6000602082019050818103600083015261209781611d7a565b9050919050565b600060208201905081810360008301526120b781611d9d565b9050919050565b600060208201905081810360008301526120d781611dc0565b9050919050565b600060208201905081810360008301526120f781611de3565b9050919050565b6000602082019050818103600083015261211781611e06565b9050919050565b6000602082019050818103600083015261213781611e29565b9050919050565b6000602082019050818103600083015261215781611e4c565b9050919050565b6000602082019050818103600083015261217781611e6f565b9050919050565b6000602082019050818103600083015261219781611e92565b9050919050565b600060208201905081810360008301526121b781611eb5565b9050919050565b600060208201905081810360008301526121d781611ed8565b9050919050565b600060208201905081810360008301526121f781611efb565b9050919050565b6000602082019050818103600083015261221781611f1e565b9050919050565b6000602082019050818103600083015261223781611f41565b9050919050565b6000602082019050818103600083015261225781611f64565b9050919050565b60006020820190506122736000830184611f87565b92915050565b6000612283612294565b905061228f82826124e6565b919050565b6000604051905090565b600067ffffffffffffffff8211156122b9576122b861261e565b5b6122c28261264d565b9050602081019050919050565b600067ffffffffffffffff8211156122ea576122e961261e565b5b6122f38261264d565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061234e82612468565b915061235983612468565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561238e5761238d612591565b5b828201905092915050565b60006123a482612468565b91506123af83612468565b9250826123bf576123be6125c0565b5b828204905092915050565b60006123d582612468565b91506123e083612468565b9250828210156123f3576123f2612591565b5b828203905092915050565b600061240982612448565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561249f578082015181840152602081019050612484565b838111156124ae576000848401525b50505050565b600060028204905060018216806124cc57607f821691505b602082108114156124e0576124df6125ef565b5b50919050565b6124ef8261264d565b810181811067ffffffffffffffff8211171561250e5761250d61261e565b5b80604052505050565b600061252282612468565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561255557612554612591565b5b600182019050919050565b600061256b82612468565b915061257683612468565b925082612586576125856125c0565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612ae5816123fe565b8114612af057600080fd5b50565b612afc81612410565b8114612b0757600080fd5b50565b612b138161241c565b8114612b1e57600080fd5b50565b612b2a81612468565b8114612b3557600080fd5b5056fea2646970667358221220500900ae7750b0dfa1e2d493070e68a4ac5dc095f9939438ec54c971598dcf6564736f6c63430008040033";

export class DeBay__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DeBay> {
    return super.deploy(overrides || {}) as Promise<DeBay>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DeBay {
    return super.attach(address) as DeBay;
  }
  connect(signer: Signer): DeBay__factory {
    return super.connect(signer) as DeBay__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeBayInterface {
    return new utils.Interface(_abi) as DeBayInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DeBay {
    return new Contract(address, _abi, signerOrProvider) as DeBay;
  }
}
