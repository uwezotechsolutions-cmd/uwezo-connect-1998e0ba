import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/uwezo-logo.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-background">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <img src={logoAsset.url} alt="Uwezo Connect logo" width={32} height={32} className="h-8 w-8 rounded-md object-contain" />
            Uwezo Connect
          </div>
          <p className="mt-3 text-sm text-background/70">
            Where talent meets opportunity — without borders.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-accent">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-background/75">
            {["/", "/services", "/about", "/impact", "/careers", "/contact"].map((p) => (
              <li key={p}><Link to={p} className="hover:text-accent">{p === "/" ? "Home" : p.slice(1).replace("-", " ")}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-accent">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-background/75">
            <li>uwezotechsolutions@gmail.com</li>
            <li>Global · Remote-first</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-accent">Social</h4>
          <ul className="mt-3 space-y-2 text-sm text-background/75">
            <li>LinkedIn</li>
            <li>Twitter / X</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-background/60 md:flex-row">
          <p>© 2026 Uwezo Connect — Connecting global talent</p>
          <Link to="/auth" className="hover:text-accent">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
