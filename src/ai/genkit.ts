import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  // Use a powerful and cost-effective model suitable for free-tier usage.
  model: 'googleai/gemini-1.5-flash-latest',
});
