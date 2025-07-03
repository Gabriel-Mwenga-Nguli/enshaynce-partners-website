import AISeoEngineForm from "@/components/ai-seo-engine-form";

export default function SeoEnginePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center fade-in">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI SEO Engine
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Boost your website's visibility. Enter your target keywords, and our AI will generate optimized titles, descriptions, and content tips to improve your search engine ranking.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-3xl">
           <AISeoEngineForm />
        </div>
      </div>
    </div>
  );
}
