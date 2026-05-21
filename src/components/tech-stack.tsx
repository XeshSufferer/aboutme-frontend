import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";

interface GroupProps {
  title: string;
  items: readonly string[];
}

function TechGroup({ title, items }: GroupProps) {
  return (
    <Card className="bg-card border-cyan-900/20">
      <CardHeader>
        <CardTitle className="text-cyan-400 text-sm uppercase tracking-wider">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Badge key={item} variant="outline" className="border-cyan-800/50 text-cyan-300 bg-cyan-950/20">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function TechStack() {
  const { techStack } = profile;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>

      <TechGroup title="Languages" items={techStack.languages} />
      <TechGroup title="Databases" items={techStack.databases} />
      <TechGroup title="Go Stack (primary)" items={techStack.goStack} />
      <TechGroup title="C# Stack (secondary)" items={techStack.csharpStack} />

      <Card className="bg-card border-cyan-900/20">
        <CardHeader>
          <CardTitle className="text-cyan-400 text-sm uppercase tracking-wider">DevOps & Toolchain</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Infra</p>
            <div className="flex flex-wrap gap-2">
              {techStack.devops.infra.map((item) => (
                <Badge key={item} variant="outline" className="border-cyan-800/50 text-cyan-300 bg-cyan-950/20">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">Tools</p>
            <div className="flex flex-wrap gap-2">
              {techStack.devops.tools.map((item) => (
                <Badge key={item} variant="outline" className="border-cyan-800/50 text-cyan-300 bg-cyan-950/20">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">DevOps</p>
            <div className="flex flex-wrap gap-2">
              {techStack.devops.devops.map((item) => (
                <Badge key={item} variant="outline" className="border-cyan-800/50 text-cyan-300 bg-cyan-950/20">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
