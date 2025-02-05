import { View, Text } from 'react-native'
import React from 'react'
import { useStyle } from '@/hooks'
import { CText } from '@/components'

const NoticeScreen = () => {
  const { fonts, layout, spacing, background } = useStyle()
  return (
    <View style={[layout.flex_1, background.primary]}>
      <CText>NoticeScreen</CText>
    </View>
  )
}

export default NoticeScreen
