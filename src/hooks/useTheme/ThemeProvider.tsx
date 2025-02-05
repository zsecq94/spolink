import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Appearance, Keyboard, View } from 'react-native'
import { Theme } from '@react-navigation/native'
import SystemNavigationBar from 'react-native-system-navigation-bar'

import { darkTheme, lightTheme } from './config'
import { ToastProvider } from '../useToast/ToastProvider'

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
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  const updateSystemAppearance = useCallback(() => {
    SystemNavigationBar.setNavigationColor(
      'transparent',
      isDark ? 'light' : 'dark',
      'both',
    )
  }, [isDark])

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) =>
      setIsDark(colorScheme === 'dark'),
    )
    updateSystemAppearance()
    return () => subscription.remove()
  }, [updateSystemAppearance])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        setKeyboardHeight(event.endCoordinates.height)
      },
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0)
      },
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  const navTheme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark])
  const backgroundColor = isDark ? '#131319' : '#ffffff'
  return (
    <ThemeContext.Provider value={{ isDark, navTheme }}>
      <View style={{ flex: 1, paddingBottom: keyboardHeight, backgroundColor }}>
        <ToastProvider>{children}</ToastProvider>
      </View>
    </ThemeContext.Provider>
  )
}
