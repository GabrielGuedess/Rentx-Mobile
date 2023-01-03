import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { useNetInfo } from '@react-native-community/netinfo';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';

import { Feather } from '@expo/vector-icons';

import * as Yup from 'yup';

import { useAuth } from 'hooks/auth';

import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { PasswordInput } from 'components/PasswordInput';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function Profile() {
  const { user, signOut, updateUser } = useAuth();

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');

  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const { colors } = useTheme();
  const { isConnected } = useNetInfo();
  const { goBack } = useNavigation();

  async function handleAvatarSelect() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    if (result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        driverLicense: Yup.string().required('CNH é obrigatório'),
      });

      const data = { name, driverLicense };

      await schema.validate(data);

      await updateUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar,
        token: user.token,
      });

      Alert.alert('Perfil atualizado!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Não foi possível atualizar o perfil');
      }
    }
  }

  async function handleSignOut() {
    Alert.alert(
      'Ter certeza?',
      'Se vc sair, irá precisar de internet para se conectar-se novamente.',
      [
        {
          text: 'Cancelar',
          onPress: () => ({}),
        },
        {
          text: 'Sair',
          onPress: () => signOut(),
        },
      ],
    );
  }

  function handleOption(option: 'dataEdit' | 'passwordEdit') {
    if (isConnected === false && option === 'passwordEdit') {
      Alert.alert(
        'Você está Offline',
        'Para mudar a senha, conecte-se a Internet',
      );
    } else {
      setOption(option);
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar style="light" backgroundColor="transparent" />

          <S.Header>
            <S.HeaderTop>
              <BackButton color={colors.shape} onPress={() => goBack()} />

              <S.HeaderTitle>Editar Perfil</S.HeaderTitle>

              <S.LogoutButton onPress={handleSignOut}>
                <Feather name="power" size={24} color={colors.shape} />
              </S.LogoutButton>
            </S.HeaderTop>

            <S.PhotoContainer>
              {avatar && <S.Photo source={{ uri: avatar }} />}

              <S.PhotoButton onPress={handleAvatarSelect}>
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
                onPress={() => handleOption('dataEdit')}
              >
                <S.OptionTitle isActive={option === 'dataEdit'}>
                  Dados
                </S.OptionTitle>
              </S.Option>

              <S.Option
                isActive={option === 'passwordEdit'}
                onPress={() => handleOption('passwordEdit')}
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
                  onChangeText={setName}
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
                  onChangeText={setDriverLicense}
                />
              </S.Sections>
            ) : (
              <S.Sections>
                <PasswordInput iconName="lock" placeholder="Senha atual" />
                <PasswordInput iconName="lock" placeholder="Nova senha" />
                <PasswordInput iconName="lock" placeholder="Repetir senha" />
              </S.Sections>
            )}

            <Button title="Salver alterações" onPress={handleProfileUpdate} />
          </S.Content>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
