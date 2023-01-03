import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CarDTO } from 'dtos/CarDTO';
import { api } from 'services/api';
import { getAccessoryIcon } from 'utils/getAccessoryIcon';

import { RootRouteProps } from 'routes';

import { Accessory } from 'components/Accessory';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ImageSlider } from 'components/ImageSlider';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function CarDetails() {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);

  const {
    params: { car },
  } = useRoute<RootRouteProps<'CarDetails'>>();

  const { navigate, goBack } = useNavigation();
  const { isConnected } = useNetInfo();
  const { colors } = useTheme();

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

  useEffect(() => {
    async function fetchCarUpdated() {
      const { data } = await api.get(`/cars/${car.id}`);

      setCarUpdated(data);
    }

    if (isConnected === true) {
      fetchCarUpdated();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <S.Container>
      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          { backgroundColor: colors.backgroundSecondary },
        ]}
      >
        <S.Header>
          <BackButton onPress={() => goBack()} />
        </S.Header>

        <Animated.View style={sliderCarsStyleAnimation}>
          <S.CarImages>
            <ImageSlider
              imagesUrl={
                !!carUpdated.photos
                  ? carUpdated.photos
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
            <S.Period>{car.period}</S.Period>
            <S.Price>R$ {isConnected === true ? car.price : '...'}</S.Price>
          </S.Rent>
        </S.Details>

        {carUpdated.accessories && (
          <S.Accessories>
            {carUpdated.accessories.map(accessory => (
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))}
          </S.Accessories>
        )}

        <S.About>{car.about}</S.About>
      </Animated.ScrollView>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          enabled={isConnected === true}
          onPress={() => navigate('Scheduling', { car: carUpdated })}
        />

        {isConnected === false && (
          <S.OfflineInfo>
            Conecte-se à Internet para ver mais detalhes e agendar seu carro.
          </S.OfflineInfo>
        )}
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
