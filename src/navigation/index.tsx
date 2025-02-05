import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppNav from './AppNav'
import AuthNav from './AuthNav'
import { useTheme } from '@/hooks'
import { userStore } from '@/stores'

const DefaultNavigation = () => {
  const { navTheme } = useTheme()
  const { user } = userStore()
  return (
    <NavigationContainer theme={navTheme}>
      {user ? <AppNav /> : <AuthNav />}
    </NavigationContainer>
  )
}

export default DefaultNavigation
