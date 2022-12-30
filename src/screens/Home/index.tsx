import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Car } from 'components/Car';

import Logo from 'assets/logo.svg';

import { mockCars } from './mock';

import * as S from './styles';

export function Home() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <S.CarList
        data={mockCars}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Car
            {...item}
            onPress={() => navigation.navigate('CarDetails' as never)}
          />
        )}
      />
    </S.Container>
  );
}
