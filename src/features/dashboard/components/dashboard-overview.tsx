"use client";

import {
  Bell,
  ChevronDown,
  CircleHelp,
  GitBranch,
  GitPullRequest,
  Grid2X2,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  dashboardSummary,
  mainNavigation,
} from "@/features/dashboard/data/dashboard-summary";

const navigationIcons = {
  LayoutDashboard,
  Users,
  GitPullRequest,
  GitBranch,
  Grid2X2,
};

export function DashboardOverview() {
  return (
    <div className="min-h-dvh bg-[#f4f4f1] p-3 text-zinc-950 sm:p-5 lg:p-6">
      <div className="mx-auto flex min-h-[calc(100dvh-1.5rem)] max-w-[1600px] overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white shadow-[0_24px_80px_-36px_rgba(24,24,27,0.28)] sm:min-h-[calc(100dvh-2.5rem)]">
        <aside className="hidden w-64 shrink-0 border-r border-zinc-100 bg-[#fcfcfb] p-5 lg:flex lg:flex-col">
          <Brand />
          <Navigation />
          <div className="mt-auto rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="flex size-8 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <CircleHelp className="size-4" aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm font-semibold">¿Necesitas contexto?</p>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Lee cómo interpretar estas métricas antes de tomar decisiones.
            </p>
            <a
              className="mt-3 inline-flex text-xs font-semibold text-zinc-950 underline underline-offset-4"
              href="#guia"
            >
              Ver guía de métricas
            </a>
          </div>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-7 lg:p-9">
          <header className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 lg:hidden">
              <Button aria-label="Abrir navegación" size="icon" variant="outline">
                <Menu aria-hidden="true" />
              </Button>
              <Brand compact />
            </div>

            <div className="hidden lg:block" />
            <div className="ml-auto flex items-center gap-2">
              <Button aria-label="Buscar" size="icon" variant="ghost">
                <Search aria-hidden="true" />
              </Button>
              <Button aria-label="Notificaciones" size="icon" variant="ghost" className="relative">
                <Bell aria-hidden="true" />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-emerald-500" />
              </Button>
              <Button variant="outline" className="hidden sm:inline-flex">
                <span className="size-2 rounded-full bg-emerald-500" />
                Equipo plataforma
                <ChevronDown aria-hidden="true" />
              </Button>
            </div>
          </header>

          <section className="mt-10 max-w-4xl">
            <p className="text-sm font-medium text-zinc-500">{dashboardSummary.period}</p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-5">
              <div>
                <h1 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  El pulso de tu equipo
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
                  Una vista de flujo para conversar, desbloquear trabajo y compartir conocimiento;
                  no una clasificación individual.
                </p>
              </div>
              <Button variant="outline" className="bg-white">
                <Sparkles aria-hidden="true" />
                Generar resumen
              </Button>
            </div>
          </section>

          <section aria-label="Indicadores clave" className="mt-9 grid gap-4 md:grid-cols-3">
            {dashboardSummary.kpis.map((kpi, index) => (
              <motion.article
                key={kpi.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.07, ease: "easeOut" }}
                className={
                  index === 0
                    ? "rounded-[1.5rem] bg-zinc-950 p-5 text-white shadow-lg shadow-zinc-950/10"
                    : "rounded-[1.5rem] border border-zinc-200 bg-white p-5"
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <p className={index === 0 ? "text-sm text-zinc-300" : "text-sm text-zinc-500"}>
                    {kpi.label}
                  </p>
                  <Button
                    aria-label={`Más información sobre ${kpi.label}`}
                    size="icon-xs"
                    variant={index === 0 ? "ghost" : "secondary"}
                    className={index === 0 ? "text-zinc-300 hover:bg-white/10 hover:text-white" : undefined}
                  >
                    <MoreHorizontal aria-hidden="true" />
                  </Button>
                </div>
                <p className="mt-8 font-mono text-3xl font-semibold tracking-[-0.06em]">{kpi.value}</p>
                <p
                  className={`mt-2 text-xs leading-5 ${
                    index === 0
                      ? "text-emerald-300"
                      : kpi.trend === "attention"
                        ? "text-amber-700"
                        : "text-emerald-700"
                  }`}
                >
                  {kpi.detail}
                </p>
              </motion.article>
            ))}
          </section>

          <section className="mt-9 grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
            <article className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">Flujo de integración</p>
                  <p className="mt-1 text-sm text-zinc-500">Pull requests fusionadas por semana</p>
                </div>
                <Button variant="secondary" size="sm">Últimas 8 semanas <ChevronDown aria-hidden="true" /></Button>
              </div>
              <div className="mt-8 grid h-36 grid-cols-8 items-end gap-2" aria-label="Gráfico de tendencia ascendente">
                {[42, 56, 48, 71, 63, 77, 82, 68].map((height, index) => (
                  <div key={index} className="flex h-full items-end">
                    <div
                      className={`w-full rounded-t-xl ${index === 7 ? "bg-zinc-950" : "bg-zinc-200"}`}
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs text-zinc-400">
                <span>Jun</span><span>Jul</span><span>Hoy</span>
              </div>
            </article>

            <article className="rounded-[1.5rem] bg-[#e9f5ef] p-5 sm:p-6">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                <Users className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-7 text-sm font-semibold">Conocimiento distribuido</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                4 módulos tienen al menos tres contribuidores activos este mes.
              </p>
              <a href="#colaboradores" className="mt-6 inline-flex text-sm font-semibold underline underline-offset-4">
                Explorar colaboradores
              </a>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2.5" aria-label="Krisma, ir al resumen">
      <span className="flex size-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold tracking-[-0.16em] text-white">K</span>
      {!compact && <span className="text-lg font-semibold tracking-[-0.04em]">Krisma</span>}
    </a>
  );
}

function Navigation() {
  return (
    <nav className="mt-12" aria-label="Navegación principal">
      <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">Analítica</p>
      <ul className="mt-3 space-y-1">
        {mainNavigation.map((item) => {
          const Icon = navigationIcons[item.icon];
          return (
            <li key={item.label}>
              <a
                className={`flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors ${
                  item.active ? "bg-zinc-950 text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
                href={item.href}
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
