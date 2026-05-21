export const profile = {
  name: "Byxesh",
  title: "High-load Golang Developer",
  github: "https://github.com/XeshSufferer",
  telegram: "https://t.me/byxesh",

  techStack: {
    languages: ["C#", "Golang", "Python", "SQL"],
    databases: ["MongoDB", "PostgreSQL", "Redis", "SQLite"],
    goStack: ["sqlc", "ent (entgo.io)", "testify", "Fiber", "Gin", "net/http", "fasthttp", "Raw TCP/UDP/QUIC"],
    csharpStack: ["EF Core", "xUnit", "ASP.NET Core"],
    devops: {
      infra: ["nginx", "traefik", "rabbitmq", "nats"],
      tools: ["Git", "Postman", "pprof (Go profiler)"],
      devops: ["Docker", "Docker-Compose", "k3s"],
    },
  },

  experience: {
    k8sPR: {
      title: "Kubernetes Contributor",
      prNumber: 138220,
      prUrl: "https://github.com/kubernetes/kubernetes/pull/138220",
      description: "Allocation optimization in the hot-path (kubelet/prober)",
    },
    petProjects: {
      url: "https://github.com/XeshSufferer",
      description: "Sources and projects",
    },
  },
} as const;

export type TechGroup = keyof typeof profile.techStack;
