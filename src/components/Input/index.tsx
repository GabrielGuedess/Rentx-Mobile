import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ iconName, value, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  return (
    <S.Container>
      <S.IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.textDetail
          }
        />
      </S.IconContainer>

      <S.InputText
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsFilled(!!value);
        }}
        {...props}
      />
    </S.Container>
  );
}
