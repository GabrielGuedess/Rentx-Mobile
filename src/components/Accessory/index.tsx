import React from 'react';
import { SvgProps } from 'react-native-svg';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: AccessoryProps) {
  const { colors } = useTheme();

  return (
    <S.Container>
      <Icon width={32} height={32} fill={colors.title} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}
