import type { Profile } from "./types";

export const profile: Profile = {
  name: "Aadesh Gurav",
  role: "Software Engineer",
  location: "Ratnagiri, Maharashtra, India",
  tagline:
    "I build backends for the real world — canteen counters, clinic queues, and WhatsApp messages that land exactly once.\nBackend engineer from the Konkan coast. Some of my production servers fit in a pocket.",
  bio: [
    "I'm Aadesh, a backend engineer from Ratnagiri, on India's Konkan coast. I build the part of software nobody sees and everybody depends on.",
    "My favourite problems don't come from textbooks. They come from a school canteen still running on a paper register, or a client who needs one message delivered to 150 WhatsApp groups without WhatsApp noticing, or a system that has to keep working when the only server is a phone on a hotspot. I once had to intercept WhatsApp's own link-preview request at the Chrome DevTools level just to make a thumbnail show up. I enjoyed it more than I should admit.",
    "I've been making Android phones do things they weren't designed for since 2019, when I was writing Termux tutorials. Today one of those phones is being lined up to host a client's production gateway. The instinct stayed; the stakes got bigger.",
    "I work mostly in Python (FastAPI, Django) and NestJS, and I care about the unglamorous parts: idempotency, timezone-correct timestamps, and READMEs written for the person who'll be debugging at 11 PM without me. I have a deep appreciation for holistic, poetic code that reads like prose, ensuring the next developer doesn't have to scratch their head trying to figure out my intent. To back that up, I aggressively over-deliver on test cases, user docs, dev docs, and system design docs—partly out of empathy, and partly as a comprehensive insurance policy against my own future amnesia. If a system can charge someone twice or send a message twice, I assume it will, and I design for that from the start.",
    "I've spent 4+ years building for clients, a district government, and friends with real problems, and these days I do it from a remote role. Off the keyboard you'll find me riding a Royal Enfield along the coast, arguing about F1 pit strategy, or, since getting married, at the vegetable market inspecting tomatoes with the same seriousness I give a production incident.",
    "I'm not looking for a job right now, but a genuinely big opportunity will always get a reply. What I'm always open to is a good conversation about science, astrology, God, cars, bikes, politics, or life in general. Fair warning: those rarely end on time.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/AadeshGurav", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/aadeshgurav", icon: "linkedin" },
  ],
  email: "guravaadesh99@gmail.com",
};
