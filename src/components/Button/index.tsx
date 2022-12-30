import React from 'react';

import * as S from './styles';

export interface ButtonProps {
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
