import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2, Eye, EyeOff } from "lucide-react";
import { useAdminAuth } from "@/hooks/use-admin-auth";

export const Route = createFileRoute("/admin/testimonials")({ component: TestimonialsAdmin });

type T = { id: string; author_name: string; author_role: string | null; content: string; rating: number | null; published: boolean; created_at: string };

function TestimonialsAdmin() {
  const { userId } = useAdminAuth();
  const [rows, setRows] = useState<T[]>([]);
  const [form, setForm] = useState({ author_name: "", author_role: "", content: "", rating: 5 });

  const load = async () => {
    const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    setRows((data ?? []) as T[]);
  };
  useEffect(() => { load(); }, []);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.author_name || !form.content) return toast.error("Name and content required");
    const { error } = await supabase.from("testimonials").insert({ ...form, created_by: userId, published: true });
    if (error) return toast.error(error.message);
    setForm({ author_name: "", author_role: "", content: "", rating: 5 });
    toast.success("Testimonial added");
    load();
  };

  const togglePublish = async (r: T) => {
    await supabase.from("testimonials").update({ published: !r.published }).eq("id", r.id);
    load();
  };
  const del = async (id: string) => {
    if (!confirm("Delete?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    load();
  };

  return (
    <div>
      <h1 className="font-display text-3xl text-foreground">Testimonials</h1>

      <form onSubmit={add} className="mt-6 grid gap-3 rounded-xl border border-border bg-card p-5 md:grid-cols-2">
        <input placeholder="Author name" className="input" value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })} />
        <input placeholder="Role / Company" className="input" value={form.author_role} onChange={(e) => setForm({ ...form, author_role: e.target.value })} />
        <textarea placeholder="Testimonial content" rows={3} className="input md:col-span-2" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-deep md:col-span-2 md:w-fit">Add testimonial</button>
      </form>

      <div className="mt-6 space-y-3">
        {rows.map((r) => (
          <div key={r.id} className="flex items-start justify-between gap-3 rounded-xl border border-border bg-card p-5">
            <div>
              <p className="font-medium text-foreground">{r.author_name} {r.author_role && <span className="text-muted-foreground">— {r.author_role}</span>}</p>
              <p className="mt-1 text-sm text-foreground/85">{r.content}</p>
              <p className="mt-2 text-xs text-muted-foreground">{r.published ? "Published" : "Hidden"}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => togglePublish(r)} className="rounded-md border border-border p-2 hover:bg-secondary" title={r.published ? "Hide" : "Publish"}>
                {r.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <button onClick={() => del(r.id)} className="rounded-md border border-border p-2 text-destructive hover:bg-secondary"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
        {rows.length === 0 && <p className="text-muted-foreground">No testimonials yet.</p>}
      </div>
    </div>
  );
}
