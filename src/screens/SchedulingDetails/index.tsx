import React, { useState } from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import { addDays, format } from 'date-fns';
import { SchedulesDTO } from 'dtos/SchedulesDTO';
import { api } from 'services/api';
import { getAccessoryIcon } from 'utils/getAccessoryIcon';

import { RootRouteProps } from 'routes/stack.routes';

import { Accessory } from 'components/Accessory';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ImageSlider } from 'components/ImageSlider';

import { useTheme } from 'styled-components';

import * as S from './styles';

export function SchedulingDetails() {
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const {
    params: { car, dates },
  } = useRoute<RootRouteProps<'SchedulingDetails'>>();

  async function handleConfirmRental() {
    setIsLoading(true);

    const schedulesByCar = await api.get<SchedulesDTO>(
      `/schedules_bycars/${car.id}`,
    );

    const unavailableDates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('/schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(addDays(new Date(dates[0]), 1), 'dd/MM/yyyy'),
      endDate: format(
        addDays(new Date(dates[dates.length - 1]), 1),
        'dd/MM/yyyy',
      ),
    });

    api
      .put<null, null, SchedulesDTO>(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: unavailableDates,
      })
      .then(() =>
        navigation.navigate('Confirmation', {
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

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => navigation.goBack()} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
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
            color={theme.colors.text}
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
              R$ {car.rent.price} x{dates.length} diárias
            </S.RentalPriceQuota>
            <S.RentalPriceTotal>
              R$ {car.rent.price * dates.length}
            </S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title="Alugar agora"
          isLoading={isLoading}
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  );
}
