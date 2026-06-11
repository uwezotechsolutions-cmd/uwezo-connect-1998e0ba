import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Palette, Megaphone, Code2, Headphones, Database, UserCheck, ShieldCheck, Briefcase, Handshake, Star, Search } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { TaglineSlider } from "@/components/site/TaglineSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uwezo Connect — Connecting Global Talent with Global Opportunities" },
      { name: "description", content: "A global talent marketplace. Find skilled professionals in design, development, marketing, customer support, and data services — or build your global career." },
      { property: "og:title", content: "Uwezo Connect — Where talent meets opportunity without borders." },
      { property: "og:description", content: "Hire verified professionals, post projects, scale your team. Or join thousands building remote careers." },
    ],
  }),
  component: Home,
});

const categories = [
  { icon: Palette, title: "Design", count: "120+ pros" },
  { icon: Megaphone, title: "Marketing", count: "85+ pros" },
  { icon: Code2, title: "Development", count: "210+ pros" },
  { icon: Headphones, title: "Customer Support", count: "95+ pros" },
  { icon: Database, title: "Data Services", count: "140+ pros" },
];

const professionals = [
  { name: "Amani K.", role: "Senior UI/UX Designer", rating: 4.9, location: "Nairobi, Kenya", tags: ["Figma", "Webflow", "Branding"] },
  { name: "Lucia M.", role: "Full-Stack Developer", rating: 5.0, location: "Lisbon, Portugal", tags: ["React", "Node", "Postgres"] },
  { name: "Daniel O.", role: "Digital Marketing Lead", rating: 4.8, location: "Lagos, Nigeria", tags: ["SEO", "Paid ads", "Email"] },
];

const projects = [
  { title: "E-commerce rebuild", budget: "$3,500", type: "Fixed", skills: ["Shopify", "UX", "Copy"] },
  { title: "B2B SaaS landing page", budget: "$1,200", type: "Fixed", skills: ["Figma", "Webflow"] },
  { title: "Customer support team (20h/wk)", budget: "$8/hr", type: "Hourly", skills: ["Zendesk", "EN/FR"] },
];

const steps = [
  { icon: UserCheck, title: "Create Profile", text: "Showcase your skills, portfolio, and experience." },
  { icon: ShieldCheck, title: "Get Verified", text: "ID and skill checks build trust with clients." },
  { icon: Briefcase, title: "Apply or Hire", text: "Browse projects or find the right professional." },
  { icon: Handshake, title: "Work Together", text: "Collaborate, deliver, and get paid securely." },
];

const stories = [
  { quote: "We hired our designer here in 48 hours. Six months later she's leading our brand work.", who: "Maya R., Founder of Northbeam" },
  { quote: "I went from looking for any gig to a steady remote role with a US fintech. Life-changing.", who: "Eric T., Backend Developer" },
  { quote: "The verification process saved us from three bad hires we would've made elsewhere.", who: "James L., Head of Ops at Lumen" },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-7">
            <span className="inline-block rounded-full border border-primary/20 bg-secondary px-3 py-1 text-xs font-medium text-primary">
              Connecting global talent with global opportunities
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Hire talent. <span className="text-primary">Find work.</span> Without borders.
            </h1>
            <TaglineSlider />
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/careers" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-deep">
                Find Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-primary/30 px-5 py-3 text-sm font-medium text-primary transition hover:bg-secondary">
                Hire Talent
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-foreground/90 px-5 py-3 text-sm font-medium text-background transition hover:bg-foreground">
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/30 blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="Remote professionals collaborating globally"
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
            { n: 650, suffix: "+", label: "Verified professionals" },
            { n: 42, suffix: "", label: "Countries represented" },
            { n: 96, suffix: "%", label: "Client satisfaction" },
            { n: 1200, suffix: "+", label: "Projects delivered" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Browse by category</span>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground">Find the right team, fast.</h2>
            <p className="mt-3 text-muted-foreground">Five specialized communities of verified professionals.</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <Link to="/services" className="group block rounded-xl border border-border bg-card p-6 text-center transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-secondary text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.count}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="bg-secondary/40 py-20">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Featured</span>
                <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground">Top professionals this week</h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Browse all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {professionals.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{p.name}</p>
                      <p className="text-sm text-muted-foreground">{p.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium text-foreground">{p.rating}</span>
                    <span>·</span>
                    <span>{p.location}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-page py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Open projects</span>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground">Work that's hiring now</h2>
            </div>
            <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
              View all opportunities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent/30 px-2.5 py-0.5 text-xs font-medium text-accent-foreground">{p.type}</span>
                  <span className="font-display text-lg font-bold text-primary">{p.budget}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <span key={s} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{s}</span>
                  ))}
                </div>
                <Link to="/careers" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  Apply <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-ink py-20 text-background">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">How it works</span>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">Four steps. One connection.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-background/15 bg-background/5 p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/20 text-accent">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-medium text-accent">Step {i + 1}</p>
                  <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-background/75">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container-page py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Success stories</span>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-foreground">Real people. Real outcomes.</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.who} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <blockquote className="mt-4 font-display text-lg leading-snug text-foreground">"{s.quote}"</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— {s.who}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary/60 py-20">
        <div className="container-page grid items-center gap-10 rounded-3xl border border-border bg-card p-10 md:grid-cols-2 md:p-14">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Ready to connect?
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Whether you're hiring a single role or building a remote team, Uwezo Connect makes the next great hire — or the next great gig — one click away.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-deep">
                <Search className="h-4 w-4" /> Hire Talent
              </Link>
              <Link to="/careers" className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 px-5 py-3 text-sm font-medium text-primary hover:bg-secondary">
                <UserCheck className="h-4 w-4" /> Join as a Professional
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
