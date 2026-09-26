import { useState } from "react";
import { Copy, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import type { SkillGroup } from "@/content/types";
import { generateSkillsFile } from "./generators";

export default function SkillsEditor({ initialSkills }: { initialSkills: SkillGroup[] }) {
  const [skills, setSkills] = useState<SkillGroup[]>(initialSkills);

  function update(i: number, patch: Partial<SkillGroup>) {
    setSkills((prev) => prev.map((g, idx) => (idx === i ? { ...g, ...patch } : g)));
  }

  function addGroup() {
    setSkills((prev) => [...prev, { category: "New Category", items: [] }]);
  }

  function removeGroup(i: number) {
    setSkills((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function copyGenerated() {
    const text = generateSkillsFile(skills);
    await navigator.clipboard.writeText(text);
    toast({ title: "Copied", description: "Paste this into src/content/skills.ts and push." });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Edit below, then copy the generated file into{" "}
          <code className="rounded bg-muted px-1">src/content/skills.ts</code>, commit, push.
        </p>
        <Button onClick={copyGenerated} className="gap-2">
          <Copy className="h-4 w-4" />
          Copy skills.ts
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {skills.map((group, i) => (
          <div key={i} className="rounded-lg border p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex-1">
                <Label htmlFor={`cat-${i}`}>Category</Label>
                <Input id={`cat-${i}`} value={group.category} onChange={(e) => update(i, { category: e.target.value })} />
              </div>
              <Button variant="outline" size="icon" onClick={() => removeGroup(i)} aria-label="Remove group" className="mt-6">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <Label htmlFor={`items-${i}`}>Items (comma-separated)</Label>
            <Input
              id={`items-${i}`}
              value={group.items.join(", ")}
              onChange={(e) =>
                update(i, { items: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
              }
            />
          </div>
        ))}
        <Button variant="outline" onClick={addGroup} className="gap-2 self-start">
          <Plus className="h-4 w-4" />
          Add category
        </Button>
      </div>
    </div>
  );
}
