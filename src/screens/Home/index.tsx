import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Car } from 'components/Car';
import { Load } from 'components/Load';

import Logo from 'assets/logo.svg';

import { CarDTO } from 'dtos/CarDTO';
import { api } from 'services/api';

import * as S from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get<CarDTO[]>('/cars');

        setCars(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      {isLoading ? (
        <Load />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car
              data={item}
              onPress={() => navigation.navigate('CarDetails', { car: item })}
            />
          )}
        />
      )}
    </S.Container>
  );
}
