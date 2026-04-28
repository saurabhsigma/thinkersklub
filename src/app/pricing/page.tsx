import Link from 'next/link';
import AnimationWrapper from '@/components/AnimationWrapper';
import { Building2, Check, MessageSquareQuote, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Pilot deployment',
    note: 'For schools evaluating a single product or beginning with a focused digital rollout.',
    features: ['Single-module deployment', 'Basic onboarding support', 'Best suited for first-phase adoption'],
    featured: false,
  },
  {
    name: 'School Suite',
    price: 'Most popular',
    note: 'For schools that want a connected setup across assessments, academics, and parent communication.',
    features: ['TestWest + LMS + Parent Teacher App', 'Implementation guidance', 'Integrated rollout approach'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom proposal',
    note: 'For school groups, larger institutions, and buyers who need tailored implementation and ERP planning.',
    features: ['Custom scope and workflows', 'Priority support and consultation', 'ERP roadmap alignment'],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="container py-24">
      <AnimationWrapper className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 border border-sky-100 font-semibold text-sm">
          <MessageSquareQuote size={16} /> Pricing approach
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-950 dark:text-white">
          Flexible pricing for schools of different sizes
        </h1>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
          We keep commercial conversations simple: start with one product, choose the integrated suite, or request a custom institutional proposal.
        </p>
      </AnimationWrapper>

      <div className="grid lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <AnimationWrapper key={plan.name} delay={index * 0.08}>
            <article
              className={`h-full rounded-4xl border p-8 shadow-sm transition-all ${
                plan.featured
                  ? 'border-emerald-300 bg-emerald-50/60 shadow-lg scale-[1.02]'
                  : 'border-slate-200 bg-white hover:shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">{plan.name}</h2>
                {plan.featured ? (
                  <span className="rounded-full bg-emerald-600 text-white px-3 py-1 text-xs font-semibold">
                    Recommended
                  </span>
                ) : null}
              </div>
              <div className="mt-5 text-3xl font-bold text-slate-950 dark:text-white">{plan.price}</div>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{plan.note}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Check size={18} className="text-emerald-600 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </AnimationWrapper>
        ))}
      </div>

      <AnimationWrapper className="mt-16 rounded-4xl bg-linear-to-r from-emerald-600 to-cyan-600 text-white p-10 md:p-14 shadow-2xl">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-emerald-50 font-semibold mb-3">
              <Building2 size={18} /> For school owners and procurement teams
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a tailored commercial proposal?</h2>
            <p className="text-emerald-50 text-lg max-w-2xl">
              Share your school size, products of interest, and rollout goals. We will suggest the most suitable structure for implementation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold py-4 px-8 rounded-full shadow-[0_10px_0_rgb(6,95,70)] active:shadow-[0_4px_0_rgb(6,95,70)] active:translate-y-1.5 transition-all hover:-translate-y-1 text-lg"
          >
            Request pricing <Rocket size={20} />
          </Link>
        </div>
      </AnimationWrapper>
    </main>
  );
}
