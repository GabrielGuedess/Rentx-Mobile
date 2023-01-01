import React from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function Input({ iconName, ...props }: InputProps) {
  const theme = useTheme();

  return (
    <S.Container>
      <S.IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.textDetail} />
      </S.IconContainer>

      <S.InputText {...props} />
    </S.Container>
  );
}
