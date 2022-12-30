import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { Calendar } from 'components/Calendar';

import { useTheme } from 'styled-components/native';

import Arrow from 'assets/arrow.svg';

import * as S from './styles';

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <S.Header>
        <BackButton
          color={theme.colors.shape}
          onPress={() => navigation.goBack()}
        />

        <S.Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue selected={false}>18</S.DateValue>
          </S.DateInfo>

          <Arrow />

          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue selected={false}>18</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate('SchedulingDetails' as never)}
        />
      </S.Footer>
    </S.Container>
  );
}
