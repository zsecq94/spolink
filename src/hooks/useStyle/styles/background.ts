import { Colors, Background } from '../types'

export const generateBackground = (colors: Colors) => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    acc[key as keyof Colors] = {
      backgroundColor: value,
    }
    return acc
  }, {} as Background)
}
