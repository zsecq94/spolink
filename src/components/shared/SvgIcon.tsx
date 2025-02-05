import React from 'react'
import { useTheme } from '@/hooks'
import * as Icons from '@/assets/icons'

export type CIconProps = {
  name: keyof typeof Icons
  size?: number
  width?: number
  height?: number
  color?: string
}

const SvgIcon = ({ name, size = 23, width, height, color }: CIconProps) => {
  const { isDark } = useTheme()
  const currentColor = color || (isDark ? '#ffffff' : '#131319')
  const Icon = Icons[name]
  return (
    <Icon width={width || size} height={height || size} color={currentColor} />
  )
}

export default SvgIcon
