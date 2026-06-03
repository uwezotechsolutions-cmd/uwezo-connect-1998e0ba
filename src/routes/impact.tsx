import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Uwezo Tech Solutions" },
      { name: "description", content: "Your work creates real income for refugees in Dzaleka. See our impact numbers and future goals." },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Impact</span>
        <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">Your work creates this change</h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl text-primary">The problem</h2>
            <p className="mt-3 text-foreground/85">
              In Dzaleka, the official unemployment rate among refugees is above 80%. Most adults survive on food rations
              and small informal trades. Without legal work, many lose hope.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
            <h2 className="font-display text-2xl text-accent">The Uwezo solution</h2>
            <p className="mt-3 opacity-95">For every $500 your company spends with us:</p>
            <ul className="mt-3 space-y-2 text-sm opacity-95">
              <li>• One refugee works 40 hours that month.</li>
              <li>• That refugee can afford rent, school fees, and medical care.</li>
              <li>• The camp's economy gets a small but real boost.</li>
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl text-foreground">Our current numbers</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              { n: 12, suffix: "", label: "Refugees employed (goal: 50)" },
              { n: 2400, suffix: "+", label: "Hours worked" },
              { n: 94, suffix: "%", label: "Client satisfaction" },
              { n: 14200, prefix: "$", suffix: "+", label: "Direct income paid" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-6">
                <div className="font-display text-4xl text-primary">
                  <Counter to={s.n} prefix={s.prefix ?? ""} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

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
      </section>
    </SiteLayout>
  );
}
