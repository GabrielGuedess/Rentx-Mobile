import React, { useEffect, useState } from 'react';

import { useNavigation, useIsFocused } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';

import { Car as ModelCar } from 'database/models/Car';
import { format } from 'date-fns';
import { api } from 'services/api';

import { BackButton } from 'components/BackButton';
import { Car } from 'components/Car';
import { Load } from 'components/Load';

import { useTheme } from 'styled-components';

import * as S from './styles';
export interface CarProps {
  id: string;
  car: ModelCar;
  start_date: string;
  end_date: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { goBack } = useNavigation();
  const { colors } = useTheme();

  const screenIsFocused = useIsFocused();

  useEffect(() => {
    async function getCars() {
      try {
        const { data } = await api.get<CarProps[]>('rentals');

        setCars(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getCars();
  }, [screenIsFocused]);

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <S.Header>
        <BackButton color={colors.shape} onPress={() => goBack()} />

        <S.Title>Seus agendamentos, estão aqui.</S.Title>

        <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>
      </S.Header>

      {isLoading ? (
        <Load />
      ) : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
            <S.AppointmentsQuantity>
              {cars.map(item => item.car).length}
            </S.AppointmentsQuantity>
          </S.Appointments>

          <S.CarList
            data={cars}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <S.CarWrapper>
                <Car data={item.car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>
                      {format(new Date(item.start_date), 'dd/MM/yyyy')}
                    </S.CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>
                      {format(new Date(item.end_date), 'dd/MM/yyyy')}
                    </S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      )}
    </S.Container>
  );
}
