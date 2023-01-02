import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { api } from 'services/api';

import { RootRouteProps } from 'routes';

import { BackButton } from 'components/BackButton';
import { Bullet } from 'components/Bullet';
import { Button } from 'components/Button';
import { PasswordInput } from 'components/PasswordInput';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { navigate, goBack } = useNavigation();
  const { colors } = useTheme();

  const {
    params: { user },
  } = useRoute<RootRouteProps<'SignUpSecondStep'>>();

  async function handleRegister() {
    if (!password || !confirmPassword) {
      return Alert.alert('Informe a senha e confirmação dela');
    }

    if (password != confirmPassword) {
      return Alert.alert('As senhas não são iguais');
    }

    await api
      .post('/users', {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      .then(() => {
        navigate('Confirmation', {
          title: 'Conta criada!',
          message: `Agora é só fazer login \n e aproveitar`,
          nextScreenRoute: 'SignIn',
        });
      })
      .catch(() => Alert.alert('Opa', 'Não foi possível cadastrar'));
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton onPress={() => goBack()} />

            <S.Steps>
              <Bullet />
              <Bullet active />
            </S.Steps>
          </S.Header>

          <S.Title>
            Crie sua {'\n'}
            conta
          </S.Title>
          <S.SubTitle>
            Faça seu cadastro de {'\n'}
            forma rápida e fácil
          </S.SubTitle>

          <S.Form>
            <S.FormTitle>2. Senha</S.FormTitle>

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              autoComplete="off"
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"
              autoComplete="off"
              autoCapitalize="none"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </S.Form>

          <Button
            title="Cadastrar"
            color={colors.success}
            onPress={handleRegister}
          />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
