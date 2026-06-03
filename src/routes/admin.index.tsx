import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/")({ component: Overview });

function Overview() {
  const [stats, setStats] = useState({ careers: 0, newCareers: 0, testimonials: 0, quotes: 0 });
  useEffect(() => {
    (async () => {
      const [c, nc, t, q] = await Promise.all([
        supabase.from("career_applications").select("*", { count: "exact", head: true }),
        supabase.from("career_applications").select("*", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("testimonials").select("*", { count: "exact", head: true }),
        supabase.from("quote_requests").select("*", { count: "exact", head: true }),
      ]);
      setStats({ careers: c.count ?? 0, newCareers: nc.count ?? 0, testimonials: t.count ?? 0, quotes: q.count ?? 0 });
    })();
  }, []);
  const cards = [
    { label: "Career applications", value: stats.careers },
    { label: "Unread applications", value: stats.newCareers },
    { label: "Testimonials", value: stats.testimonials },
    { label: "Quote requests", value: stats.quotes },
  ];
  return (
    <div>
      <h1 className="font-display text-3xl text-foreground">Overview</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">{c.label}</p>
            <p className="mt-2 font-display text-3xl text-primary">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
