import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import * as S from './styles';

interface PasswordInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function PasswordInput({ iconName, ...props }: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const theme = useTheme();

  return (
    <S.Container>
      <S.IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.textDetail} />
      </S.IconContainer>

      <S.InputText secureTextEntry={isPasswordVisible} {...props} />

      <BorderlessButton
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        <S.IconContainer>
          <Feather
            size={24}
            color={theme.colors.textDetail}
            name={isPasswordVisible ? 'eye' : 'eye-off'}
          />
        </S.IconContainer>
      </BorderlessButton>
    </S.Container>
  );
}
