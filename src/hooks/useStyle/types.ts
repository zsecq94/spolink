import { sizes, darkColors } from './styles/config'
import { generateFontWeight } from './styles/fonts'
import layout from './styles/layout'

export type UseStyleHook = {
  colors: Colors
  fonts: Fonts
  spacing: Spacing
  borders: Borders
  background: Background
  layout: typeof layout
}

export type Colors = typeof darkColors

// 기본적인 유틸리티 타입
export type ArrayValue<T extends readonly unknown[]> = T[number]

// 기본 크기 타입 정의
export type SizesList = ArrayValue<typeof sizes>

// 세부 타입 정의
type Borders = BorderWidth & BorderRadius & { colors: BorderColor }
type Fonts = typeof generateFontWeight & FontSizes & { colors: FontColors }

// Font 관련 타입
export type FontSizes = {
  [key in `size_${SizesList}`]: { fontSize: SizesList }
}

export type FontColors = {
  [key in keyof Colors]: { color: Colors[key] }
}

// Spacing 관련 타입
export type Spacing = {
  [key in SpacingKeys]: {
    [innerKey in MarginKeys | PaddingKeys | 'gap']: number
  }
}

type MarginKeys =
  | 'margin'
  | 'marginBottom'
  | 'marginTop'
  | 'marginRight'
  | 'marginLeft'
  | 'marginVertical'
  | 'marginHorizontal'

type PaddingKeys =
  | 'padding'
  | 'paddingBottom'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingLeft'
  | 'paddingVertical'
  | 'paddingHorizontal'

type SpacingKeys = `${MarginVariants | PaddingVariants | 'gap'}_${SizesList}`

type MarginVariants = 'm' | 'mb' | 'mt' | 'mr' | 'ml' | 'my' | 'mx'
type PaddingVariants = 'p' | 'pb' | 'pt' | 'pr' | 'pl' | 'py' | 'px'

// Border 관련 타입
type BorderWidthKeys = `${
  | 'w'
  | 'wTop'
  | 'wBottom'
  | 'wLeft'
  | 'wRight'}_${SizesList}`

export type BorderWidth = {
  [key in BorderWidthKeys]: { borderWidth: SizesList }
}

export type BorderRadius = {
  [key in `radius_${SizesList}`]: {
    borderRadius: SizesList
  }
}

export type BorderColor = {
  [key in keyof Colors]: { borderColor: Colors[keyof Colors] }
}

// Background 타입 정의
export type Background = {
  [key in keyof Colors]: { backgroundColor: string }
}
