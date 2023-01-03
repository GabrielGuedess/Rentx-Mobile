import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { addDays, format } from 'date-fns';
import { CarDTO } from 'dtos/CarDTO';
import { api } from 'services/api';
import { getAccessoryIcon } from 'utils/getAccessoryIcon';

import { RootRouteProps } from 'routes';

import { Accessory } from 'components/Accessory';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ImageSlider } from 'components/ImageSlider';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function SchedulingDetails() {
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);
  const [isLoading, setIsLoading] = useState(false);

  const { navigate, goBack } = useNavigation();
  const { isConnected } = useNetInfo();
  const { colors } = useTheme();

  const {
    params: { car, dates },
  } = useRoute<RootRouteProps<'SchedulingDetails'>>();

  async function handleConfirmRental() {
    setIsLoading(true);

    await api
      .post('/rentals', {
        user_id: 1,
        car_id: car.id,
        start_date: new Date(dates[0]),
        end_date: new Date(dates[dates.length - 1]),
        total: car.price * dates.length,
      })
      .then(() =>
        navigate('Confirmation', {
          title: 'Carro alugado!',
          message: `Agora você só precisa ir \n até a concessionária da RENTX \n pegar o seu automóvel.`,
          nextScreenRoute: 'Home',
        }),
      )
      .catch(() => {
        Alert.alert('Não foi possível confirmar o agendamento');
        setIsLoading(false);
      });
  }

  useEffect(() => {
    async function fetchCarUpdated() {
      const { data } = await api.get(`/cars/${car.id}`);

      setCarUpdated(data);
    }

    if (isConnected === true) {
      fetchCarUpdated();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => goBack()} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          imagesUrl={
            !!carUpdated.photos
              ? carUpdated.photos
              : [{ id: car.thumbnail, photo: car.thumbnail }]
          }
        />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.period}</S.Period>
            <S.Price>R$ {car.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {carUpdated.accessories && (
            <S.Accessories>
              {carUpdated.accessories.map(accessory => (
                <Accessory
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)}
                />
              ))}
            </S.Accessories>
          )}
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>
              {format(addDays(new Date(dates[0]), 1), 'dd/MM/yyyy')}
            </S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue>
              {format(
                addDays(new Date(dates[dates.length - 1]), 1),
                'dd/MM/yyyy',
              )}
            </S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>Total</S.RentalPriceLabel>

          <S.RentalPriceDetails>
            <S.RentalPriceQuota>
              R$ {car.price} x{dates.length} diárias
            </S.RentalPriceQuota>
            <S.RentalPriceTotal>
              R$ {car.price * dates.length}
            </S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title="Alugar agora"
          isLoading={isLoading}
          color={colors.success}
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  );
}
