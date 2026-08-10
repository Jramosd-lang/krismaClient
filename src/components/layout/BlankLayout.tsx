// React Imports
import type { ReactNode } from 'react'
import ThemeToggle from '../shared/ThemeToggle'

const BlankLayout = ({ children }: { children: ReactNode }) => {
  return <div className='h-full w-full relative'> <ThemeToggle/> {children}</div>
}

export default BlankLayout
