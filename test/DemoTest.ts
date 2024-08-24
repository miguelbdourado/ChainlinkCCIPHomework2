import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";

import {
  CCIPLocalSimulator,
  CrossChainNameServiceRegister,
  CrossChainNameServiceReceiver,
  CrossChainNameServiceLookup,
} from "../typechain-types/contracts/index";


describe("CCIP Cross Chain Name Service Test", function () {
    it("CCIP Cross Chain Name Service Test", async function () {
        //Create an instance of CCIPLocalSimulator.sol smart contract.
        const ccipLocalSimulatorFactory = await ethers.getContractFactory("CCIPLocalSimulator");
        const ccipLocalSimulator = await ccipLocalSimulatorFactory.deploy();
        await ccipLocalSimulator.deployed(); 
        console.log('1. Created CCIP Local Simulator instance successfully. Deployed in address: ' + ccipLocalSimulator.address);
    
        //Call the configuration() function to get Router contract address.
        const config: {
            chainSelector_: bigint;
            sourceRouter_: string;
            destinationRouter_: string;
            wrappedNative_: string;
            linkToken_: string;
            ccipBnM_: string;
            ccipLnM_: string;
        } = await ccipLocalSimulator.configuration();
        console.log('2. Router Contract address => ' + config.sourceRouter_);

        //Create instances of CrossChainNameServiceRegister.sol, CrossChainNameServiceReceiver.sol and CrossChainNameServiceLookup.sol smart contracts and call the enableChain() function where needed.
        const ccNameServiceLookupFactory = await ethers.getContractFactory("CrossChainNameServiceLookup");
        const ccnsSourceLookup = await ccNameServiceLookupFactory.deploy();
        await ccnsSourceLookup.deployed();
        const ccnsReceiverLookup = await ccNameServiceLookupFactory.deploy();
        await ccnsReceiverLookup.deployed();

        const ccNameServiceRegisterFactory = await ethers.getContractFactory("CrossChainNameServiceRegister");
        const ccnsRegister = await ccNameServiceRegisterFactory.deploy(config.sourceRouter_, ccnsSourceLookup.address);
        await ccnsRegister.deployed();

        const ccNameServiceReceiverFactory = await ethers.getContractFactory("CrossChainNameServiceReceiver");
        const ccnsReceiver = await ccNameServiceReceiverFactory.deploy(config.destinationRouter_, ccnsReceiverLookup.address, config.chainSelector_);
        await ccnsReceiver.deployed();

        let txResponse = await ccnsRegister.enableChain(config.chainSelector_, ccnsReceiver.address, 500_000n);
        await txResponse.wait();
        console.log('3. instances created and enableChain called');
        //Call the setCrossChainNameServiceAddress function of the CrossChainNameServiceLookup.sol smart contract "source" instance and provide the address of the CrossChainNameServiceRegister.sol smart contract instance. Repeat the process for the CrossChainNameServiceLookup.sol smart contract "receiver" instance and provide the address of the CrossChainNameServiceReceiver.sol smart contract instance. 
        txResponse = await ccnsSourceLookup.setCrossChainNameServiceAddress(ccnsRegister.address);
        await txResponse.wait();

        txResponse = await ccnsReceiverLookup.setCrossChainNameServiceAddress(ccnsReceiver.address)
        console.log('4. Completed setCrossChainNameServiceAddress for source and receiver');

        //Call the register() function and provide “alice.ccns” and Alice’s EOA address as function arguments.
        const [, alice] = await ethers.getSigners();
        txResponse = await ccnsRegister.connect(alice).register("alice.ccns");
        await txResponse.wait();
        console.log('5. registered alice');
        //Call the lookup() function and provide “alice.ccns” as a function argument. Assert that the returned address is Alice’s EOA address.
        const resultAddressSource = await ccnsSourceLookup.lookup("alice.ccns");
        console.log(resultAddressSource + ':' + await alice.getAddress());

        expect(resultAddressSource).to.equal(await alice.getAddress());

        const resultAddresDestination = await ccnsReceiverLookup.lookup("alice.ccns");
        expect(resultAddresDestination).to.equal(await alice.getAddress());
        console.log('6. Completed Lookup!');
    });

});
  