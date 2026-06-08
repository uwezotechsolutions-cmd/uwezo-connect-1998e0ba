import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail, Calendar, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Uwezo Tech Solutions – Get a Quote for Remote Services" },
      { name: "description", content: "Request a quote, book a meeting via Calendly, or reach our team by email." },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Data Entry", "Graphic Design", "Marketing", "Customer Care", "Website Building", "Data Analysis", "Video Marketing", "IT Support Care"];

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(150).optional(),
  email: z.string().trim().email().max(255),
  services: z.array(z.string()).min(1, "Pick at least one service"),
  budget: z.string().trim().max(100).optional(),
  message: z.string().trim().max(2000).optional(),
});

// Replace with your Calendly URL
const CALENDLY_URL = "https://calendly.com/uwezotechsolutions/30min";

function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", services: [] as string[], budget: "", message: "" });
  const [loading, setLoading] = useState(false);

  const toggleService = (s: string) =>
    setForm((f) => ({ ...f, services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s] }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("quote_requests").insert(parsed.data);
    setLoading(false);
    if (error) {
      toast.error("Couldn't submit. Try again.");
      return;
    }
    toast.success("Request received! We'll reply within 24 hours.");
    setForm({ name: "", company: "", email: "", services: [], budget: "", message: "" });
  };

  return (
    <SiteLayout>
      <section className="container-page py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
        <h1 className="mt-2 font-display text-5xl text-foreground">Get in touch</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">Tell us about your project — we usually reply within a few hours.</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name *"><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" /></Field>
              <Field label="Company"><input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input" /></Field>
            </div>
            <Field label="Email *"><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" /></Field>

            <Field label="Service(s) of interest *">
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button key={s} type="button" onClick={() => toggleService(s)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition ${form.services.includes(s) ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Approx hours/week or budget"><input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="input" placeholder="e.g. 20 hrs/week, $500/mo" /></Field>
            <Field label="Message"><textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input" /></Field>

            <button disabled={loading} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-deep disabled:opacity-60">
              {loading ? "Sending…" : "Send request"}
            </button>
          </form>

          <aside className="space-y-4">
            <a href="mailto:uwezotechsolutions@gmail.com" className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary/40">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">uwezotechsolutions@gmail.com</p>
              </div>
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary/40">
              <Calendar className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Book a meeting</p>
                <p className="text-sm text-muted-foreground">We work 24/7 — book any day, including Saturday and Sunday.</p>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
              <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Response time</p>
                <p className="text-sm text-muted-foreground">Within 24 hours, usually much faster.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl text-foreground">Book directly</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
            <iframe src={CALENDLY_URL} className="h-[680px] w-full" title="Calendly booking" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
