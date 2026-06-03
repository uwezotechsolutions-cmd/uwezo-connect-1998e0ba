import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAdminAuth } from "@/hooks/use-admin-auth";

export const Route = createFileRoute("/admin/users")({ component: UsersAdmin });

type Row = { id: string; email: string | null; full_name: string | null; roles: string[] };

function UsersAdmin() {
  const { isSuperAdmin, loading } = useAdminAuth();
  const navigate = useNavigate();
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if (!loading && !isSuperAdmin) navigate({ to: "/admin" });
  }, [loading, isSuperAdmin, navigate]);

  const load = async () => {
    const { data: profiles } = await supabase.from("profiles").select("id, email, full_name");
    const { data: roles } = await supabase.from("user_roles").select("user_id, role");
    const byId = new Map<string, string[]>();
    (roles ?? []).forEach((r: any) => {
      const arr = byId.get(r.user_id) ?? [];
      arr.push(r.role);
      byId.set(r.user_id, arr);
    });
    setRows((profiles ?? []).map((p: any) => ({ ...p, roles: byId.get(p.id) ?? [] })));
  };
  useEffect(() => { if (isSuperAdmin) load(); }, [isSuperAdmin]);

  const toggleRole = async (userId: string, role: "super_admin" | "staff_admin", has: boolean) => {
    if (has) {
      const { error } = await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", role);
      if (error) return toast.error(error.message);
    } else {
      const { error } = await supabase.from("user_roles").insert({ user_id: userId, role });
      if (error) return toast.error(error.message);
    }
    load();
  };

  if (!isSuperAdmin) return null;

  return (
    <div>
      <h1 className="font-display text-3xl text-foreground">Users & Roles</h1>
      <p className="mt-1 text-sm text-muted-foreground">Staff admins can manage testimonials and careers. Super admins can also manage users.</p>
      <div className="mt-6 space-y-3">
        {rows.map((r) => {
          const isSuper = r.roles.includes("super_admin");
          const isStaff = r.roles.includes("staff_admin");
          return (
            <div key={r.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-5">
              <div>
                <p className="font-medium text-foreground">{r.full_name ?? "—"}</p>
                <p className="text-sm text-muted-foreground">{r.email}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleRole(r.id, "staff_admin", isStaff)} className={`rounded-full border px-3 py-1.5 text-xs ${isStaff ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>Staff admin</button>
                <button onClick={() => toggleRole(r.id, "super_admin", isSuper)} className={`rounded-full border px-3 py-1.5 text-xs ${isSuper ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>Super admin</button>
              </div>
            </div>
          );
        })}
        {rows.length === 0 && <p className="text-muted-foreground">No users yet.</p>}
      </div>
    </div>
  );
}
