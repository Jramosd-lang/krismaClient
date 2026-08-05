export const dashboardSummary = {
  organizationName: "Krisma Engineering",
  period: "Últimos 30 días",
  kpis: [
    {
      label: "Pull requests fusionadas",
      value: "48",
      detail: "+12 % frente al período anterior",
      trend: "up" as const,
    },
    {
      label: "Tiempo hasta primera revisión",
      value: "9 h 24 min",
      detail: "2 h menos que el período anterior",
      trend: "up" as const,
    },
    {
      label: "Ramas que requieren atención",
      value: "6",
      detail: "Sin actividad durante más de 14 días",
      trend: "attention" as const,
    },
  ],
};

export const mainNavigation = [
  { label: "Resumen", href: "/", icon: "LayoutDashboard", active: true },
  { label: "Colaboradores", href: "#colaboradores", icon: "Users", active: false },
  { label: "Pull requests", href: "#pull-requests", icon: "GitPullRequest", active: false },
  { label: "Ramas", href: "#ramas", icon: "GitBranch", active: false },
  { label: "Mapa de actividad", href: "#actividad", icon: "Grid2X2", active: false },
] as const;
