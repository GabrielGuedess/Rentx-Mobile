import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { PasswordInput } from 'components/PasswordInput';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <S.Container>
      <StatusBar style="dark" backgroundColor="transparent" />

      <S.Header>
        <S.Title>
          Estamos {'\n'}
          quase lá.
        </S.Title>
        <S.SubTitle>
          Faça seu login para começar {'\n'}
          uma experiência incrível.
        </S.SubTitle>
      </S.Header>

      <S.Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoComplete="off"
          autoCapitalize="none"
        />
        <PasswordInput
          iconName="lock"
          placeholder="Senha"
          autoComplete="off"
          autoCapitalize="none"
        />
      </S.Form>

      <S.Footer>
        <Button title="Login" onPress={() => navigation.navigate('Home')} />

        <Button
          light
          title="Criar conta gratuita"
          color={theme.colors.backgroundSecondary}
        />
      </S.Footer>
    </S.Container>
  );
}