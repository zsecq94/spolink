import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Theme } from '@react-navigation/native'
import { Appearance, StatusBar } from 'react-native'
import SystemNavigationBar from 'react-native-system-navigation-bar'
import { darkTheme, lightTheme } from './config'
// import { ToastProvider } from '../useToast/ToastProvider'

type ThemeContextType = {
  isDark: boolean
  navTheme: Theme
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
)
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(
    Appearance.getColorScheme() === 'dark',
  )

  const updateSystemAppearance = useCallback(() => {
    SystemNavigationBar.setNavigationColor(
      'transparent',
      isDark ? 'light' : 'dark',
      'both',
    )
  }, [isDark])

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === 'dark')
    })
    updateSystemAppearance()
    return () => subscription.remove()
  }, [updateSystemAppearance])

  const navTheme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, navTheme }}>
      {/* <ToastProvider>{children}</ToastProvider> */}
      {children}
    </ThemeContext.Provider>
  )
}
