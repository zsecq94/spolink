import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'

export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    primary: '#ffffff',
    background: '#000000',
    card: '#131319',
    text: '#ffffff',
    border: 'rgba(255, 255, 255, 0.2)',
    notification: 'rgb(255, 69, 58)',
  },
}

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    primary: '#131319',
    background: '#eeeeee',
    card: '#ffffff',
    text: '#000000',
    border: 'rgba(0, 0, 0, 0.2)',
    notification: 'rgb(255, 59, 48)',
  },
}
