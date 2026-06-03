import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { Leaf, LogOut, Briefcase, Quote, Users } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Uwezo" }] }),
  component: AdminLayout,
});

function AdminLayout() {
  const { loading, userId, isAdmin, isSuperAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!loading && !userId) navigate({ to: "/auth" });
  }, [loading, userId, navigate]);

  if (loading) return <div className="grid min-h-screen place-items-center text-muted-foreground">Loading…</div>;

  if (userId && !isAdmin) {
    return (
      <div className="grid min-h-screen place-items-center bg-secondary p-6 text-center">
        <div className="max-w-md rounded-xl border border-border bg-card p-8">
          <h1 className="font-display text-2xl text-foreground">No admin access</h1>
          <p className="mt-2 text-sm text-muted-foreground">Your account doesn't have an admin role yet. A super admin must assign you one.</p>
          <button onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/auth" }); }} className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Sign out</button>
        </div>
      </div>
    );
  }

  const nav: { to: string; label: string; icon: any; exact?: boolean }[] = [
    { to: "/admin", label: "Overview", icon: Briefcase, exact: true },
    { to: "/admin/careers", label: "Careers", icon: Briefcase },
    { to: "/admin/testimonials", label: "Testimonials", icon: Quote },
    ...(isSuperAdmin ? [{ to: "/admin/users", label: "Users & Roles", icon: Users }] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display text-lg text-primary">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground"><Leaf className="h-4 w-4" /></span>
            Uwezo Admin
          </Link>
          <button onClick={async () => { await supabase.auth.signOut(); navigate({ to: "/auth" }); }} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
      </header>
      <div className="container-page grid gap-8 py-8 md:grid-cols-[220px_1fr]">
        <aside>
          <nav className="space-y-1">
            {nav.map((n) => {
              const active = n.exact ? path === n.to : path.startsWith(n.to);
              return (
                <Link key={n.to} to={n.to} className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${active ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-secondary"}`}>
                  <n.icon className="h-4 w-4" /> {n.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div><Outlet /></div>
      </div>
    </div>
  );
}
