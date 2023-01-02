import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Brand from 'assets/brand.svg';
import Logo from 'assets/logo.svg';

import * as S from './styles';

export const Splash: React.FC = () => {
  const { navigate } = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -60],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-60, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  function startApp() {
    navigate('SignIn');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet';
      runOnJS(startApp)();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <Brand width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <Logo width={180} height={20} />
      </Animated.View>
    </S.Container>
  );
};
