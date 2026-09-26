import type { Profile } from "./types";

export const profile: Profile = {
  name: "Aadesh Gurav",
  role: "Software Engineer",
  location: "Ratnagiri, Maharashtra, India",
  tagline: "I build systems that boot, store, and route data — from a database written from scratch to an AI OS that starts as PID 1.",
  bio: [
    "I'm a software engineer who spends most of my time below the application layer — storage engines, process orchestration, and the infrastructure that other software quietly depends on.",
    "Recent work spans a document database built from scratch in Rust, an autonomous AI operating system that boots as PID 1 on Alpine Linux, and a proof-of-concept that routes data between MongoDB and Neo4j behind a single adapter contract.",
    "I mostly reach for Python and Rust, with Docker, Kubernetes, and cloud platforms for everything that needs to actually run in production.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/AadeshGurav", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aadeshgurav", icon: "linkedin" },
  ],
  email: "guravaadesh99@gmail.com",
};
