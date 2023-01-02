import React from 'react';
import { useWindowDimensions } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { RootRouteProps } from 'routes';

import { ConfirmButton } from 'components/ConfirmButton';

import Done from 'assets/done.svg';
import Logo from 'assets/logo_background_gray.svg';

import * as S from './styles';

export function Confirmation() {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  const { params } = useRoute<RootRouteProps<'Confirmation'>>();

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <Logo width={width} />

      <S.Content>
        <Done width={80} height={80} />
        <S.Title>{params.title}</S.Title>

        <S.Message>{params.message}</S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton
          title="OK"
          onPress={() => navigate(params.nextScreenRoute as never)}
        />
      </S.Footer>
    </S.Container>
  );
}
