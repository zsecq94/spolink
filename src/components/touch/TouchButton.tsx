import React from 'react'
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native'
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { CText } from '@/components'
import { useStyle } from '@/hooks'

type TouchButtonProps = {
  title: string
  onPress?: () => void
  disabled?: boolean
  type?: 'primary' | 'secondary'
}

const TouchButton = ({
  title,
  onPress,
  disabled,
  type = 'primary',
}: TouchButtonProps) => {
  const { layout, borders, colors, fonts, spacing } = useStyle()
  const scale = useSharedValue(1)

  const isPrimary = type === 'primary'
  const isAndroid = Platform.OS === 'android'
  const Container = isAndroid ? TouchableNativeFeedback : TouchableOpacity

  const backgroundColor = isPrimary ? colors.primary : 'rgba(43, 135, 236, 0.2)'
  const rippleColor = isPrimary ? colors.white : colors.primary
  const ripple = {
    background: TouchableNativeFeedback.Ripple(rippleColor, false),
  }

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  const handlePressIn = () => {
    scale.value = withTiming(0.97, { duration: 100 })
  }

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 })
  }

  return (
    <Animated.View style={[layout.hidden, borders.radius_8, scaleStyle]}>
      <Container
        disabled={disabled}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...(isAndroid && ripple)}
      >
        <View
          style={[
            spacing.px_12,
            layout.alignCenter,
            layout.justifyCenter,
            { height: 45, opacity: disabled ? 0.5 : 1, backgroundColor },
          ]}
        >
          <CText style={[fonts.w500, { color: rippleColor }]}>{title}</CText>
        </View>
      </Container>
    </Animated.View>
  )
}

export default TouchButton
