import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from 'database';
import { Car as ModelCar } from 'database/models/Car';
import { api } from 'services/api';

import { Car } from 'components/Car';
import { LoadAnimation } from 'components/LoadAnimation';

import Logo from 'assets/logo.svg';

import * as S from './styles';

export function Home() {
  const [cars, setCars] = useState<ModelCar[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { isConnected } = useNetInfo();
  const { navigate } = useNavigation();

  async function offlineSynchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api.get(
          `cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`,
        );

        const { changes, latestVersion } = response.data;

        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;
        if (user) {
          await api.post('/users/sync', user);
        }
      },
    });

    await fetchCars();
  }

  async function fetchCars() {
    try {
      const carCollection = database.get<ModelCar>('cars');
      const cars = await carCollection.query().fetch();

      setCars(cars);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      fetchCars();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (isConnected === true) {
      offlineSynchronize();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <S.Container>
      <StatusBar style="light" backgroundColor="transparent" />

      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total {cars.length} carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      {isLoading ? (
        <LoadAnimation />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car
              data={item}
              onPress={() => navigate('CarDetails', { car: item })}
            />
          )}
        />
      )}
    </S.Container>
  );
}
