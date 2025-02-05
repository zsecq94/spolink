import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CText, TouchButton, TouchIcon, TouchWrapper } from '@/components'
import { AppScreenProps } from '@/navigation/types'
import { useStyle } from '@/hooks'

const HomeScreen = ({ navigation, route }: AppScreenProps<'HomeScreen'>) => {
  const { layout, fonts, spacing, colors, background } = useStyle()

  return (
    <View style={[layout.flex_1, background.background]}>
      <View style={[layout.flex_1, spacing.px_20, layout.justifyCenter]}>
        <View style={{ marginHorizontal: -10 }}>
          <TouchWrapper onPress={() => {}} style={[spacing.p_10]}>
            <CText>하이</CText>
          </TouchWrapper>
          <View
            style={[
              spacing.p_10,
              layout.row,
              layout.justifyBetween,
              layout.alignCenter,
            ]}
          >
            <CText>하이</CText>
            <TouchIcon name="home" color="green" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen
