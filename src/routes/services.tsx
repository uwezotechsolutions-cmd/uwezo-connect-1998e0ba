import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ChartBar, Palette, Megaphone, MessageSquare, Globe, BarChart3, Video, Tags, Headphones, Smartphone, PenLine, Share2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Uwezo Connect | Hire Verified Remote Talent" },
      { name: "description", content: "Twelve service categories powered by verified global professionals: data entry, design, development, marketing, video, content, and more." },
      { property: "og:title", content: "Services — Uwezo Connect" },
      { property: "og:description", content: "Hire verified remote professionals across twelve service categories." },
    ],
  }),
  component: Services,
});

const data = [
  { icon: ChartBar, title: "Data Entry", lede: "Fast, accurate, confidential.",
    items: ["Spreadsheet population (Excel, Google Sheets)", "CRM data cleaning & migration", "Document digitization (PDF to Word/Excel)", "Form filling, product listing, survey entry"],
    note: "Strict privacy protocols on every project." },
  { icon: Headphones, title: "Virtual Assistance", lede: "Executive-level support, on demand.",
    items: ["Inbox, calendar & travel management", "Research, reporting & data lookup", "Vendor and client coordination", "Personal task management"],
    note: "Multi-timezone coverage for busy founders and teams." },
  { icon: MessageSquare, title: "Customer Support", lede: "Your customers feel heard.",
    items: ["Live chat (WhatsApp, Intercom, website chat)", "Email ticketing (Zendesk, Help Scout, Gmail)", "Phone support across 9+ languages", "FAQ & knowledge base maintenance"],
    note: "24-hour response guarantee, multi-time-zone coverage." },
  { icon: Palette, title: "Graphic Design", lede: "Visual storytelling that converts.",
    items: ["Logo & brand identity", "Social media graphics", "Flyers, posters, brochures", "Print-ready production files"],
    note: "Adobe Creative Cloud & Figma. Unlimited revisions on retainers." },
  { icon: Megaphone, title: "Digital Marketing", lede: "Strategy and execution that grows pipelines.",
    items: ["Paid ads (Meta, Google, LinkedIn)", "SEO research & on-page optimization", "Email marketing & automation", "Market & competitor analysis"],
    note: "Plug into your stack or let us recommend one." },
  { icon: Video, title: "Video Editing", lede: "Cut, polish, publish.",
    items: ["Short-form (Reels, TikTok, Shorts)", "Promos, testimonials, course content", "Subtitles & multilingual captions", "Motion graphics & lower thirds"],
    note: "We work with your footage or source royalty-free clips." },
  { icon: Globe, title: "Website Development", lede: "From landing pages to full e-commerce.",
    items: ["WordPress, Shopify, Webflow", "Custom React + TypeScript apps", "Performance, SEO & accessibility audits", "Ongoing maintenance & backups"],
    note: "We don't just build — we hand off cleanly with docs." },
  { icon: Smartphone, title: "Mobile App Development", lede: "Cross-platform apps users keep using.",
    items: ["React Native & Flutter builds", "iOS & Android publishing", "API integrations & push notifications", "Maintenance & version updates"],
    note: "Design, build, and ship from one verified team." },
  { icon: BarChart3, title: "Data Analysis", lede: "Turn raw numbers into decisions.",
    items: ["Data cleaning & validation", "Dashboards & pivot tables (Excel, Sheets, Looker)", "Trend, forecast & cohort analysis", "Charts & insights for presentations"],
    note: "Sales, ops, and survey data — translated into action." },
  { icon: PenLine, title: "Content Creation", lede: "Words that rank and resonate.",
    items: ["Blog posts, long-form articles, whitepapers", "Product & website copy", "Newsletters & lead magnets", "Multilingual writing (EN, FR, PT, SW)"],
    note: "SEO-aware writers with a human voice." },
  { icon: Share2, title: "Social Media Management", lede: "Always on, always on-brand.",
    items: ["Content calendars & scheduling", "Community management & DMs", "Reels, carousels & static creative", "Monthly performance reporting"],
    note: "We sound like you — at the pace your audience needs." },
  { icon: Tags, title: "Data Annotations", lede: "High-quality labeled data for AI.",
    items: ["Image classification, bounding boxes & segmentation", "Text classification, sentiment & NER tagging", "Audio transcription & speaker ID", "QA & consensus review pipelines"],
    note: "Trained annotators essential for accurate ML models." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Services</span>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-bold tracking-tight text-foreground">Twelve categories. One platform.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Every service is delivered by verified professionals from our global talent network — vetted, rated, and ready.</p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {data.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.03}>
              <article id={s.title.toLowerCase().replace(/ /g, "-")} className="grid gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-[auto_1fr_auto] md:items-start">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{s.title}</h2>
                  <p className="text-primary">{s.lede}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
                    {s.items.map((it) => <li key={it} className="flex gap-2"><span className="text-accent">▸</span>{it}</li>)}
                  </ul>
                  <p className="mt-4 text-sm italic text-muted-foreground">{s.note}</p>
                </div>
                <Link to="/contact" className="self-start rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-deep">
                  Hire talent
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
