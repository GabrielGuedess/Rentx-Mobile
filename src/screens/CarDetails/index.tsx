import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { RootRouteProps } from 'routes/stack.routes';

import { Accessory } from 'components/Accessory';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ImageSlider } from 'components/ImageSlider';

import { getAccessoryIcon } from 'utils/getAccessoryIcon';

import * as S from './styles';

export function CarDetails() {
  const {
    params: { car },
  } = useRoute<RootRouteProps<'CarDetails'>>();

  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => navigation.goBack()} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CarImages>

      <S.Content>
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
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling', { car })}
        />
      </S.Footer>
    </S.Container>
  );
}
