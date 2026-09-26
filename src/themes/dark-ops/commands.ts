import type { Project } from "@/content/types";
import { themes, type ThemeId } from "../registry";
import { STORAGE_KEY } from "../useTheme";

export const STATIC_COMMANDS: Record<string, string> = {
  whoami: "You. Obviously. A visitor with excellent taste in terminals.",
  about: "Software engineer. Builds things that boot, store, and route data. Occasionally sleeps.",
  coffee: "Brewing... ☕ (I can't actually do that from here, but the thought counts.)",
  sudo: "Nice try. This isn't that kind of website.",
  "sudo rm -rf /": "Absolutely not. Nice try though.",
  "sudo make me a sandwich": "Okay. *makes you a sandwich* — turns out sudo works for this.",
  "hire me": "Bold move, and I respect it. Scroll to Contact — let's talk.",
  "42": "The answer to life, the universe, and this portfolio.",
  exit: "There is no escape. (Just close the tab, it's fine.)",
};

const FORTUNES = [
  "There are only two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
  "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
  "It works on my machine.",
  "99 little bugs in the code, 99 little bugs. Take one down, patch it around — 127 little bugs in the code.",
  "The best code is no code at all.",
  "Weeks of coding can save you hours of planning.",
  "There is no cloud, just someone else's terminal.",
];

const NOT_FOUND_MESSAGES = [
  (cmd: string) => `command not found: ${cmd} — this isn't bash, but nice try`,
  (cmd: string) => `'${cmd}'? Bold command. Unfortunately, no.`,
  (cmd: string) => `zsh: command not found: ${cmd} (yes, I know, very original error)`,
  (cmd: string) => `${cmd}: No such file, directory, or shred of mercy.`,
  (cmd: string) => `Command '${cmd}' not found. Did you mean 'help'? You probably meant 'help'.`,
];

export function notFoundMessage(cmd: string): string {
  const pick = NOT_FOUND_MESSAGES[Math.floor(Math.random() * NOT_FOUND_MESSAGES.length)];
  return pick(cmd);
}

export function fortune(): string {
  return FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
}

export function cowsay(text: string): string {
  const msg = text || "moo";
  const top = " " + "_".repeat(msg.length + 2);
  const bottom = " " + "-".repeat(msg.length + 2);
  return [
    top,
    `< ${msg} >`,
    bottom,
    "        \\   ^__^",
    "         \\  (oo)\\_______",
    "            (__)\\       )\\/\\",
    "                ||----w |",
    "                ||     ||",
  ].join("\n");
}

export function listProjects(projects: Project[]): string {
  return projects
    .filter((p) => p.show)
    .sort((a, b) => a.order - b.order)
    .map((p) => `${p.id}${p.status === "wip" ? "  [wip]" : ""}`)
    .join("\n");
}

export function resumeText(bio: string[]): string {
  return bio.map((line) => `  ${line}`).join("\n");
}

export function catProjectMedia(cmd: string, projects: Project[]): string | null {
  const match = cmd.match(/^cat\s+([a-z0-9-]+)\.mp4$/i);
  if (!match) return null;
  const project = projects.find((p) => p.id === match[1]);
  if (!project) return `cat: ${match[1]}.mp4: No such file or directory`;
  return `[decoding ${project.id}.mp4 ...]\n${project.name} — ${project.description}`;
}

/** Sets the theme and reloads — a terminal command can't reach the ThemeLoader's
 * own React state, so a full reload (cheap, code-split, cached) is the reliable path. */
export function themeCommand(cmd: string): string {
  const match = cmd.match(/^theme\s+([a-z-]+)$/i);
  if (!match) return `usage: theme <${themes.map((t) => t.id).join("|")}>`;
  const id = match[1] as ThemeId;
  if (!themes.some((t) => t.id === id)) {
    return `unknown theme '${id}' — try: ${themes.map((t) => t.id).join(", ")}`;
  }
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // private browsing — reload will just re-pick a random theme
  }
  setTimeout(() => window.location.reload(), 400);
  return `switching to ${id}...`;
}

export function pingLines(host: string): string[] {
  const target = host || "localhost";
  return [
    `PING ${target}: 56 data bytes`,
    `64 bytes from ${target}: icmp_seq=0 ttl=64 time=${(Math.random() * 20 + 1).toFixed(1)} ms`,
    `64 bytes from ${target}: icmp_seq=1 ttl=64 time=${(Math.random() * 20 + 1).toFixed(1)} ms`,
    `(this is a simulated ping — browsers can't actually do this)`,
  ];
}
