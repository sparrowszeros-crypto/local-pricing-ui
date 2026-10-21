export type BillingCycle = 'monthly' | 'yearly';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearlyPerMonth: number; // Kadar bulanan jika dibayar tahunan (~20% diskaun)
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}
