export type SocialLink = {
  label: string
  href: string
  icon: 'telegram' | 'vk' | 'github' | 'email'
}

export type Profile = {
  displayName: string
  role: string
  location: string
}

export type Project = {
  title: string
  subtitle: string
  description: string
}

export const portfolio = {
  profile: {
    displayName: 'ByXesh',
    role: 'Backend / Platform',
    location: 'Калининград, Россия',
  } satisfies Profile,

  socials: [
    {
      label: 'Telegram',
      href: 'https://t.me/byxesh',
      icon: 'telegram',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/XeshSufferer',
      icon: 'github',
    }
  ] satisfies SocialLink[],

  skills: [
    '.NET Aspire',
    'RabbitMQ',
    'ASP.NET Core',
    'EF Core',
    'PostgreSQL',
    'MongoDB',
    'xUnit',
    'FluentValidation',
  ],

  featuredProject: {
    title: 'Azone',
    subtitle: 'Microservices / Observability / Messaging',
    description:
      'Копия маркетплейса Ozon используя ASP.NET Core, Aspire, gRPC, RabbitMQ, PostgreSQL',
  } satisfies Project,
} as const
