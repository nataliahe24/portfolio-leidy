"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RecommendationForm } from "./RecommendationForm";
import type { GenerateProjectRecommendationsOutput } from '@/ai/flows/generate-project-recommendations';

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = React.useState<GenerateProjectRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-headline text-xl font-bold text-primary">
            Leidy's Portfolio
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <div className="space-y-4 text-center mb-12">
            <Sparkles className="mx-auto h-12 w-12 text-primary" />
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              AI Project Recommender
            </h1>
            <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed">
              Describe your idea, and I'll generate personalized project suggestions that I can help you build.
            </p>
          </div>

          <div className="grid gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Describe Your Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <RecommendationForm
                  onRecommendation={setRecommendations}
                  setIsLoading={setIsLoading}
                />
              </CardContent>
            </Card>

            {isLoading && (
              <div className="flex justify-center items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-foreground/80">Generating ideas...</p>
              </div>
            )}

            {recommendations && !isLoading && (
              <Card className="shadow-lg animate-in fade-in-50 duration-500">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Sparkles className="text-primary"/>
                    Your Personalized Recommendations
                  </CardTitle>
                  <CardDescription>Here are a few project ideas based on your input.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-none whitespace-pre-wrap text-sm text-foreground/90">
                    {recommendations.recommendations}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
