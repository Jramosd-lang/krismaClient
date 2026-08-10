'use client'

// ThemeToggle — botón de modo claro/oscuro
// Qué es: el botón que permite al usuario cambiar entre modo claro y oscuro de la app.
// Para qué sirve: hace accionable el modo claro/oscuro que ThemeProvider ya habilita;
// sin este botón no hay forma de cambiar el tema desde la pantalla.
// Es archivo cliente ('use client') porque usa la interacción del usuario y el estado
// del tema en el navegador (useTheme de next-themes).
// Vive en shared porque se reutiliza (hoy en BlankLayout, mañana en otras pantallas);
// usa el Button de components/ui para verse igual que el resto.




/* ----------------------------------------------------------------------------------- */
/* ------------------------------------IMPORTS --------------------------------------- */
/* ----------------------------------------------------------------------------------- */

import { useTheme } from "next-themes"; // No se, que lo comente Opencode xd
import { Button } from "../ui/button"; //Importa la apariencia base del botón.
import { Sun, Moon } from "lucide-react"; //Importa los íconos de sol y luna de la biblioteca "lucide-react"
import { relative } from "path";





/* ----------------------------------------------------------------------------------- */
/* ------------------------------------COMPONENTS ------------------------------------ */
/* ----------------------------------------------------------------------------------- */

const ThemeToggle = () => {
  
  //Desestructurar 'useTheme' para trabajar con las herramientas que necesitamos.
  //'theme' es el tema actual y 'setTheme' la función que altera el valor del tema actual.
  const {theme, setTheme} = useTheme();


  return (
    
    //Usa un ternario para alternar el valor. Con 'z-index' alto para que agarre los clicks.
    <Button className={'absolute top-4 right-4 z-50 cursor-pointer'} onClick={ () => {setTheme(theme === 'dark' ? 'light': 'dark')} }>

      {/* Con un ternario se decide cuál ícono mostrar */}
      {theme === 'dark' ? <Moon /> : <Sun />}

    </Button>
  )
}

export default ThemeToggle