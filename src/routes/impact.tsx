import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import orphanageImg from "@/assets/impact-orphanage.jpg";
import hungerImg from "@/assets/impact-hunger.jpg";
import hopeImg from "@/assets/impact-hope.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Uwezo Connect" },
      { name: "description", content: "Your work creates real income for refugees in Dzaleka. See our impact numbers, community visits, and future goals." },
    ],
  }),
  component: Impact,
});

const stories = [
  {
    img: orphanageImg,
    title: "Visiting Corneille Orphanage",
    text: "Our team regularly visits Corneille Orphanage inside Dzaleka Refugee Camp — bringing food, school supplies, and time to children who have lost everything. Every contract you sign with us helps fund these visits.",
  },
  {
    img: hungerImg,
    title: "Pushing back hunger, one meal at a time",
    text: "With steady income from your projects, our team members can put real meals on the table for their families — and share with neighbours who have less. Less hunger means children stay in school and adults can keep learning.",
  },
  {
    img: hopeImg,
    title: "Giving hope to a forgotten community",
    text: "Dzaleka is often invisible to the rest of the world. By choosing Uwezo, you show refugees here that their skills matter, that their work is valued, and that a future beyond the camp is possible.",
  },
];

function Impact() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Impact</span>
          <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">Your work creates this change</h1>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-2xl text-primary">The problem</h2>
              <p className="mt-3 text-foreground/85">
                In Dzaleka, the official unemployment rate among refugees is above 80%. Most adults survive on food rations
                and small informal trades. Without legal work, many lose hope.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
              <h2 className="font-display text-2xl text-accent">The Uwezo solution</h2>
              <p className="mt-3 opacity-95">For every $500 your company spends with us:</p>
              <ul className="mt-3 space-y-2 text-sm opacity-95">
                <li>• One refugee works 40 hours that month.</li>
                <li>• That refugee can afford rent, school fees, and medical care.</li>
                <li>• The camp's economy gets a small but real boost.</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground">Stories from the ground</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Beyond invoices and hours, your support shows up in small, human moments inside Dzaleka.</p>
          </Reveal>

          <div className="mt-10 space-y-12">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <article className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1280}
                      height={832}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-primary">{s.title}</h3>
                    <p className="mt-3 text-foreground/85">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl text-foreground">Our current numbers</h2>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              { n: 12, suffix: "", label: "Refugees employed (goal: 50)" },
              { n: 2400, suffix: "+", label: "Hours worked" },
              { n: 94, suffix: "%", label: "Client satisfaction" },
              { n: 14200, prefix: "$", suffix: "+", label: "Direct income paid" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="font-display text-4xl text-primary">
                    <Counter to={s.n} prefix={s.prefix ?? ""} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-14 rounded-2xl bg-secondary p-8">
            <h2 className="font-display text-2xl text-primary">Future goals</h2>
            <ul className="mt-4 space-y-2 text-foreground/85">
              <li>• Open a small digital training lab inside Dzaleka.</li>
              <li>• Partner with NGOs to certify more refugees in data and design.</li>
              <li>• Become a fully refugee‑owned cooperative.</li>
            </ul>
            <p className="mt-6 text-sm italic text-muted-foreground">
              Track your personal impact. When you hire us, we'll send you a quarterly “Impact Statement” showing exactly how
              many hours of work you funded.
            </p>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
