import axios from 'axios';
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';
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
