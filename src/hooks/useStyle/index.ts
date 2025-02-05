import { useMemo } from 'react'
import {
  darkColors,
  generateBackground,
  generateBorderColor,
  generateBorderRadius,
  generateBorderWidth,
  generateFontColors,
  generateFontSizes,
  generateFontWeight,
  generateSpacing,
  layout,
  lightColors,
} from './styles'
import { UseStyleHook } from './types'
import useTheme from '../useTheme'

export const useStyle = () => {
  const { isDark } = useTheme()

  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark])
  const fonts = useMemo(
    () => ({
      ...generateFontWeight,
      ...generateFontSizes,
      colors: {
        ...generateFontColors(colors),
      },
    }),
    [],
  )
  const borders = useMemo(
    () => ({
      ...generateBorderWidth,
      ...generateBorderRadius,
      colors: {
        ...generateBorderColor(colors),
      },
    }),
    [],
  )
  const background = useMemo(() => generateBackground(colors), [])

  return {
    colors,
    fonts,
    borders,
    background,
    layout,
    spacing: generateSpacing,
  } as UseStyleHook
}
