import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

export interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...props }: ButtonProps) {
  return (
    <S.Container {...props} color={color}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
