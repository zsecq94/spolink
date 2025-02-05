import React from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useStyle } from '@/hooks'
import { View, Platform, Pressable } from 'react-native'

import * as Icons from '@/assets/icons'
import SvgIcon from '../shared/SvgIcon'

type TouchIconProps = {
  name: keyof typeof Icons
  onPress?: () => void
  color?: string
  size?: number
}

const TouchIcon = ({ name, onPress, color, size }: TouchIconProps) => {
  const { layout, colors, borders, spacing } = useStyle()
  const isAndroid = Platform.OS === 'android'

  const background = useSharedValue('transparent')

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: background.value,
  }))

  const onPressIn = () => {
    background.value = withTiming(colors.rgba010, { duration: 120 })
  }

  const onPressOut = () => {
    background.value = withTiming('transparent', { duration: 120 })
  }

  return (
    <Animated.View
      style={[!isAndroid && backgroundStyle, borders.radius_10, layout.hidden]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        android_ripple={{ color: colors.rgba010 }}
      >
        <View style={[spacing.p_6]}>
          <SvgIcon name={name} size={size} color={color} />
        </View>
      </Pressable>
    </Animated.View>
  )
}

export default TouchIcon
