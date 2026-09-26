import { useEffect, useRef, useState } from "react";
import Terminal from "./Terminal";
import type { Project } from "@/content/types";
import {
  STATIC_COMMANDS,
  catProjectMedia,
  cowsay,
  fortune,
  listProjects,
  notFoundMessage,
  pingLines,
  resumeText,
  themeCommand,
} from "./commands";

type Line = { type: "input" | "output"; text: string };

const HELP_TEXT =
  "Available: help, whoami, about, ls, cat resume.txt, cat <project>.mp4, projects, date, history, theme <id>, matrix, fortune, cowsay <text>, ping <host>, coffee, sudo, hire me, 42, clear";

export default function LiveTerminal({
  projects,
  bio,
}: {
  projects: Project[];
  bio: string[];
}) {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "Type 'help' to see what this does." },
  ]);
  const [value, setValue] = useState("");
  const [matrixOn, setMatrixOn] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [history]);

  useEffect(() => {
    if (!matrixOn) return;
    const t = setTimeout(() => setMatrixOn(false), 4000);
    return () => clearTimeout(t);
  }, [matrixOn]);

  function respond(cmd: string): string {
    const lower = cmd.toLowerCase();

    if (lower === "help") return HELP_TEXT;
    if (lower === "ls" || lower === "ls projects" || lower === "ls ./projects") return listProjects(projects);
    if (lower === "cat resume.txt") return resumeText(bio);
    if (lower === "projects") return `${listProjects(projects)}\n(or scroll up to ./projects)`;
    if (lower === "date") return new Date().toString();
    if (lower === "history") return history.filter((l) => l.type === "input").map((l) => l.text).join("\n") || "(empty)";
    if (lower === "fortune") return fortune();
    if (lower === "matrix") {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return "matrix mode skipped — you have reduced motion enabled, and that's respected here.";
      setMatrixOn(true);
      return "wake up, Neo...";
    }
    if (lower.startsWith("cowsay")) return cowsay(cmd.slice(6).trim());
    if (lower.startsWith("ping ")) return pingLines(cmd.slice(5).trim()).join("\n");
    if (lower.startsWith("ping")) return pingLines("localhost").join("\n");
    if (lower.startsWith("theme ")) return themeCommand(lower);
    const media = catProjectMedia(lower, projects);
    if (media) return media;

    return STATIC_COMMANDS[lower] ?? notFoundMessage(cmd);
  }

  function runCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }
    const response = respond(cmd);
    setHistory((h) => [...h, { type: "input", text: cmd }, { type: "output", text: response }]);
  }

  return (
    <Terminal id="try-it" title="Try it">
      <div
        ref={logRef}
        className="mb-3 flex max-h-48 flex-col gap-1.5 overflow-y-auto text-sm"
        aria-live="polite"
      >
        {history.map((line, i) => (
          <p
            key={i}
            className="whitespace-pre-wrap"
            style={{ color: line.type === "input" ? "var(--do-accent)" : "var(--do-muted)" }}
          >
            {line.type === "input" ? `$ ${line.text}` : line.text}
          </p>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          runCommand(value);
          setValue("");
        }}
        className="flex items-center gap-2"
      >
        <span style={{ color: "var(--do-accent)" }}>$</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Terminal command input"
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
          className="flex-1 bg-transparent text-base outline-none"
          style={{ color: "var(--do-text)", fontSize: 16 }}
        />
      </form>
      {matrixOn && (
        <div className="do-matrix-overlay" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="do-matrix-column"
              style={{ left: `${(i / 24) * 100}%`, animationDelay: `${Math.random() * 1.5}s` }}
            >
              {Array.from({ length: 18 })
                .map(() => (Math.random() > 0.5 ? "1" : "0"))
                .join("\n")}
            </span>
          ))}
        </div>
      )}
    </Terminal>
  );
}
