import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CarDTO } from 'dtos/CarDTO';
import { getAccessoryIcon } from 'utils/getAccessoryIcon';

import * as S from './styles';

export interface CarProps extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...props }: CarProps) {
  const Icon = getAccessoryIcon(data.fuel_type);

  return (
    <S.Container {...props}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.period}</S.Period>
            <S.Price>{`R$ ${data.price}`}</S.Price>
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
