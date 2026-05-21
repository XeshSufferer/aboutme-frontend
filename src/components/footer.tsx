import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-cyan-900/20 py-6 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          {profile.name}
        </a>
        . Built with Next.js & shadcn/ui.
      </p>
    </footer>
  );
}
