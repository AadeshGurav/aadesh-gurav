import { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import type { Profile } from "@/content/types";
import { generateProfileFile } from "./generators";

export default function ProfileEditor({ initialProfile }: { initialProfile: Profile }) {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [bioText, setBioText] = useState(initialProfile.bio.join("\n\n"));

  async function copyGenerated() {
    const bio = bioText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    const text = generateProfileFile({ ...profile, bio });
    await navigator.clipboard.writeText(text);
    toast({ title: "Copied", description: "Paste this into src/content/profile.ts and push." });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Edit below, then copy the generated file and paste it into{" "}
          <code className="rounded bg-muted px-1">src/content/profile.ts</code>, commit, push.
        </p>
        <Button onClick={copyGenerated} className="gap-2">
          <Copy className="h-4 w-4" />
          Copy profile.ts
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="p-name">Name</Label>
          <Input id="p-name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="p-role">Role</Label>
          <Input id="p-role" value={profile.role} onChange={(e) => setProfile({ ...profile, role: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="p-location">Location</Label>
          <Input id="p-location" value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="p-email">Email</Label>
          <Input id="p-email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="p-tagline">Tagline</Label>
          <Textarea id="p-tagline" value={profile.tagline} onChange={(e) => setProfile({ ...profile, tagline: e.target.value })} rows={2} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="p-bio">Bio (blank line between paragraphs)</Label>
          <Textarea id="p-bio" value={bioText} onChange={(e) => setBioText(e.target.value)} rows={8} />
        </div>
      </div>
    </div>
  );
}
