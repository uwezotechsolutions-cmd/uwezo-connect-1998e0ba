import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ChartBar, Palette, Megaphone, MessageSquare, Globe, BarChart3, Video, LifeBuoy } from "lucide-react";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Uwezo Tech Solutions" },
      { name: "description", content: "Seven professional remote services from Dzaleka: data entry, graphic design, marketing, customer care, web development, data analysis, video marketing." },
    ],
  }),
  component: Services,
});

const data = [
  { icon: ChartBar, title: "Data Entry", lede: "Fast, accurate, and confidential.",
    items: ["Spreadsheet population (Excel, Google Sheets)", "CRM data cleaning & migration", "Document digitization (PDF to Word/Excel)", "Form filling, product listing, survey data entry"],
    note: "We work with strict privacy protocols — your data is safe." },
  { icon: Palette, title: "Graphic Design", lede: "Visual storytelling from Dzaleka to the world.",
    items: ["Logo & brand identity design", "Social media graphics", "Flyers, posters, brochures", "Print‑ready files"],
    note: "We use Adobe Creative Cloud and Canva Pro. Unlimited revisions on selected packages." },
  { icon: Megaphone, title: "Marketing", lede: "Reach your audience while we build careers.",
    items: ["Social media content calendars & posting", "Email newsletter design & basic automation", "SEO keyword research & on‑page suggestions", "Basic market research & competitor analysis"],
    note: "You provide the strategy, we execute. Or we suggest a plan together." },
  { icon: MessageSquare, title: "Customer Care", lede: "Your customers feel heard — by a team that understands patience.",
    items: ["Live chat (WhatsApp, website chat)", "Email ticketing (Zendesk, Gmail, Outlook)", "Phone support in English, French, Portuguese, Swahili, Lingala, Kirundi, Kinyarwanda, Tshiluba, and Chichewa", "FAQ & knowledge base updates"],
    note: "We can cover multiple time zones. 24‑hour response guarantee." },
  { icon: Globe, title: "Website Building", lede: "From simple landers to full e‑commerce.",
    items: ["WordPress & Shopify setup", "Modern web apps with React.js and TypeScript", "Custom HTML/CSS landing pages", "WooCommerce product uploads", "Website maintenance (updates, backups, fixes)"],
    note: "We don't just build — we teach you how to use your site." },
  { icon: BarChart3, title: "Data Analysis", lede: "Turn raw numbers into decisions.",
    items: ["Data cleaning & validation", "Excel/Google Sheets dashboards & pivot tables", "Basic statistical analysis (averages, trends, forecasts)", "Chart & graph creation for presentations"],
    note: "Great for sales reports, survey results, or operational data." },
  { icon: Video, title: "Video Marketing", lede: "Tell your story with moving images.",
    items: ["Short video editing (promos, testimonials, ads)", "Subtitle & caption insertion (English, French, Portuguese, Swahili)", "Raw footage trimming & assembly", "Basic motion graphics (titles, lower thirds)"],
    note: "We work with your footage or source royalty‑free clips." },
  { icon: LifeBuoy, title: "IT Support Care", lede: "Friendly, reliable tech support for your team and customers.",
    items: ["Helpdesk & ticket triage (email, chat, phone)", "Software installation, updates & basic troubleshooting", "Account, password & access management", "Remote desktop assistance and onboarding for new users"],
    note: "Multilingual support across English, French, Portuguese, Swahili, Lingala, Kirundi, Kinyarwanda, Tshiluba, and Chichewa." },
];

function Services() {
  return (
    <SiteLayout>
      <section className="container-page py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Services</span>
          <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">Eight teams, one mission.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Each service is delivered by trained refugee professionals from Dzaleka, working remotely to global standards.</p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {data.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <article id={s.title.toLowerCase().replace(/ /g, "-")} className="grid gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-[auto_1fr_auto] md:items-start">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-foreground">{s.title}</h2>
                  <p className="text-primary">{s.lede}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
                    {s.items.map((it) => <li key={it} className="flex gap-2"><span className="text-accent">▸</span>{it}</li>)}
                  </ul>
                  <p className="mt-4 text-sm italic text-muted-foreground">{s.note}</p>
                </div>
                <Link to="/contact" className="self-start rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-deep">
                  Hire this team
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
