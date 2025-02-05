import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import React, { PropsWithChildren } from 'react'
import { Platform, ViewStyle, StyleProp, Pressable } from 'react-native'

import { useStyle } from '@/hooks'

type TouchWrapperProps = PropsWithChildren<{
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}>

const TouchWrapper = ({ children, onPress, style }: TouchWrapperProps) => {
  const { layout, colors, borders } = useStyle()
  const isAndroid = Platform.OS === 'android'

  const scale = useSharedValue(1)
  const background = useSharedValue('transparent')

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const backgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: background.value,
  }))

  const onPressIn = () => {
    scale.value = withTiming(0.97, { duration: 120 })
    background.value = withTiming(colors.rgba010, { duration: 120 })
  }

  const onPressOut = () => {
    scale.value = withTiming(1, { duration: 120 })
    background.value = withTiming('transparent', { duration: 120 })
  }

  return (
    <Animated.View
      style={[!isAndroid && backgroundStyle, borders.radius_8, layout.hidden]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        android_ripple={{ color: colors.rgba010 }}
      >
        <Animated.View style={[scaleStyle, style]}>{children}</Animated.View>
      </Pressable>
    </Animated.View>
  )
}

export default TouchWrapper
