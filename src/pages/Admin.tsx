import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { allProjects } from "@/content";
import ProjectsEditor from "./admin/ProjectsEditor";
import ProfileEditor from "./admin/ProfileEditor";
import SkillsEditor from "./admin/SkillsEditor";

const SESSION_KEY = "portfolio-admin-authed";
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined;

/**
 * A soft gate, not real security: VITE_ADMIN_PASSWORD is a build-time env
 * var, so it ends up readable in the shipped JS bundle. This is intentional
 * — it's here to keep casual visitors from finding an edit screen, not to
 * stop a determined one. Nothing behind it can alter the live site directly;
 * every editor just generates a file for you to paste and push yourself.
 */
export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === "1");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  // The 8 site themes style `body` globally via `[data-theme="x"]`, keyed off
  // this same attribute. Admin isn't one of them — strip it here so this page
  // always renders with the plain shadcn defaults, then restore whatever was
  // active when leaving.
  useEffect(() => {
    const previous = document.documentElement.getAttribute("data-theme");
    document.documentElement.removeAttribute("data-theme");
    return () => {
      if (previous) document.documentElement.setAttribute("data-theme", previous);
    };
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (ADMIN_PASSWORD && input === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!ADMIN_PASSWORD) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-3 px-4 text-center">
        <h1 className="text-xl font-semibold">Admin not configured</h1>
        <p className="text-sm text-muted-foreground">
          Set <code className="rounded bg-muted px-1">VITE_ADMIN_PASSWORD</code> in Render's environment
          variables (Static Site → Environment) and redeploy.
        </p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 px-4">
        <h1 className="text-xl font-semibold">Admin</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <Label htmlFor="admin-password">Password</Label>
            <Input
              id="admin-password"
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
          </div>
          {error && <p className="text-sm text-destructive">Wrong password.</p>}
          <Button type="submit">Enter</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="mb-1 text-2xl font-semibold">Site admin</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Edits here don't go live by themselves — each tab generates a content file for you to paste
        into the repo and push, same as editing it by hand, just without hand-writing TypeScript.
      </p>
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="mt-6">
          <ProjectsEditor initialProjects={allProjects} />
        </TabsContent>
        <TabsContent value="profile" className="mt-6">
          <ProfileEditor initialProfile={profile} />
        </TabsContent>
        <TabsContent value="skills" className="mt-6">
          <SkillsEditor initialSkills={skills} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
