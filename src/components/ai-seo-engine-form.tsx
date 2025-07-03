'use client';

import { generateSeoSuggestions, GenerateSeoSuggestionsOutput } from '@/ai/flows/ai-seo-engine';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Sparkles, Lightbulb, Key, Quote } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  keywords: z.string().min(3, { message: 'Please enter at least one keyword.' }),
});

export default function AISeoEngineForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<GenerateSeoSuggestionsOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    startTransition(async () => {
      try {
        const response = await generateSeoSuggestions(values);
        setResult(response);
      } catch (error) {
        console.error('Error getting SEO suggestions:', error);
        toast({
          title: 'An error occurred',
          description: 'Failed to get SEO suggestions. Please try again.',
          variant: 'destructive',
        });
      }
    });
  }
  
  const renderSuggestions = (items: string[]) => (
    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Enter Your Keywords</CardTitle>
          <CardDescription>
            Provide a comma-separated list of keywords related to your business or content (e.g., HR consulting, talent acquisition, small business HR).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., HR consulting, employee relations" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                <Sparkles className="mr-2 h-5 w-5" />
                {isPending ? 'Generating...' : 'Generate SEO Suggestions'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isPending && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">SEO Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-6 pt-0">
             <Skeleton className="h-10 w-full" />
             <Skeleton className="h-10 w-full" />
             <Skeleton className="h-10 w-full" />
             <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      )}

      {result && (
        <Card className="fade-in">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">AI-Generated SEO Suggestions</CardTitle>
                <CardDescription>Use these suggestions to improve your website's search engine performance.</CardDescription>
            </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold"><Quote className="mr-2 h-5 w-5 text-primary" /> Title Suggestions</AccordionTrigger>
                <AccordionContent>{renderSuggestions(result.titleSuggestions)}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold"><Quote className="mr-2 h-5 w-5 text-primary" /> Meta Description Suggestions</AccordionTrigger>
                <AccordionContent>{renderSuggestions(result.metaDescriptionSuggestions)}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold"><Key className="mr-2 h-5 w-5 text-primary" /> Keyword Suggestions</AccordionTrigger>
                <AccordionContent>{renderSuggestions(result.keywordSuggestions)}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold"><Lightbulb className="mr-2 h-5 w-5 text-primary" /> Content Optimization Tips</AccordionTrigger>
                <AccordionContent>{renderSuggestions(result.contentOptimizationTips)}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
