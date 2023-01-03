import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useNetInfo } from '@react-native-community/netinfo';

import { Car as ModelCar } from 'database/models/Car';
import { getAccessoryIcon } from 'utils/getAccessoryIcon';

import * as S from './styles';

export interface CarProps extends RectButtonProps {
  data: ModelCar;
}

export function Car({ data, ...props }: CarProps) {
  const { isConnected } = useNetInfo();

  const Icon = getAccessoryIcon(data.fuel_type);

  return (
    <S.Container {...props}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.period}</S.Period>
            <S.Price>R$ {isConnected === true ? data.price : '...'}</S.Price>
          </S.Rent>

          <S.Type>
            <Icon />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </S.Container>
  );
}
