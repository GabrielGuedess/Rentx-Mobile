import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Feather } from '@expo/vector-icons';

import { useAuth } from 'hooks/auth';

import { BackButton } from 'components/BackButton';
import { Input } from 'components/Input';
import { PasswordInput } from 'components/PasswordInput';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function Profile() {
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const { colors } = useTheme();
  const { goBack } = useNavigation();

  const { user } = useAuth();

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar style="light" backgroundColor="transparent" />

          <S.Header>
            <S.HeaderTop>
              <BackButton color={colors.shape} onPress={() => goBack()} />
              <S.HeaderTitle>Editar Perfil</S.HeaderTitle>
              <S.LogoutButton onPress={() => ({})}>
                <Feather name="power" size={24} color={colors.shape} />
              </S.LogoutButton>
            </S.HeaderTop>

            <S.PhotoContainer>
              <S.Photo
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/64827875?v=4',
                }}
              />

              <S.PhotoButton onPress={() => ({})}>
                <Feather name="camera" size={24} color={colors.shape} />
              </S.PhotoButton>
            </S.PhotoContainer>
          </S.Header>

          <S.Content
            style={{
              marginBottom: useBottomTabBarHeight(),
            }}
          >
            <S.Options>
              <S.Option
                isActive={option === 'dataEdit'}
                onPress={() => setOption('dataEdit')}
              >
                <S.OptionTitle isActive={option === 'dataEdit'}>
                  Dados
                </S.OptionTitle>
              </S.Option>

              <S.Option
                isActive={option === 'passwordEdit'}
                onPress={() => setOption('passwordEdit')}
              >
                <S.OptionTitle isActive={option === 'passwordEdit'}>
                  Trocar senha
                </S.OptionTitle>
              </S.Option>
            </S.Options>
            {option === 'dataEdit' ? (
              <S.Sections>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCapitalize="words"
                  autoCorrect={false}
                  defaultValue={user.name}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue={user.email}
                />
                <Input
                  iconName="credit-card"
                  placeholder="CHN"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                />
              </S.Sections>
            ) : (
              <S.Sections>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <PasswordInput iconName="lock" placeholder="Nova senha" />
                <PasswordInput iconName="lock" placeholder="Repetir senha" />
              </S.Sections>
            )}
          </S.Content>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
