import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";

export function Experience() {
  const { experience } = profile;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Experience & Open Source</h2>

      <Card className="bg-card border-cyan-900/20">
        <CardHeader>
          <CardTitle className="text-cyan-400">Kubernetes Contributor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Active contributor to the{" "}
            <code className="rounded bg-cyan-950/40 px-1.5 py-0.5 text-cyan-300">kubernetes/kubernetes</code>{" "}
            core repository.
          </p>
          <div className="rounded-lg border border-cyan-900/30 bg-cyan-950/20 p-3">
            <p className="text-sm font-medium">Pull Request:{" "}
              <a
                href={experience.k8sPR.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
              >
                #{experience.k8sPR.prNumber}
              </a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {experience.k8sPR.description}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-cyan-900/20">
        <CardHeader>
          <CardTitle className="text-cyan-400">Pet Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <a
              href={experience.petProjects.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
            >
              {experience.petProjects.description}
            </a>{" "}
            on GitHub.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
