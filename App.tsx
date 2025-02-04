import React from 'react'
import { PortalProvider } from '@gorhom/portal'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DefaultNavigation from '@/navigation'
import { ThemeProvider } from '@/hooks'

const queryClient = new QueryClient()
const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <PortalProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <DefaultNavigation />
            </ThemeProvider>
          </QueryClientProvider>
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App
