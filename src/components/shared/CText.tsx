import { Text, TextProps } from 'react-native'
import React from 'react'
import { useStyle } from '@/hooks'

const CText = ({ children, style, ...rest }: TextProps) => {
  const { fonts } = useStyle()
  return (
    <Text
      {...rest}
      style={[fonts.w400, fonts.size_16, fonts.colors.text, style]}
    >
      {children}
    </Text>
  )
}

export default CText
