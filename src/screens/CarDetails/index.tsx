import React from 'react';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useNavigation, useRoute } from '@react-navigation/native';

import { getAccessoryIcon } from 'utils/getAccessoryIcon';

import { RootRouteProps } from 'routes/stack.routes';

import { Accessory } from 'components/Accessory';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ImageSlider } from 'components/ImageSlider';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function CarDetails() {
  const {
    params: { car },
  } = useRoute<RootRouteProps<'CarDetails'>>();

  const navigation = useNavigation();
  const theme = useTheme();

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP,
      ),
    };
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <S.Container>
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.backgroundSecondary },
        ]}
      >
        <S.Header>
          <BackButton onPress={() => navigation.goBack()} />
        </S.Header>

        <Animated.View style={sliderCarsStyleAnimation}>
          <S.CarImages>
            <ImageSlider
              imagesUrl={
                car.photos
                  ? car.photos
                  : [{ id: car.thumbnail, photo: car.thumbnail }]
              }
            />
          </S.CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.Accessories>

        <S.About>{car.about}</S.About>
      </Animated.ScrollView>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling', { car })}
        />
      </S.Footer>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
});
