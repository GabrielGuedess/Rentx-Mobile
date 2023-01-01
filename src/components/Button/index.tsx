import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';

import * as S from './styles';

export interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  light?: boolean;
  isLoading?: boolean;
}

export function Button({
  title,
  color,
  enabled = true,
  light = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  return (
    <S.Container
      color={color}
      enabled={isLoading ? false : enabled}
      style={{ opacity: enabled && !isLoading ? 1 : 0.5 }}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.shape} size={23} />
      ) : (
        <S.Title light={light}>{title}</S.Title>
      )}
    </S.Container>
  );
}
