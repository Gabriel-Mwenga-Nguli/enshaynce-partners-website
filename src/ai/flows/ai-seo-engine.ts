'use server';

/**
 * @fileOverview AI SEO Engine to provide optimized SEO suggestions based on keywords.
 *
 * - generateSeoSuggestions - A function that generates SEO suggestions based on user-provided keywords.
 * - GenerateSeoSuggestionsInput - The input type for the generateSeoSuggestions function.
 * - GenerateSeoSuggestionsOutput - The return type for the generateSeoSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoSuggestionsInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the business for SEO optimization.'),
});
export type GenerateSeoSuggestionsInput = z.infer<
  typeof GenerateSeoSuggestionsInputSchema
>;

const GenerateSeoSuggestionsOutputSchema = z.object({
  titleSuggestions: z
    .array(z.string())
    .describe('Suggested title tags for SEO optimization.'),
  metaDescriptionSuggestions: z
    .array(z.string())
    .describe('Suggested meta descriptions for SEO optimization.'),
  keywordSuggestions: z
    .array(z.string())
    .describe('Additional keyword suggestions for content optimization.'),
  contentOptimizationTips: z
    .array(z.string())
    .describe('Tips for optimizing website content for SEO.'),
});
export type GenerateSeoSuggestionsOutput = z.infer<
  typeof GenerateSeoSuggestionsOutputSchema
>;

export async function generateSeoSuggestions(
  input: GenerateSeoSuggestionsInput
): Promise<GenerateSeoSuggestionsOutput> {
  return generateSeoSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoSuggestionsPrompt',
  input: {schema: GenerateSeoSuggestionsInputSchema},
  output: {schema: GenerateSeoSuggestionsOutputSchema},
  prompt: `You are an SEO expert. Based on the provided keywords, generate optimized SEO suggestions for a website.

  Keywords: {{{keywords}}}

  Provide suggestions for:
  - Title tags (3 suggestions)
  - Meta descriptions (3 suggestions)
  - Additional keywords (5 suggestions)
  - Content optimization tips (3 tips)

  Format your response as a JSON object conforming to the following schema:
  ${JSON.stringify(GenerateSeoSuggestionsOutputSchema.describe())}`,
});

const generateSeoSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateSeoSuggestionsFlow',
    inputSchema: GenerateSeoSuggestionsInputSchema,
    outputSchema: GenerateSeoSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
