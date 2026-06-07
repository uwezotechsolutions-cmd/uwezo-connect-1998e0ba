import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import whyImpact from "@/assets/why-impact.jpg";
import whySkill from "@/assets/why-skill.jpg";
import whyScale from "@/assets/why-scale.jpg";
import whyLanguages from "@/assets/why-languages.jpg";
import whyCulture from "@/assets/why-culture.jpg";
import whyTrial from "@/assets/why-trial.jpg";
import whyTransparency from "@/assets/why-transparency.jpg";

export const Route = createFileRoute("/why-uwezo")({
  head: () => ({
    meta: [
      { title: "Why Uwezo — Seven Reasons Global Companies Choose Us" },
      { name: "description", content: "Direct impact, high skill at low overhead, scalable teams, multilingual proficiency, trial-friendly, transparent reporting." },
    ],
  }),
  component: WhyUwezo,
});

const reasons = [
  { t: "You fight joblessness directly", d: "Your invoice becomes a salary.", img: whyImpact },
  { t: "High skill, low overhead", d: "No office rent, no expensive equipment. Just talent.", img: whySkill },
  { t: "Scalable teams", d: "Need one data entry clerk or ten? We grow with you.", img: whyScale },
  { t: "Multilingual proficiency", d: "Our team speaks English, French, Portuguese, Swahili, Lingala, Kirundi, Kinyarwanda, Tshiluba, and Chichewa.", img: whyLanguages },
  { t: "Cultural intelligence", d: "We work with clients from USA, Europe, Africa, Asia.", img: whyCulture },
  { t: "Trial-friendly", d: "Start with a small paid test. No long‑term commitment.", img: whyTrial },
  { t: "Transparent reporting", d: "Weekly updates on hours, tasks, and impact metrics.", img: whyTransparency },
];

function WhyUwezo() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Uwezo</span>
          <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">Seven reasons global companies choose Uwezo</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">A pragmatic case for hiring a refugee team — competitive on quality and price, transformative on impact.</p>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.06}>
              <li className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={r.img}
                    alt={r.t}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 gap-5 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent font-display text-lg text-accent-foreground">{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{r.t}</h3>
                    <p className="text-sm text-muted-foreground">{r.d}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
