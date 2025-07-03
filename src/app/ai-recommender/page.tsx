import AIRecommenderForm from "@/components/ai-recommender-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Service Recommender",
    description: "Not sure where to start? Describe your company and our AI-powered tool will suggest the most relevant HR services for you from Enshaynce Partners.",
};

export default function AIRecommenderPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center fade-in">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI Service Recommender
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Not sure where to start? Describe your company and its challenges, and our AI-powered tool will suggest the most relevant HR services for you.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-3xl">
           <AIRecommenderForm />
        </div>
      </div>
    </div>
  );
}
