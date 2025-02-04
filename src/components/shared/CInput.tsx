import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated'
import React, { forwardRef } from 'react'
import { TextInput, TextInputProps, Animated } from 'react-native'

import { useStyle } from '@/hooks'

const CInput = forwardRef<TextInput, TextInputProps>(({ ...rest }, ref) => {
  const { spacing, fonts, colors, borders } = useStyle()

  const borderColor = useSharedValue(colors.rgba010)

  // TextInput 포커스 이벤트
  const handleFocus = () => {
    borderColor.value = withTiming(colors.primary, { duration: 300 })
  }

  // TextInput 블러 이벤트
  const handleBlur = () => {
    borderColor.value = withTiming(colors.rgba010, { duration: 300 })
  }

  // View 스타일 애니메이션
  const animatedViewStyle = useAnimatedStyle(() => ({
    borderColor: borderColor.value,
  }))

  return (
    <Animated.View
      style={[spacing.px_8, borders.w_1, borders.radius_4, animatedViewStyle]}
    >
      <TextInput
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
        placeholderTextColor={colors.rgba020}
        style={[fonts.w400, rest.style]}
      />
    </Animated.View>
  )
})

export default CInput
