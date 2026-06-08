import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChartBar, Palette, Megaphone, MessageSquare, Globe, BarChart3, Video, Brain, Tags } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uwezo Tech Solutions – Hire Remote Refugees | Data Entry, Design, Marketing, Customer Care, Web, Data Analysis, Video" },
      { name: "description", content: "Hire skilled refugees from Dzaleka Camp for data entry, graphic design, customer care, web development, data analysis & video marketing. Reduce unemployment while getting quality work." },
      { property: "og:title", content: "Uwezo Tech Solutions — Hire Remote. Transform Lives." },
      { property: "og:description", content: "Professional remote services from Dzaleka Refugee Camp." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: ChartBar, title: "Data Entry", text: "Accurate, fast, confidential." },
  { icon: Palette, title: "Graphic Design", text: "Logos, social visuals, print." },
  { icon: Megaphone, title: "Marketing", text: "Social, email, SEO support." },
  { icon: MessageSquare, title: "Customer Care", text: "Email, chat, phone — friendly & pro." },
  { icon: Globe, title: "Website Building", text: "Responsive sites, landing pages, e‑commerce." },
  { icon: BarChart3, title: "Data Analysis", text: "Spreadsheets, dashboards, insights." },
  { icon: Video, title: "Video Marketing", text: "Editing, subtitles, short promos." },
  { icon: Brain, title: "AI Machine Learning", text: "Model training, automation & insights." },
  { icon: Tags, title: "Data Annotations", text: "Image, text & audio labeling for AI." },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-medium text-primary">
              From Dzaleka, for the world
            </span>
            <h1 className="font-display text-5xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Hire Remotely. <span className="text-primary">Transform Lives.</span> Hire Refugees in Dzaleka.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Uwezo Tech Solutions gives your business professional digital services — from data entry to AI machine learning —
              while creating dignified jobs for refugees in Malawi. Every task you outsource directly lowers unemployment
              in Dzaleka Refugee Camp.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-deep">
                See Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-5 py-3 text-sm font-medium text-primary transition hover:bg-secondary">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/30 blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="A refugee professional working remotely from Dzaleka"
              width={1536}
              height={1280}
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/60">
        <div className="container-page grid gap-8 py-12 md:grid-cols-4">
          {[
            { n: 12, suffix: "", label: "Refugees employed" },
            { n: 2400, suffix: "+", label: "Hours worked" },
            { n: 94, suffix: "%", label: "Client satisfaction" },
            { n: 14200, prefix: "$", suffix: "+", label: "Paid to workers" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-medium text-primary md:text-5xl">
                <Counter to={s.n} prefix={s.prefix ?? ""} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services snapshot */}
      <section className="container-page py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl text-foreground">Nine remote teams, one powerful mission.</h2>
            <p className="mt-3 text-muted-foreground">We offer a range of professional digital services tailored to your business.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
              Explore each service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Difference */}
      <section className="bg-ink py-20 text-background">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-display text-3xl italic text-accent">
              “We don't just outsource tasks. We build careers.”
            </p>
            <p className="mt-6 text-background/80">
              When you work with Uwezo Tech Solutions, you are not a typical client. You become a partner in solving one of
              the world's most overlooked crises: the lack of work for displaced people.
            </p>
          </Reveal>
          <ul className="space-y-4">
            {[
              "Direct impact – 100% of your payment goes to refugee team members.",
              "Quality work – Trained professionals meeting global standards.",
              "Real change – Every project reduces the jobless rate inside Dzaleka.",
            ].map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <li className="flex gap-3 rounded-lg border border-background/15 bg-background/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-background/90">{p}</span>
                </li>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground">
                Start a Pilot Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
