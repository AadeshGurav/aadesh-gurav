import { useState } from "react";
import { Copy, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import type { Project } from "@/content/types";
import { generateProjectsFile } from "./generators";

export default function ProjectsEditor({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState<Project[]>(
    [...initialProjects].sort((a, b) => a.order - b.order)
  );

  function update(id: string, patch: Partial<Project>) {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  }

  function move(id: string, direction: -1 | 1) {
    setProjects((prev) => {
      const list = [...prev];
      const i = list.findIndex((p) => p.id === id);
      const j = i + direction;
      if (j < 0 || j >= list.length) return prev;
      [list[i], list[j]] = [list[j], list[i]];
      return list.map((p, idx) => ({ ...p, order: idx + 1 }));
    });
  }

  async function copyGenerated() {
    const text = generateProjectsFile(projects.map((p, i) => ({ ...p, order: i + 1 })));
    await navigator.clipboard.writeText(text);
    toast({ title: "Copied", description: "Paste this into src/content/projects.ts and push." });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Edit below, then copy the generated file and paste it into{" "}
          <code className="rounded bg-muted px-1">src/content/projects.ts</code>, commit, push.
        </p>
        <Button onClick={copyGenerated} className="gap-2">
          <Copy className="h-4 w-4" />
          Copy projects.ts
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <div key={project.id} className="rounded-lg border p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => move(project.id, -1)} disabled={i === 0} aria-label="Move up">
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => move(project.id, 1)} disabled={i === projects.length - 1} aria-label="Move down">
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">{project.id}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Label htmlFor={`wip-${project.id}`} className="text-sm">
                    WIP
                  </Label>
                  <Switch
                    id={`wip-${project.id}`}
                    checked={project.status === "wip"}
                    onCheckedChange={(checked) => update(project.id, { status: checked ? "wip" : "live" })}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Label htmlFor={`show-${project.id}`} className="text-sm">
                    Show on site
                  </Label>
                  <Switch
                    id={`show-${project.id}`}
                    checked={project.show}
                    onCheckedChange={(checked) => update(project.id, { show: checked })}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <Label htmlFor={`name-${project.id}`}>Name</Label>
                <Input
                  id={`name-${project.id}`}
                  value={project.name}
                  onChange={(e) => update(project.id, { name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor={`stack-${project.id}`}>Stack (comma-separated)</Label>
                <Input
                  id={`stack-${project.id}`}
                  value={project.stack.join(", ")}
                  onChange={(e) =>
                    update(project.id, {
                      stack: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                    })
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor={`desc-${project.id}`}>Description</Label>
                <Textarea
                  id={`desc-${project.id}`}
                  value={project.description}
                  onChange={(e) => update(project.id, { description: e.target.value })}
                  rows={2}
                />
              </div>
              <div>
                <Label htmlFor={`repo-${project.id}`}>Repo URL</Label>
                <Input
                  id={`repo-${project.id}`}
                  value={project.repoUrl}
                  onChange={(e) => update(project.id, { repoUrl: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor={`live-${project.id}`}>Live URL (optional)</Label>
                <Input
                  id={`live-${project.id}`}
                  value={project.liveUrl ?? ""}
                  onChange={(e) => update(project.id, { liveUrl: e.target.value || undefined })}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
