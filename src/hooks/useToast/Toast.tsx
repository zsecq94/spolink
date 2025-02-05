import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Animated, {
  runOnJS,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { Keyboard, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useStyle } from '@/hooks'
import { CText } from '@/components'

const Toast = forwardRef((_, ref) => {
  const { fonts, spacing, layout, borders } = useStyle()

  const [message, setMessage] = useState<string>('')
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0)

  const opacity = useSharedValue(0)
  const translateY = useSharedValue(10)
  const { bottom } = useSafeAreaInsets()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const showToast = (msg: string) => {
    // 기존 Toast 제거
    if (timerRef.current) {
      opacity.value = 0
      translateY.value = 10
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    // 새로운 메시지 설정 및 애니메이션 시작
    setMessage(msg)
    opacity.value = withTiming(1, { duration: 500 })
    translateY.value = withTiming(0, { duration: 500 })

    // 애니메이션 종료 후 메시지 숨김 처리
    timerRef.current = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500 }, () => {
        runOnJS(setMessage)('')
      })
      translateY.value = withTiming(10, { duration: 500 })
    }, 3000)
  }

  useImperativeHandle(ref, () => ({ showToast }))

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
    bottom: keyboardHeight > 0 ? keyboardHeight + bottom + 60 : bottom + 60,
  }))

  useEffect(() => {
    const onKeyboardShow = (e: any) =>
      setKeyboardHeight(e.endCoordinates.height)
    const onKeyboardHide = () => setKeyboardHeight(0)

    const showListener = Keyboard.addListener('keyboardDidShow', onKeyboardShow)
    const hideListener = Keyboard.addListener('keyboardDidHide', onKeyboardHide)

    return () => {
      showListener.remove()
      hideListener.remove()
      // 타이머 정리
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const toastContainerStyle: ViewStyle = {
    alignSelf: 'center',
    maxWidth: '80%',
    backgroundColor: '#585858',
  }

  return (
    message && (
      <Animated.View
        style={[
          layout.absolute,
          layout.z10,
          spacing.py_6,
          spacing.px_8,
          borders.radius_8,
          layout.alignCenter,
          toastContainerStyle,
          animatedStyle,
        ]}
      >
        <CText style={[fonts.colors.white, fonts.w500, fonts.size_14]}>
          {message}
        </CText>
      </Animated.View>
    )
  )
})

export default Toast
