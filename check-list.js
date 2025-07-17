import { fetchAirdropConfigs } from './api.js';
import { sendSlackMessage } from './slack.js';

// 🟩 Dùng account đầu tiên từ file JSON (hoặc hardcode nếu cần)
import { readFile } from 'fs/promises';

const jsonText = await readFile('./accounts.json', 'utf-8');
const accounts = JSON.parse(jsonText);
const account = accounts[0];


(async () => {
  console.log(`[CHECK] Checking airdrop list for ${account.name}...`);

  const configs = await fetchAirdropConfigs(account);

  console.log(`[${account.name}] Found ${configs.length} airdrop configs`);

  if (!configs.length) {
    const msg = `[${account.name}] ❌ No airdrop configs`;
    console.log(msg);
    await sendSlackMessage(msg);
    return;
  }

  const activeConfigs = configs.filter(cfg => cfg.status !== 'ended');

  if (activeConfigs.length === 0) {
    return;
  }

  // 🟡 Có ít nhất 1 config chưa kết thúc
  for (const cfg of activeConfigs) {
    const claimStartLocal = new Date(cfg.claimStartTime).toLocaleString('en-GB', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  
    const msg = `
    ----------------------------------------------
  🚨 [Binance Alpha] Found active airdrop!
  
  - Name: ${cfg.configName}
  - Airdrop Amount: ${cfg.airdropAmount} ${cfg.tokenSymbol}
  - Points Threshold : ${cfg.pointsThreshold}
  - Second Points Threshold: ${cfg.secondPointsThreshold}
  - Status: ${cfg.status}
  - ClaimStart (UTC+7): ${claimStartLocal}
  - Config ID: ${cfg.configId}
  ----------------------------------------------
    `.trim();
  
    console.log(msg);
    await sendSlackMessage(msg);
  }
})();
