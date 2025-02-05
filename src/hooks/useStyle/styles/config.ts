export const sizes = [
  1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 32, 40,
] as const

const DEFAULT_COLORS = {
  primary: '#2B87EC',
  black: '#000000',
  white: '#ffffff',
  gray: '#898D99',
}

export const darkColors = {
  background: '#131319',
  text: '#ffffff',
  container: '#000000',
  rgba005: 'rgba(255, 255, 255, 0.05)',
  rgba010: 'rgba(255, 255, 255, 0.1)',
  rgba020: 'rgba(255, 255, 255, 0.2)',
  rgba050: 'rgba(255, 255, 255, 0.5)',
  rgba080: 'rgba(255, 255, 255, 0.8)',
  ...DEFAULT_COLORS,
}

export const lightColors = {
  background: '#ffffff',
  text: '#131319',
  container: '#eeeeee',
  rgba005: 'rgba(0, 0, 0, 0.05)',
  rgba010: 'rgba(0, 0, 0, 0.1)',
  rgba020: 'rgba(0, 0, 0, 0.2)',
  rgba050: 'rgba(0, 0, 0, 0.5)',
  rgba080: 'rgba(0, 0, 0, 0.8)',
  ...DEFAULT_COLORS,
}
