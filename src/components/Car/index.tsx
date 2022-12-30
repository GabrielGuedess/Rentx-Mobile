import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import Gasoline from 'assets/gasoline.svg';

import * as S from './styles';

export interface CarProps extends RectButtonProps {
  brand: string;
  name: string;
  thumbnail: string;
  rent: {
    period: string;
    price: number;
  };
}

export function Car({ brand, name, thumbnail, rent, ...props }: CarProps) {
  return (
    <S.Container {...props}>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{`R$ ${rent.price}`}</S.Price>
          </S.Rent>

          <S.Type>
            <Gasoline />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CarImage source={{ uri: thumbnail }} resizeMode="contain" />
    </S.Container>
  );
}
