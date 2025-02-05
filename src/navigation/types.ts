import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TabScreenNames =
  | 'HomeScreen'
  | 'TeamScreen'
  | 'MatchScreen'
  | 'GuestScreen'
  | 'MoreScreen'
export type TabIconNames = 'home' | 'team' | 'match' | 'guest' | 'more'

export type AuthParamList = {
  Login: undefined
  Signup: undefined
}
export type AuthScreenProps = NativeStackScreenProps<AuthParamList>

export type TabParamList = {
  HomeScreen: undefined
  TeamScreen: undefined
  MatchScreen: undefined
  GuestScreen: undefined
  MoreScreen: undefined
}

export type AppParamList = {
  TabNav: undefined
  NoticeScreen: undefined
  TeamCreationScreen: undefined
  TeamDetailScreen: { teamId: string }
  GuestRequestScreen: undefined
  MatchCreationScreen: undefined
}

export type AppScreenProps<T extends keyof (AppParamList & TabParamList)> =
  CompositeScreenProps<
    NativeStackScreenProps<AppParamList & TabParamList, T>,
    BottomTabScreenProps<TabParamList>
  >
