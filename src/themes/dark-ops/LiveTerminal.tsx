import { useEffect, useRef, useState } from "react";
import Terminal from "./Terminal";

type Line = { type: "input" | "output"; text: string };

const COMMANDS: Record<string, string> = {
  help: "Available commands: help, whoami, about, projects, coffee, sudo, hire me, 42, clear",
  whoami: "You. Obviously. A visitor with excellent taste in terminals.",
  about: "Software engineer. Builds things that boot, store, and route data. Occasionally sleeps.",
  projects: "Scroll up to ./projects — or just trust me, they're good.",
  coffee: "Brewing... ☕ (I can't actually do that from here, but the thought counts.)",
  sudo: "Nice try. This isn't that kind of website.",
  "sudo rm -rf /": "Absolutely not. Nice try though.",
  "hire me": "Bold move, and I respect it. Scroll to Contact — let's talk.",
  "42": "The answer to life, the universe, and this portfolio.",
  exit: "There is no escape. (Just close the tab, it's fine.)",
};

export default function LiveTerminal() {
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "Type 'help' to see what this does." },
  ]);
  const [value, setValue] = useState("");
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [history]);

  function runCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    if (cmd.toLowerCase() === "clear") {
      setHistory([]);
      return;
    }
    const response = COMMANDS[cmd.toLowerCase()] ?? `command not found: ${cmd} — try 'help'`;
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
          <p key={i} style={{ color: line.type === "input" ? "var(--do-accent)" : "var(--do-muted)" }}>
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
    </Terminal>
  );
}
