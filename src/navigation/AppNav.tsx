import React from 'react'
import { Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  AppParamList,
  AppScreenProps,
  TabIconNames,
  TabParamList,
  TabScreenNames,
} from './types'
import {
  HomeScreen,
  GuestScreen,
  MatchScreen,
  TeamScreen,
  MoreScreen,
  TeamCreationScreen,
  GuestRequestScreen,
  MatchCreationScreen,
  NoticeScreen,
} from '@/screens'
import { useStyle } from '@/hooks'
import { CText, SvgIcon } from '@/components'
import { routes } from './routes'

const Stack = createNativeStackNavigator<AppParamList>()
const Tab = createBottomTabNavigator<TabParamList>()

const TabNav = () => {
  const { fonts, colors } = useStyle()
  const { top, bottom } = useSafeAreaInsets()
  const bottomTab = routes()

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => {
        const tab = bottomTab[route.name as TabScreenNames]
        return {
          tabBarStyle: {
            height: bottom + 52,
            paddingHorizontal: 5,
          },
          headerStyle: {
            height: top + 55,
            elevation: 0,
          },
          headerTitle: () => (
            <CText style={[fonts.size_20, fonts.w700]}>{tab.name}</CText>
          ),
          headerRight: () => tab.headerRight(navigation as any),
          tabBarButton: (props) => (
            <Pressable {...props} android_ripple={null} />
          ),
          tabBarIcon: ({ focused }) => (
            <SvgIcon
              name={tab.icon as TabIconNames}
              size={22}
              color={focused ? colors.text : colors.gray}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <CText
              style={[
                fonts.size_10,
                focused ? fonts.colors.text : fonts.colors.gray,
                focused ? fonts.w700 : fonts.w400,
              ]}
            >
              {tab.name}
            </CText>
          ),
        }
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TeamScreen" component={TeamScreen} />
      <Tab.Screen name="MatchScreen" component={MatchScreen} />
      <Tab.Screen name="GuestScreen" component={GuestScreen} />
      <Tab.Screen name="MoreScreen" component={MoreScreen} />
    </Tab.Navigator>
  )
}

const AppNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabNav"
          component={TabNav}
        />
        <Stack.Screen
          options={{ title: '공지사항' }}
          name="NoticeScreen"
          component={NoticeScreen}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ presentation: 'modal', animation: 'fade_from_bottom' }}
      >
        <Stack.Screen
          name="TeamCreationScreen"
          component={TeamCreationScreen}
        />
        <Stack.Screen
          name="GuestRequestScreen"
          component={GuestRequestScreen}
        />
        <Stack.Screen
          name="MatchCreationScreen"
          component={MatchCreationScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default AppNav
