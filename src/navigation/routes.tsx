import { useStyle } from '@/hooks'
import { AppScreenProps } from './types'
import { Pressable, View } from 'react-native'
import { CText, SvgIcon, TouchIcon } from '@/components'
import { userStore } from '@/stores'

export const routes = () => {
  const { layout, fonts, spacing, colors, background } = useStyle()
  const { user } = userStore()

  const bottomTab = {
    HomeScreen: {
      name: '홈',
      icon: 'home',
      headerRight: (navigation: AppScreenProps<'HomeScreen'>['navigation']) => {
        return (
          <View
            style={[
              layout.row,
              layout.alignCenter,
              spacing.pr_10,
              spacing.gap_4,
            ]}
          >
            <TouchIcon name="search" size={25} />

            <View>
              <TouchIcon name="notice" size={27} />
              <View
                style={[
                  layout.absolute,
                  background.primary,
                  {
                    width: 5,
                    height: 5,
                    borderRadius: 99,
                    right: 5,
                    top: 5,
                  },
                ]}
              />
            </View>
          </View>
        )
      },
    },
    TeamScreen: {
      name: '팀 보기',
      icon: 'team',
      headerRight: (navigation: AppScreenProps<'TeamScreen'>['navigation']) => (
        <View>
          <CText>하이</CText>
        </View>
      ),
    },
    MatchScreen: {
      name: '매칭',
      icon: 'match',
      headerRight: (
        navigation: AppScreenProps<'MatchScreen'>['navigation'],
      ) => (
        <View>
          <CText>하이</CText>
        </View>
      ),
    },
    GuestScreen: {
      name: '게스트',
      icon: 'guest',
      headerRight: (
        navigation: AppScreenProps<'GuestScreen'>['navigation'],
      ) => (
        <View>
          <CText>하이</CText>
        </View>
      ),
    },
    MoreScreen: {
      name: '더 보기',
      icon: 'more',
      headerRight: (navigation: AppScreenProps<'MoreScreen'>['navigation']) => (
        <View>
          <CText>하이</CText>
        </View>
      ),
    },
  }

  return bottomTab
}
