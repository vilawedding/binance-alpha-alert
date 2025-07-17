import { fetchAirdropConfigs } from './api.js';
import { sendSlackMessage } from './slack.js';

(async () => {
  console.log(`[CHECK] Checking airdrop list for`);

  let configs;
  try {
    configs = await fetchAirdropConfigs(account);
  } catch (err) {
    const errorMsg = `
    ----------------------------------------------
❌ [Binance Alpha] API call failed
  - Error: ${err.message || err}
----------------------------------------------
    `.trim();
    console.error(errorMsg);
    await sendSlackMessage(errorMsg);
    return;
  }

  console.log(`Found ${configs.length} airdrop configs`);

  if (!configs.length) {
    const msg = `❌ No airdrop configs`;
    console.log(msg);
    await sendSlackMessage(msg);
    return;
  }

  const activeConfigs = configs.filter(cfg => cfg.status !== 'ended');

  if (activeConfigs.length === 0) return;

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
- Points Threshold: ${cfg.pointsThreshold}
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
