import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
}

export function ConfirmButton({ title, ...props }: ConfirmButtonProps) {
  return (
    <S.Container {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
