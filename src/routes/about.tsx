import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Mission – Uwezo Tech Solutions | Refugee Employment in Dzaleka" },
      { name: "description", content: "Uwezo Tech Solutions was born inside Dzaleka Refugee Camp to turn displacement into digital ability. Learn our story, values, and team." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">About</span>
        <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">From Displacement to Digital Ability</h1>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5 text-foreground/85">
            <h2 className="font-display text-2xl text-primary">Our Story</h2>
            <p>
              Dzaleka Refugee Camp in Dowa, Malawi, is home to over 50,000 people fleeing conflict in the Democratic
              Republic of Congo, Burundi, Rwanda, Somalia, and elsewhere. Most refugees cannot legally work outside the
              camp. Many have university degrees, tech skills, and an urgent desire to contribute — but no opportunities.
            </p>
            <p>
              Uwezo Tech Solutions was born to change that. <strong>“Uwezo”</strong> means <em>ability</em> or <em>power</em>{" "}
              in Swahili. We gather talented refugees and provide them with stable, remote digital work. In return, your
              business gets high‑quality services at fair prices, and a refugee earns a sustainable income, regains
              dignity, and supports their family.
            </p>
            <h2 className="font-display text-2xl text-primary pt-6">Our Team</h2>
            <p>
              We are a small but growing collective of refugees and former refugees — data entry specialists, designers,
              developers, customer support agents, analysts, and video editors. Most have completed digital skills
              training through local NGOs. We are based entirely inside Dzaleka, connected to the world by internet.
            </p>
          </div>
          <aside>
            <h2 className="font-display text-2xl text-primary">Our Values</h2>
            <ul className="mt-4 space-y-4">
              {[
                ["Dignity first", "Work, not charity."],
                ["Professional excellence", "We treat your business goals seriously."],
                ["Community growth", "Every hire lifts the whole camp."],
                ["Transparency", "You'll know exactly who is working on your tasks."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-lg border border-border bg-card p-4">
                  <p className="font-semibold text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
