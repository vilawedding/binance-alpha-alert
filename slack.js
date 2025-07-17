import axios from 'axios';
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
export async function sendSlackMessage(message) {
  const url = SLACK_WEBHOOK_URL
  if (!url) {
    console.warn('Slack webhook URL not set');
    return;
  }

  try {
    await axios.post(url, { text: message });
  } catch (err) {
    console.error('❌ Slack error:', err.message);
  }
}
