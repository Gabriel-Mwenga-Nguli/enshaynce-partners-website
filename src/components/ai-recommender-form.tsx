'use client';

import { recommendHrServices, RecommendHrServicesOutput } from '@/ai/flows/hr-service-recommender';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Wand2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  companyDescription: z.string().min(50, { message: 'Please provide a description of at least 50 characters.' }),
});

export default function AIRecommenderForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<RecommendHrServicesOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyDescription: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    startTransition(async () => {
      try {
        const response = await recommendHrServices(values);
        setResult(response);
      } catch (error) {
        console.error('Error getting recommendations:', error);
        toast({
          title: 'An error occurred',
          description: 'Failed to get recommendations. Please try again.',
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Describe Your Company</CardTitle>
          <CardDescription>
            Tell us about your company's size, industry, and any specific HR challenges you're facing. The more detail, the better the recommendation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="companyDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Company Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., We are a fast-growing tech startup with 50 employees. We are struggling with hiring technical roles and retaining our senior developers..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                <Wand2 className="mr-2 h-5 w-5" />
                {isPending ? 'Analyzing...' : 'Get Recommendations'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isPending && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Recommended Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              <Skeleton className="h-8 w-1/3" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-8 w-1/4" />
              </div>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card className="fade-in">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Recommended Services</CardTitle>
            <CardDescription>Based on your description, we suggest focusing on these areas:</CardDescription>
          </CardHeader>
          <CardContent>
            {result.recommendedServices && result.recommendedServices.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                    {result.recommendedServices.map((service, index) => (
                        <Badge key={index} className="text-sm px-4 py-2 transition-transform hover:scale-110" variant="default">
                            {service}
                        </Badge>
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No specific services could be recommended. Please try refining your company description.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
