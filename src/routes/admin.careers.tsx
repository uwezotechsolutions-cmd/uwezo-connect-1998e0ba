import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail, Check } from "lucide-react";

export const Route = createFileRoute("/admin/careers")({ component: CareersAdmin });

type App = {
  id: string; full_name: string; email: string; phone: string | null; country: string | null;
  skills: string; experience: string | null; resume_url: string | null; cover_letter: string | null;
  status: string; read_at: string | null; meeting_email_sent_at: string | null; created_at: string;
};

function CareersAdmin() {
  const [rows, setRows] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("career_applications").select("*").order("created_at", { ascending: false });
    setRows((data ?? []) as App[]);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const markRead = async (r: App) => {
    const { error } = await supabase.from("career_applications")
      .update({ status: "reviewed", read_at: new Date().toISOString() }).eq("id", r.id);
    if (error) return toast.error("Failed to update");
    // Open a prefilled mailto for meeting invitation (works without an email API)
    const subject = encodeURIComponent("Uwezo Tech — Interview invitation");
    const body = encodeURIComponent(
      `Hi ${r.full_name},\n\nThank you for applying to Uwezo Tech Solutions. We'd love to meet you. Please book a time via:\nhttps://calendly.com/uwezotechsolutions/30min\n\nWarm regards,\nUwezo Tech Solutions`
    );
    window.open(`mailto:${r.email}?subject=${subject}&body=${body}`, "_blank");
    await supabase.from("career_applications")
      .update({ meeting_email_sent_at: new Date().toISOString() }).eq("id", r.id);
    toast.success("Marked reviewed — meeting email opened");
    load();
  };

  return (
    <div>
      <h1 className="font-display text-3xl text-foreground">Career applications</h1>
      <p className="mt-1 text-sm text-muted-foreground">Mark applications as reviewed — this opens a pre-filled meeting invitation email.</p>
      {loading ? <p className="mt-8 text-muted-foreground">Loading…</p> :
        rows.length === 0 ? <p className="mt-8 text-muted-foreground">No applications yet.</p> :
        <div className="mt-6 space-y-3">
          {rows.map((r) => (
            <div key={r.id} className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-foreground">{r.full_name} <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${r.status === "new" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}>{r.status}</span></h3>
                  <p className="text-sm text-muted-foreground">{r.email} {r.phone && `• ${r.phone}`} {r.country && `• ${r.country}`}</p>
                </div>
                <button onClick={() => markRead(r)} className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-deep">
                  {r.status === "new" ? <><Check className="h-4 w-4" /> Mark read + invite</> : <><Mail className="h-4 w-4" /> Send again</>}
                </button>
              </div>
              <div className="mt-3 grid gap-3 text-sm text-foreground/85 md:grid-cols-2">
                <p><strong>Skills:</strong> {r.skills}</p>
                {r.experience && <p><strong>Experience:</strong> {r.experience}</p>}
                {r.cover_letter && <p className="md:col-span-2"><strong>Cover letter:</strong> {r.cover_letter}</p>}
                {r.resume_url && <a href={r.resume_url} target="_blank" rel="noreferrer" className="text-primary hover:underline">Resume link →</a>}
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
