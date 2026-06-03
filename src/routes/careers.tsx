import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Uwezo Tech Solutions" },
      { name: "description", content: "Are you a refugee professional in Dzaleka? Apply to join Uwezo Tech Solutions." },
    ],
  }),
  component: Careers,
});

const schema = z.object({
  full_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().max(80).optional(),
  skills: z.string().trim().min(1).max(300),
  experience: z.string().trim().max(2000).optional(),
  resume_url: z.string().trim().url().max(500).optional().or(z.literal("")),
  cover_letter: z.string().trim().max(3000).optional(),
});

function Careers() {
  const [f, setF] = useState({ full_name: "", email: "", phone: "", country: "", skills: "", experience: "", resume_url: "", cover_letter: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(f);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const payload = { ...parsed.data, resume_url: parsed.data.resume_url || null };
    const { error } = await supabase.from("career_applications").insert(payload);
    setLoading(false);
    if (error) { toast.error("Couldn't submit your application."); return; }
    toast.success("Application received! We'll be in touch.");
    setF({ full_name: "", email: "", phone: "", country: "", skills: "", experience: "", resume_url: "", cover_letter: "" });
  };

  return (
    <SiteLayout>
      <section className="container-page py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Careers</span>
        <h1 className="mt-2 max-w-3xl font-display text-5xl text-foreground">Join the Uwezo team</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          If you have skills in data, design, marketing, customer care, web development, analysis, or video — apply below.
          Once reviewed, we'll send you a meeting invitation by email.
        </p>

        <form onSubmit={submit} className="mt-10 grid gap-5 rounded-2xl border border-border bg-card p-8 md:grid-cols-2">
          <Field label="Full name *"><input required className="input" value={f.full_name} onChange={(e) => setF({ ...f, full_name: e.target.value })} /></Field>
          <Field label="Email *"><input required type="email" className="input" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></Field>
          <Field label="Phone"><input className="input" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></Field>
          <Field label="Country"><input className="input" value={f.country} onChange={(e) => setF({ ...f, country: e.target.value })} /></Field>
          <Field label="Skills / Service area *" className="md:col-span-2">
            <input required className="input" placeholder="e.g. Data entry, Adobe Illustrator, React" value={f.skills} onChange={(e) => setF({ ...f, skills: e.target.value })} />
          </Field>
          <Field label="Experience" className="md:col-span-2"><textarea rows={4} className="input" value={f.experience} onChange={(e) => setF({ ...f, experience: e.target.value })} /></Field>
          <Field label="Resume link (Google Drive / Dropbox)" className="md:col-span-2"><input className="input" placeholder="https://…" value={f.resume_url} onChange={(e) => setF({ ...f, resume_url: e.target.value })} /></Field>
          <Field label="Cover letter" className="md:col-span-2"><textarea rows={5} className="input" value={f.cover_letter} onChange={(e) => setF({ ...f, cover_letter: e.target.value })} /></Field>
          <div className="md:col-span-2">
            <button disabled={loading} className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-deep disabled:opacity-60">
              {loading ? "Submitting…" : "Submit application"}
            </button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
