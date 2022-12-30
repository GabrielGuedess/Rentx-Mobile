import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { Calendar, DayProps, MarkedDatesProps } from 'components/Calendar';
import { generateInterval } from 'components/Calendar/generateInterval';

import { useTheme } from 'styled-components/native';

import Arrow from 'assets/arrow.svg';

import * as S from './styles';

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps,
  );

  const theme = useTheme();
  const navigation = useNavigation();

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);

    setMarkedDates(interval);
  }

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
        <Calendar
          markedDatesProps={markedDates}
          onDayPress={handleChangeDate}
        />
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
