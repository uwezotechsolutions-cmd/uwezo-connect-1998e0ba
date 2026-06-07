import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import ceoImg from "@/assets/team-ceo.jpg";
import croImg from "@/assets/team-cro.jpg";
import countryImg from "@/assets/team-country-director.jpg";
import hubImg from "@/assets/team-hub-manager.jpg";
import leaderImg from "@/assets/team-leader.jpg";
import dataImg from "@/assets/team-data-entry-leader.jpg";
import groupImg from "@/assets/team-group.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Mission – Uwezo Tech Solutions | Refugee Employment in Dzaleka" },
      { name: "description", content: "Uwezo Tech Solutions was born inside Dzaleka Refugee Camp to turn displacement into digital ability. Meet our team and learn our story." },
    ],
  }),
  component: About,
});

const team = [
  { name: "CEO", role: "Chief Executive Officer", img: ceoImg },
  { name: "CRO", role: "Chief Revenue Officer", img: croImg },
  { name: "Country Director", role: "Malawi Operations", img: countryImg },
  { name: "Hub Manager", role: "Dzaleka Hub", img: hubImg },
  { name: "Team Leader", role: "Delivery & Quality", img: leaderImg },
  { name: "Data Entry Team Leader", role: "Data Operations", img: dataImg },
];

function About() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About</span>
          <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">From Displacement to Digital Ability</h1>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <Reveal className="md:col-span-2 space-y-5 text-foreground/85" delay={0.05}>
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
            <h2 className="font-display text-2xl text-primary pt-6">Our Approach</h2>
            <p>
              We are a small but growing collective of refugees and former refugees — data entry specialists, designers,
              developers, customer support agents, analysts, and video editors. Most have completed digital skills
              training through local NGOs. We are based entirely inside Dzaleka, connected to the world by internet.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
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
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="container-page pb-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Team</span>
          <h2 className="mt-2 max-w-3xl font-display text-4xl text-foreground">The people behind Uwezo</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A leadership team rooted in Dzaleka, delivering professional digital services to clients around the world.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-2xl border border-border">
          <img
            src={groupImg}
            alt="Uwezo Tech Solutions team together"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-[420px] w-full object-cover"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg text-foreground">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
