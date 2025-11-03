'use server';

/**
 * @fileOverview Generates personalized project recommendations based on client interests and project requirements.
 *
 * - generateProjectRecommendations - A function that generates project recommendations.
 * - GenerateProjectRecommendationsInput - The input type for the generateProjectRecommendations function.
 * - GenerateProjectRecommendationsOutput - The return type for the generateProjectRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectRecommendationsInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the client, e.g., specific industries, technologies, or project types.'),
  requirements: z
    .string()
    .describe('The specific project requirements of the client, e.g., features, scale, budget.'),
});
export type GenerateProjectRecommendationsInput = z.infer<
  typeof GenerateProjectRecommendationsInputSchema
>;

const GenerateProjectRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe(
      'A list of personalized project recommendations based on the client interests and project requirements.'
    ),
});
export type GenerateProjectRecommendationsOutput = z.infer<
  typeof GenerateProjectRecommendationsOutputSchema
>;

export async function generateProjectRecommendations(
  input: GenerateProjectRecommendationsInput
): Promise<GenerateProjectRecommendationsOutput> {
  return generateProjectRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectRecommendationsPrompt',
  input: {schema: GenerateProjectRecommendationsInputSchema},
  output: {schema: GenerateProjectRecommendationsOutputSchema},
  prompt: `You are an AI assistant specializing in providing personalized project recommendations.

  Based on the client's interests and project requirements, provide a list of project recommendations that align with their needs.

  Interests: {{{interests}}}
  Requirements: {{{requirements}}}

  Recommendations:`, // Removed 'Output format:' instruction
});

const generateProjectRecommendationsFlow = ai.defineFlow(
  {
    name: 'generateProjectRecommendationsFlow',
    inputSchema: GenerateProjectRecommendationsInputSchema,
    outputSchema: GenerateProjectRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
