import { sizes } from './config'
import { Colors, BorderColor, BorderRadius, BorderWidth } from '../types'

export const generateBorderWidth = sizes.reduce((acc, size) => {
  return Object.assign(acc, {
    [`w_${size}`]: {
      borderWidth: size,
    },
    [`wTop_${size}`]: {
      borderTopWidth: size,
    },
    [`wBottom_${size}`]: {
      borderBottomWidth: size,
    },
    [`wLeft_${size}`]: {
      borderLeftWidth: size,
    },
    [`wRight_${size}`]: {
      borderRightWidth: size,
    },
  })
}, {} as BorderWidth)

export const generateBorderRadius = [...sizes, 999].reduce((acc, size) => {
  return Object.assign(acc, {
    [`radius_${size}`]: {
      borderRadius: size,
    },
  })
}, {} as BorderRadius)

export const generateBorderColor = (colors: Colors) => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    acc[key as keyof Colors] = {
      borderColor: value,
    }
    return acc
  }, {} as BorderColor)
}
