import React, { useState } from 'react';
import { TextInputProps, TouchableNativeFeedback } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface PasswordInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({
  iconName,
  value,
  ...props
}: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
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
        secureTextEntry={isPasswordVisible}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsFilled(!!value);
        }}
        {...props}
      />

      <BorderlessButton
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        <TouchableNativeFeedback>
          <S.IconContainer isFocused={isFocused}>
            <Feather
              size={24}
              color={theme.colors.textDetail}
              name={isPasswordVisible ? 'eye' : 'eye-off'}
            />
          </S.IconContainer>
        </TouchableNativeFeedback>
      </BorderlessButton>
    </S.Container>
  );
}
