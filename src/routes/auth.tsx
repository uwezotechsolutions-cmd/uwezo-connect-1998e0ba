import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Leaf } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Admin sign in — Uwezo" }] }),
  component: Auth,
});

function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { emailRedirectTo: `${window.location.origin}/admin`, data: { full_name: name } },
      });
      setLoading(false);
      if (error) return toast.error(error.message);
      toast.success("Account created. Ask a super admin to assign you a role.");
      navigate({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) return toast.error(error.message);
      navigate({ to: "/admin" });
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-secondary px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">
        <div className="mb-6 flex items-center gap-2 font-display text-2xl text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground"><Leaf className="h-4 w-4" /></span>
          Uwezo Admin
        </div>
        <h1 className="font-display text-2xl text-foreground">{mode === "signin" ? "Sign in" : "Create admin account"}</h1>
        <form onSubmit={submit} className="mt-6 space-y-4">
          {mode === "signup" && (
            <label className="block"><span className="text-sm font-medium">Full name</span>
              <input className="input mt-1" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
          )}
          <label className="block"><span className="text-sm font-medium">Email</span>
            <input type="email" className="input mt-1" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label className="block"><span className="text-sm font-medium">Password</span>
            <input type="password" className="input mt-1" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
          </label>
          <button disabled={loading} className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-deep disabled:opacity-60">
            {loading ? "…" : mode === "signin" ? "Sign in" : "Sign up"}
          </button>
        </form>
        <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-primary">
          {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
