import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

async function getObject() {
  // 初始化一个SuiClient实例
  const fullNodeUrl = getFullnodeUrl('mainnet');
  const client = new SuiClient({ url: fullNodeUrl });

  // 调用SuiClient获取Object
  const objectId = '0xfff7c613d39a609ff58ff460c370feb1882eccf903dedb107b08d9cec1ac1b63';
  const objectInfo = await client.getObject({
    id: objectId,
    options: { showDisplay: true, showType: true, showContent: true }
  });
  // 解析object业务字段
  const objectContent = (objectInfo as any).data.content;
  // 解析object样式字段
  const displayData = (objectInfo as any).data.display;
  return { displayData, objectContent };
}

getObject().then(console.log).catch(console.error);
