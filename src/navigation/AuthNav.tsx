import { View, Text } from 'react-native'
import React from 'react'
import { useStyle } from '@/hooks'
import { TouchButton } from '@/components'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthNav = () => {
  const { layout, fonts, spacing, background, borders } = useStyle()
  return (
    <SafeAreaView style={[layout.flex_1, spacing.p_20]}>
      <View style={[layout.flex_1]}>
        <Text>AuthNav</Text>
      </View>

      <View style={[spacing.py_10]}>
        <TouchButton title="시작하기" onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}

export default AuthNav
