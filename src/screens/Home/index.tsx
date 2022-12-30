import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { StatusBar } from 'expo-status-bar';

import Logo from 'assets/logo.svg';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>
    </S.Container>
  );
}
