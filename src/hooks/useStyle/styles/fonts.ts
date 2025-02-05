import { TextStyle } from 'react-native'
import { sizes } from './config'
import { Colors, FontColors, FontSizes } from '../types'

export const generateFontColors = (colors: Colors) => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    acc[key as keyof Colors] = {
      color: value,
    }
    return acc
  }, {} as FontColors)
}

export const generateFontSizes = sizes.reduce((acc, size) => {
  acc[`size_${size}`] = { fontSize: size }
  return acc
}, {} as FontSizes)

export const generateFontWeight = {
  w100: {
    fontFamily: 'SpoqaHanSansNeo-Thin',
  },
  w300: {
    fontFamily: 'SpoqaHanSansNeo-Light',
  },
  w400: {
    fontFamily: 'SpoqaHanSansNeo-Regular',
  },
  w500: {
    fontFamily: 'SpoqaHanSansNeo-Medium',
  },
  w700: {
    fontFamily: 'SpoqaHanSansNeo-Bold',
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
} as const satisfies Record<string, TextStyle>
