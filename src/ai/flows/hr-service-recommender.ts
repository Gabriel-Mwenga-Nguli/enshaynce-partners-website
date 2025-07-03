// src/ai/flows/hr-service-recommender.ts
'use server';
/**
 * @fileOverview Recommends HR consulting services based on a company description.
 *
 * - recommendHrServices - A function that recommends HR services.
 * - RecommendHrServicesInput - The input type for the recommendHrServices function.
 * - RecommendHrServicesOutput - The return type for the recommendHrServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendHrServicesInputSchema = z.object({
  companyDescription: z
    .string()
    .describe('A detailed description of the company and its needs.'),
});
export type RecommendHrServicesInput = z.infer<typeof RecommendHrServicesInputSchema>;

const RecommendHrServicesOutputSchema = z.object({
  recommendedServices: z
    .array(z.string())
    .describe('A list of HR consulting services recommended for the company.'),
});
export type RecommendHrServicesOutput = z.infer<typeof RecommendHrServicesOutputSchema>;

export async function recommendHrServices(
  input: RecommendHrServicesInput
): Promise<RecommendHrServicesOutput> {
  return recommendHrServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendHrServicesPrompt',
  input: {schema: RecommendHrServicesInputSchema},
  output: {schema: RecommendHrServicesOutputSchema},
  prompt: `You are an expert HR consultant at Enshaynce Partners Limited. Given the following company description, recommend the most relevant consulting services that Enshaynce Partners offers.\n\nCompany Description: {{{companyDescription}}}\n\nHere are the services that Enshaynce Partners Limited offers:
- H.R Consulting
- Job Evaluation & Analysis
- Strategic Planning
- Proposal Development and Grant Writing
- Training, Capacity and Team Building
- Change Management and Organizational Development
- Performance Management\n\nBased on the company description, recommend a list of services from the above list that would be most beneficial. List the recommended service name only, nothing else.`,
});

const recommendHrServicesFlow = ai.defineFlow(
  {
    name: 'recommendHrServicesFlow',
    inputSchema: RecommendHrServicesInputSchema,
    outputSchema: RecommendHrServicesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
