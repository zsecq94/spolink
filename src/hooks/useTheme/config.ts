import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#ffffff',
    background: '#000000',
    card: '#131319',
    text: '#ffffff',
  },
}

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#131319',
    background: '#eeeeee',
    card: '#ffffff',
    text: '#000000',
  },
}
