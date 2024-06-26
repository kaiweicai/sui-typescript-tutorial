/** 从SUI SDK 引入TransactionBlock **/
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { suiClient, signer } from './sui-elements';

async function moneyTransfer() {
  /** 组织交易数据 **/
  const tx = new TransactionBlock();
  // 将要转移归属权的Object ID
  const objectId = '';
  // 接收方账户地址
  const recipient = '';
  tx.transferObjects([objectId], recipient); // 支持一次性转移多个Object

  /** 发起交易 **/
  // 签名并执行交易
  const result = await suiClient.signAndExecuteTransactionBlock({
    signer,
    transactionBlock: tx,
  });
  return result;
}

moneyTransfer().then(console.log).catch(console.error);

