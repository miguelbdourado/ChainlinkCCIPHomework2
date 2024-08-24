/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  WETH9,
  WETH9Interface,
} from "../../../../../@chainlink/local/src/shared/WETH9";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600d81526020017f5772617070656420457468657200000000000000000000000000000000000000815250600090816200004a91906200033c565b506040518060400160405280600481526020017f5745544800000000000000000000000000000000000000000000000000000000815250600190816200009191906200033c565b506012600260006101000a81548160ff021916908360ff160217905550348015620000bb57600080fd5b5062000423565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200014457607f821691505b6020821081036200015a5762000159620000fc565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001c47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000185565b620001d0868362000185565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200021d620002176200021184620001e8565b620001f2565b620001e8565b9050919050565b6000819050919050565b6200023983620001fc565b62000251620002488262000224565b84845462000192565b825550505050565b600090565b6200026862000259565b620002758184846200022e565b505050565b5b818110156200029d57620002916000826200025e565b6001810190506200027b565b5050565b601f821115620002ec57620002b68162000160565b620002c18462000175565b81016020851015620002d1578190505b620002e9620002e08562000175565b8301826200027a565b50505b505050565b600082821c905092915050565b60006200031160001984600802620002f1565b1980831691505092915050565b60006200032c8383620002fe565b9150826002028217905092915050565b6200034782620000c2565b67ffffffffffffffff811115620003635762000362620000cd565b5b6200036f82546200012b565b6200037c828285620002a1565b600060209050601f831160018114620003b457600084156200039f578287015190505b620003ab85826200031e565b8655506200041b565b601f198416620003c48662000160565b60005b82811015620003ee57848901518255600182019150602085019450602081019050620003c7565b868310156200040e57848901516200040a601f891682620002fe565b8355505b6001600288020188555050505b505050505050565b610ebb80620004336000396000f3fe6080604052600436106100a05760003560e01c8063313ce56711610064578063313ce567146101ad57806370a08231146101d857806395d89b4114610215578063a9059cbb14610240578063d0e30db01461027d578063dd62ed3e14610287576100af565b806306fdde03146100b4578063095ea7b3146100df57806318160ddd1461011c57806323b872dd146101475780632e1a7d4d14610184576100af565b366100af576100ad6102c4565b005b600080fd5b3480156100c057600080fd5b506100c961036a565b6040516100d69190610b0f565b60405180910390f35b3480156100eb57600080fd5b5061010660048036038101906101019190610bca565b6103f8565b6040516101139190610c25565b60405180910390f35b34801561012857600080fd5b506101316104ea565b60405161013e9190610c4f565b60405180910390f35b34801561015357600080fd5b5061016e60048036038101906101699190610c6a565b6104f2565b60405161017b9190610c25565b60405180910390f35b34801561019057600080fd5b506101ab60048036038101906101a69190610cbd565b610848565b005b3480156101b957600080fd5b506101c2610982565b6040516101cf9190610d06565b60405180910390f35b3480156101e457600080fd5b506101ff60048036038101906101fa9190610d21565b610995565b60405161020c9190610c4f565b60405180910390f35b34801561022157600080fd5b5061022a6109ad565b6040516102379190610b0f565b60405180910390f35b34801561024c57600080fd5b5061026760048036038101906102629190610bca565b610a3b565b6040516102749190610c25565b60405180910390f35b610285610a50565b005b34801561029357600080fd5b506102ae60048036038101906102a99190610d4e565b610a5a565b6040516102bb9190610c4f565b60405180910390f35b34600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103139190610dbd565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040516103609190610c4f565b60405180910390a2565b6000805461037790610e20565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390610e20565b80156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104d89190610c4f565b60405180910390a36001905092915050565b600047905090565b600081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561054057600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415801561060a57506fffffffffffffffffffffffffffffffff8016600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b1561072c5781600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561069857600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107249190610e51565b925050819055505b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461077b9190610e51565b9250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107d19190610dbd565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108359190610c4f565b60405180910390a3600190509392505050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561089457600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108e39190610e51565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610930573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65826040516109779190610c4f565b60405180910390a250565b600260009054906101000a900460ff1681565b60036020528060005260406000206000915090505481565b600180546109ba90610e20565b80601f01602080910402602001604051908101604052809291908181526020018280546109e690610e20565b8015610a335780601f10610a0857610100808354040283529160200191610a33565b820191906000526020600020905b815481529060010190602001808311610a1657829003601f168201915b505050505081565b6000610a483384846104f2565b905092915050565b610a586102c4565b565b6004602052816000526040600020602052806000526040600020600091509150505481565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab9578082015181840152602081019050610a9e565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ae182610a7f565b610aeb8185610a8a565b9350610afb818560208601610a9b565b610b0481610ac5565b840191505092915050565b60006020820190508181036000830152610b298184610ad6565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b6182610b36565b9050919050565b610b7181610b56565b8114610b7c57600080fd5b50565b600081359050610b8e81610b68565b92915050565b6000819050919050565b610ba781610b94565b8114610bb257600080fd5b50565b600081359050610bc481610b9e565b92915050565b60008060408385031215610be157610be0610b31565b5b6000610bef85828601610b7f565b9250506020610c0085828601610bb5565b9150509250929050565b60008115159050919050565b610c1f81610c0a565b82525050565b6000602082019050610c3a6000830184610c16565b92915050565b610c4981610b94565b82525050565b6000602082019050610c646000830184610c40565b92915050565b600080600060608486031215610c8357610c82610b31565b5b6000610c9186828701610b7f565b9350506020610ca286828701610b7f565b9250506040610cb386828701610bb5565b9150509250925092565b600060208284031215610cd357610cd2610b31565b5b6000610ce184828501610bb5565b91505092915050565b600060ff82169050919050565b610d0081610cea565b82525050565b6000602082019050610d1b6000830184610cf7565b92915050565b600060208284031215610d3757610d36610b31565b5b6000610d4584828501610b7f565b91505092915050565b60008060408385031215610d6557610d64610b31565b5b6000610d7385828601610b7f565b9250506020610d8485828601610b7f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610dc882610b94565b9150610dd383610b94565b9250828201905080821115610deb57610dea610d8e565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e3857607f821691505b602082108103610e4b57610e4a610df1565b5b50919050565b6000610e5c82610b94565b9150610e6783610b94565b9250828203905081811115610e7f57610e7e610d8e565b5b9291505056fea2646970667358221220a9ddec3f2bc68d873ac562f3cc2cfd79bbb608a2a3c31897f77e3641b0856d3464736f6c63430008140033";

type WETH9ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WETH9ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WETH9__factory extends ContractFactory {
  constructor(...args: WETH9ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WETH9> {
    return super.deploy(overrides || {}) as Promise<WETH9>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WETH9 {
    return super.attach(address) as WETH9;
  }
  override connect(signer: Signer): WETH9__factory {
    return super.connect(signer) as WETH9__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WETH9Interface {
    return new utils.Interface(_abi) as WETH9Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WETH9 {
    return new Contract(address, _abi, signerOrProvider) as WETH9;
  }
}
