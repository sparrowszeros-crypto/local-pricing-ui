import React, { useState } from 'react';
import { BillingCycle, PricingTier } from '../types/pricing';

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'tier-basic',
    name: 'Asas',
    description: 'Sesuai untuk individu dan projek percubaan skala kecil.',
    priceMonthly: 29,
    priceYearlyPerMonth: 23,
    features: [
      'Akses ke 5 projek',
      'Analitis asas',
      'Penyimpanan data 5GB',
      'Sokongan komuniti',
      'Integrasi API terhad',
    ],
    ctaText: 'Mulakan Percuma',
  },
  {
    id: 'tier-pro',
    name: 'Pro',
    description: 'Penyelesaian terbaik untuk pembangun aktif dan syarikat permulaan.',
    priceMonthly: 79,
    priceYearlyPerMonth: 63,
    isPopular: true,
    features: [
      'Projek tanpa had',
      'Analitis lanjutan (Real-time)',
      'Penyimpanan data 100GB',
      'Sokongan e-mel keutamaan 24/7',
      'Akses penuh API & Webhook',
      'Eksport laporan tersuai',
    ],
    ctaText: 'Langgan Pro Sekarang',
  },
  {
    id: 'tier-enterprise',
    name: 'Enterprise',
    description: 'Infrastruktur khusus dan sokongan tahap tertinggi untuk organisasi.',
    priceMonthly: 199,
    priceYearlyPerMonth: 159,
    features: [
      'Semua ciri Pro',
      'SLA jaminan ketersediaan 99.9%',
      'Penyimpanan data khusus tanpa had',
      'Pengurus akaun khusus (Dedicated)',
      'Audit log & pematuhan keselamatan SOC2',
      'SSO (Single Sign-On) & SAML',
    ],
    ctaText: 'Hubungi Jualan',
  },
];

const CheckIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

export const PricingCardGrid: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const handleCtaClick = (tierId: string) => {
    alert(`Tindakan diambil untuk pelan: ${tierId} (${billingCycle})`);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen flex flex-col justify-center font-sans antialiased">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Seksyen */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            Harga Fleksibel
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Pilih pelan yang berkembang bersama sistem anda
          </p>
          <p className="mt-4 text-base text-slate-600">
            Telus sepenuhnya, tiada yuran tersembunyi. Naik taraf atau batal pada bila-bila masa.
          </p>
        </div>

        {/* Suis Togol Bayaran */}
        <div className="mt-10 flex justify-center items-center gap-3">
          <span
            className={`text-sm font-medium transition-colors cursor-pointer ${
              billingCycle === 'monthly' ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-700'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Bulanan
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={billingCycle === 'yearly'}
            aria-label="Tukar kitaran bayaran antara bulanan dan tahunan"
            onClick={() =>
              setBillingCycle((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'))
            }
            className={`relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
              billingCycle === 'yearly' ? 'bg-indigo-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>

          <div className="flex items-center gap-1.5">
            <span
              className={`text-sm font-medium transition-colors cursor-pointer ${
                billingCycle === 'yearly' ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-700'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Tahunan
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 shadow-sm">
              Diskaun 20%
            </span>
          </div>
        </div>

        {/* Grid Kad Harga */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price =
              billingCycle === 'yearly'
                ? tier.priceYearlyPerMonth
                : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'bg-white border-2 border-indigo-600 shadow-xl lg:-translate-y-2 z-10'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                } p-8`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      Paling Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <p className="mt-2 text-sm text-slate-500 min-h-[40px]">
                    {tier.description}
                  </p>

                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                      RM {price}
                    </span>
                    <span className="ml-1 text-sm font-medium text-slate-500">
                      /bulan
                    </span>
                  </div>

                  <div className="h-5 mt-1">
                    {billingCycle === 'yearly' && (
                      <p className="text-xs text-indigo-600 font-medium">
                        Dibilkan RM {price * 12} secara tahunan
                      </p>
                    )}
                  </div>

                  <hr className="my-6 border-slate-100" />

                  <div className="space-y-4">
                    <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Semua yang disertakan:
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckIcon className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                          <span className="ml-3 text-sm text-slate-700 leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => handleCtaClick(tier.id)}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      tier.isPopular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600 shadow-md hover:shadow-lg active:scale-[0.99]'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-300 active:scale-[0.99]'
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingCardGrid;
