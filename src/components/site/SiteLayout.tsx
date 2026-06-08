import { type ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ChatWidget } from "./ChatWidget";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
