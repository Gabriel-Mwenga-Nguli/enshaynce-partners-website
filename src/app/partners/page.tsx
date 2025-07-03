'use client';

import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PartnerProfileSkeleton = () => (
    <div className="bg-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <Card className="p-6 space-y-8">
          <div className="flex flex-col items-center text-center gap-4">
            <Skeleton className="h-40 w-40 rounded-full md:h-48 md:w-48" />
            <div className="space-y-2">
                <Skeleton className="h-8 w-72" />
                <Skeleton className="h-6 w-48" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-16 rounded-full" />
                <Skeleton className="h-8 w-32 rounded-full" />
            </div>
          </div>
          
          <Skeleton className="h-10 w-full max-w-sm mx-auto" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pt-6">
            <div className="lg:col-span-3 space-y-8">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-80 w-full" />
            </div>
            <div className="lg:col-span-2 space-y-8">
                <Skeleton className="h-80 w-full" />
                <Skeleton className="h-80 w-full" />
            </div>
          </div>
        </Card>
      </div>
    </div>
);

const PartnerProfile = dynamic(() => import('@/components/partner-profile'), {
  ssr: false,
  loading: () => <PartnerProfileSkeleton />,
});

export default function PartnersPage() {
  return <PartnerProfile />;
}
