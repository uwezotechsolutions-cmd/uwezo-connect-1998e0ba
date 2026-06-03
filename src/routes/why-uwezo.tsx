import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/why-uwezo")({
  head: () => ({
    meta: [
      { title: "Why Uwezo — Seven Reasons Global Companies Choose Us" },
      { name: "description", content: "Direct impact, high skill at low overhead, scalable teams, English & French proficiency, trial-friendly, transparent reporting." },
    ],
  }),
  component: WhyUwezo,
});

const reasons = [
  { t: "You fight joblessness directly", d: "Your invoice becomes a salary." },
  { t: "High skill, low overhead", d: "No office rent, no expensive equipment. Just talent." },
  { t: "Scalable teams", d: "Need one data entry clerk or ten? We grow with you." },
  { t: "English & French proficiency", d: "Many of our team members speak both fluently." },
  { t: "Cultural intelligence", d: "We work with clients from USA, Europe, Africa, Asia." },
  { t: "Trial-friendly", d: "Start with a small paid test. No long‑term commitment." },
  { t: "Transparent reporting", d: "Weekly updates on hours, tasks, and impact metrics." },
];

function WhyUwezo() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Uwezo</span>
        <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">Seven reasons global companies choose Uwezo</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">A pragmatic case for hiring a refugee team — competitive on quality and price, transformative on impact.</p>

        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {reasons.map((r, i) => (
            <li key={r.t} className="flex gap-5 rounded-xl border border-border bg-card p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-display text-lg text-accent-foreground">{i + 1}</span>
              <div>
                <h3 className="font-semibold text-foreground">{r.t}</h3>
                <p className="text-sm text-muted-foreground">{r.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
