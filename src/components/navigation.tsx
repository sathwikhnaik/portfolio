import Link from "next/link";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

const links = [
  ["Profile", "#profile"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export function Navigation() {
  return (
    <header className="site-header">
      <nav className="glass nav-shell" aria-label="Primary navigation">
        <Link className="nav-brand" href="/" aria-label={`${profile.name} home`}>
          <span className="nav-mark" aria-hidden="true">SN</span>
          <span>{profile.name}</span>
        </Link>
        <div className="nav-links">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
