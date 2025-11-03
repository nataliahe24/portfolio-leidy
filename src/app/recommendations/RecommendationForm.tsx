"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";
import React from "react";
import { generateProjectRecommendations } from '@/ai/flows/generate-project-recommendations';
import type { GenerateProjectRecommendationsOutput } from '@/ai/flows/generate-project-recommendations';

const formSchema = z.object({
  interests: z.string().min(10, { message: "Please describe your interests in at least 10 characters." }),
  requirements: z.string().min(10, { message: "Please describe your requirements in at least 10 characters." }),
});

type RecommendationFormProps = {
  onRecommendation: (result: GenerateProjectRecommendationsOutput) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export function RecommendationForm({ onRecommendation, setIsLoading }: RecommendationFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      requirements: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const result = await generateProjectRecommendations(values);
      onRecommendation(result);
    } catch (error) {
      console.error("Error generating recommendations:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to generate recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Interests</FormLabel>
              <FormControl>
                <Textarea placeholder="e.g., 'sustainable energy', 'mobile gaming', 'AI-powered analytics'" {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Requirements</FormLabel>
              <FormControl>
                <Textarea placeholder="e.g., 'a responsive dashboard', 'integration with Stripe', 'user authentication'" {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          <Sparkles className="mr-2 h-4 w-4" />
          {form.formState.isSubmitting ? "Generating..." : "Get Recommendations"}
        </Button>
      </form>
    </Form>
  );
}
