---
name: sdd-objetivos
description: "Trigger: trabajar por objetivos, objetivos pendientes, continuar desarrollo, siguiente paso. Esta metodología: verificar pendientes, preguntar enfocado al objetivo, cerrar y documentar."
license: Apache-2.0
metadata:
  author: "santiago"
  version: "1.0"
---

## Activation Contract

- Activar al iniciar una sesión de desarrollo o al continuar trabajo, cuando Santiago hable de objetivos, pendientes o próximo paso del módulo.
- No aplica a preguntas sueltas ni tareas de un solo artefacto ya terminado.

## Hard Rules

- **El usuario (Santiago) escribe el código.** La IA guía, documenta, revisa y verifica; no escribe código ni modifica archivos sin orden explícita.
- No asumir funcionalidades ni alcance: cada duda se convierte en pregunta (flujo-preguntas) antes de avanzar.
- Un objetivo se marca **completado solo con evidencia** (ej. `tsc` en 0, probado en navegador).
- El flujo es **mutable**: puede cambiar con el tiempo; proponer ajustes, no darlos por fijos.

## Decision Gates

| Situación | Acción |
| --- | --- |
| Hay objetivos pendientes | Trabajar el objetivo **en curso**; si no hay en curso, el primer pendiente |
| Sin pendientes | Proponer objetivos nuevos o decidir cierre del módulo |
| Alcance del objetivo no definido | Preguntar a Santiago dónde se enfoca (general vs específico) |
| Archivo con interacción/estado | Marcar `'use client'` (formularios, providers, botones de tema) |
| Duda de Next.js/React | Explicarla con analogía simple antes de escribir |

## Execution Steps

1. Verificar la lista de objetivos en `apuntes útiles/sdd/design/<módulo>.md` (sección "Objetivos del módulo").
2. Presentar el objetivo en curso y su alcance; preguntar si falta definir dónde se enfoca.
3. Desarrollar el objetivo con preguntas enfocadas (de lo general a lo particular); Santiago escribe el código.
4. Verificar: `npx tsc --noEmit` (y probar en navegador si corresponde).
5. Cerrar: mover el objetivo a Completados en el documento, registrar en `historial-cambios.md` y guardar aprendizajes en memoria.

## Output Contract

- Estado del objetivo: en curso / completado / bloqueado (con motivo).
- Archivos tocados + evidencia de verificación (tsc en 0, probado).
- Objetivo siguiente sugerido.

## References

- `apuntes útiles/sdd/metodologia.md` — metodología general (documento vivo, puede cambiar).
- `apuntes útiles/sdd/design/auth.md` — objetivos del módulo auth.
- `apuntes útiles/sdd/historial-cambios.md` — registro de cambios por sesión.
- Skill `skill-creator` / guía de estilo para mantener este SKILL.md.