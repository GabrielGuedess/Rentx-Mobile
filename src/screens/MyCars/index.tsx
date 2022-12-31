import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { AntDesign } from '@expo/vector-icons';

import { CarDTO } from 'dtos/CarDTO';
import { api } from 'services/api';

import { BackButton } from 'components/BackButton';
import { Car } from 'components/Car';
import { Load } from 'components/Load';

import { useTheme } from 'styled-components';

import * as S from './styles';

export interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    async function getCars() {
      try {
        const response = await api.get<CarProps[]>(
          'schedules_byuser?user_id=1',
        );

        setCars(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getCars();
  }, []);

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <S.Header>
        <BackButton
          color={theme.colors.shape}
          onPress={() => navigation.goBack()}
        />

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
                    <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
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
