import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Role = "super_admin" | "staff_admin";

export function useAdminAuth() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    let active = true;
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      const uid = data.session?.user.id ?? null;
      setUserId(uid);
      if (uid) {
        const { data: r } = await supabase.from("user_roles").select("role").eq("user_id", uid);
        if (active) setRoles((r ?? []).map((x: any) => x.role));
      }
      setLoading(false);
    };
    init();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUserId(session?.user.id ?? null);
      if (!session) setRoles([]);
    });
    return () => { active = false; sub.subscription.unsubscribe(); };
  }, []);

  return {
    loading,
    userId,
    roles,
    isAdmin: roles.length > 0,
    isSuperAdmin: roles.includes("super_admin"),
  };
}
