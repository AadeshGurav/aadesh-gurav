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
  vim: "You are now trapped in vim. Try ':q' — spoiler: it won't work either.",
  ":q": "This isn't vim. Points for reflexes though.",
  ":wq": "Saved and quit. (Nothing was saved. This isn't vim.)",
  "git blame": "It was you. It's always you.",
  "git push --force": "Force-pushed to main. Bold. Reckless. Respected. (Nothing was actually pushed.)",
  "rm -rf node_modules": "Deleting node_modules... freed 40GB and several years of your life.",
  "rm -rf /": "Absolutely not. Nice try though.",
  hack: "ACCESS GRANTED. (To absolutely nothing, but doesn't that feel good.)",
  uptime: "Up since before you got here. Down whenever Render feels like it.",
  banana: "🍌",
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

const JOKES = [
  "Why do programmers prefer dark mode? Light attracts bugs.",
  "I'd tell you a UDP joke, but you might not get it.",
  "There are 10 kinds of people: those who understand binary, and those who don't.",
  "Told my wife to buy bread, and if they had eggs, get a dozen. She came back with 12 loaves.",
  "Why did the developer go broke? He used up all his cache.",
  "A byte walks into a bar looking miserable. The bartender asks what's wrong. It says, 'parity error.'",
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

export function joke(): string {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
}

export function flip(): string {
  return Math.random() < 0.5 ? "heads." : "tails.";
}

export function roll(): string {
  return `🎲 ${1 + Math.floor(Math.random() * 6)}`;
}

export function sl(): string {
  return ["    🚂💨    ", "you meant 'ls', friend. here's a train instead."].join("\n");
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

/** A joke, not a résumé dump — nobody wants to read six paragraphs in a
 * terminal window. */
export function resumeText(): string {
  return [
    "NAME:    Aadesh Gurav",
    "ROLE:    turns coffee into backend systems",
    "SKILLS:  Python, Rust, staying calm during 2am incidents",
    "WEAKNESS: cannot resist over-engineering a good README",
    "STATUS:  probably shipping something right now",
  ].join("\n");
}

export const THEME_USAGE = `usage: theme <${themes.map((t) => t.id).join("|")}>`;

/** Sets the theme and reloads — a terminal command can't reach the ThemeLoader's
 * own React state, so a full reload (cheap, code-split, cached) is the reliable path. */
export function themeCommand(cmd: string): string {
  const match = cmd.match(/^theme\s+([a-z-]+)$/i);
  if (!match) return THEME_USAGE;
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
