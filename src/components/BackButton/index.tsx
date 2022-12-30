import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface BackButtonProps extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...props }: BackButtonProps) {
  const theme = useTheme();

  return (
    <S.Container {...props}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ?? theme.colors.text}
      />
    </S.Container>
  );
}
