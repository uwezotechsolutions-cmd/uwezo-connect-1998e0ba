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
      { title: "About Uwezo Connect — A Global Talent Marketplace" },
      { name: "description", content: "Uwezo Connect connects skilled professionals around the world with businesses that need them. Founded by Sichem Shekinah Mulumba — read our story." },
      { property: "og:title", content: "About Uwezo Connect" },
      { property: "og:description", content: "Connecting global talent with global opportunities." },
    ],
  }),
  component: About,
});

const team = [
  { name: "CEO", role: "Chief Executive Officer", img: ceoImg },
  { name: "CRO", role: "Chief Revenue Officer", img: croImg },
  { name: "Country Director", role: "Operations", img: countryImg },
  { name: "Hub Manager", role: "Talent Hub", img: hubImg },
  { name: "Team Leader", role: "Delivery & Quality", img: leaderImg },
  { name: "Data Operations Lead", role: "Data Services", img: dataImg },
];

function About() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">About</span>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold tracking-tight text-foreground">Connecting global talent with global opportunities.</h1>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-3">
          <Reveal className="md:col-span-2 space-y-5 text-foreground/85" delay={0.05}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary">Our Mission</h2>
            <p>
              Uwezo Connect empowers individuals and businesses worldwide through remote work, digital services, and
              professional collaboration. We believe great work should not be limited by geography — and great opportunities
              should not be limited by where you were born.
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary pt-6">Our Story</h2>
            <p>
              Uwezo Connect was founded by <strong>Sichem Shekinah Mulumba</strong> in response to the extreme challenges
              refugees face every day accessing dignified work. <strong>"Uwezo"</strong> means <em>ability</em> or{" "}
              <em>power</em> in Swahili. What began as a way to unlock opportunity for displaced talent has grown into an
              inclusive global marketplace — connecting skilled professionals from every continent with businesses that
              need them. Refugee inclusion remains part of our DNA; see our <a href="/impact" className="text-primary underline">Impact</a> page.
            </p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary pt-6">How We Work</h2>
            <p>
              Every professional on Uwezo Connect is verified — identity, skills, and references. Clients post projects or
              browse talent; professionals showcase portfolios and apply. We handle the trust layer so both sides can focus
              on the work.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-primary">Our Values</h2>
            <ul className="mt-4 space-y-4">
              {[
                ["Talent without borders", "Skill matters more than location."],
                ["Verified trust", "Every professional is vetted before they're hired."],
                ["Professional excellence", "We treat every project as if it were our own."],
                ["Inclusive opportunity", "From refugee camps to capital cities — anyone with skill belongs here."],
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
