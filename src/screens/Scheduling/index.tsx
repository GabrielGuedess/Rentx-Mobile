import React, { useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { addDays, format } from 'date-fns';

import { RootRouteProps } from 'routes/stack.routes';

import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { Calendar, DayProps, MarkedDatesProps } from 'components/Calendar';
import { generateInterval } from 'components/Calendar/generateInterval';

import { useTheme } from 'styled-components/native';

import Arrow from 'assets/arrow.svg';

import * as S from './styles';

interface RentalPeriod {
  start: string;
  end: string;
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps,
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

  const theme = useTheme();
  const navigation = useNavigation();
  const {
    params: { car },
  } = useRoute<RootRouteProps<'Scheduling'>>();

  function handleConfirmRental() {
    if (!rentalPeriod.start || !rentalPeriod.end) {
      Alert.alert('Selecione o intervalo para alugar.');
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }

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

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: format(addDays(new Date(firstDate), 1), 'dd/MM/yyyy'),
      end: format(addDays(new Date(endDate), 1), 'dd/MM/yyyy'),
    });
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
            <S.DateValue selected={!!rentalPeriod.start}>
              {rentalPeriod.start}
            </S.DateValue>
          </S.DateInfo>

          <Arrow />

          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.end}>
              {rentalPeriod.end}
            </S.DateValue>
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
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  );
}
