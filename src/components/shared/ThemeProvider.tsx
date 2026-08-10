'use client'

// ThemeProvider del proyecto
// Envuelve toda la app para manejar el modo claro/oscuro.
// Envuelve el ThemeProvider de next-themes con la config de krismaClient.// Es un archivo cliente porque guarda la elección del usuario en el navegador.



// Import del ThemeProvider de next-themes.
// Le ponemos alias (NextThemeProvider) para no chocar con el componente
// ThemeProvider que exporta nosotros más abajo.
import { ThemeProvider as NextThemeProvider } from 'next-themes'

// Importa un tipo de dato (ReactNode) para usarlo más adelante en el componente.
import type { ReactNode } from 'react'



// Componente ThemeProvider del proyecto.
/* 
   Recibe un objeto, del cual extrae una propiedad 'children', esta debe ser de tipo 'ReactNode' (El tipo importado)
   El parámetro viene implícito: lo que el layout ponga DENTRO de las etiquetas <ThemeProvider>...</ThemeProvider>
   se empaqueta solo como children y se entrega acá, sin pasarlo a mano.
*/
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (


    // Este es el ThemeProvider real de next-themes, ya configurado:
    // attribute="class"  → aplica el tema agregando la clase 'dark' al <html>
    // defaultTheme="light" → el tema por defecto es claro (decisión del proyecto)
    // Adentro solo renderiza los children: las pantallas que quedan envueltas.
    <NextThemeProvider attribute='class' defaultTheme='light'>
      {children}
    </NextThemeProvider>
  )
}

// Export por defecto: así el layout raíz puede importarlo como ThemeProvider
export default ThemeProvider
