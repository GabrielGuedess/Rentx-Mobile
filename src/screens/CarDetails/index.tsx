import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Accessory } from 'components/Accessory';
import { BackButton } from 'components/BackButton';
import { Button } from 'components/Button';
import { ImageSlider } from 'components/ImageSlider';

import Acceleration from 'assets/acceleration.svg';
import Exchange from 'assets/exchange.svg';
import Force from 'assets/force.svg';
import Gasoline from 'assets/gasoline.svg';
import People from 'assets/people.svg';
import Speed from 'assets/speed.svg';

import * as S from './styles';

export function CarDetails() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => navigation.goBack()} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          imagesUrl={[
            'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
          ]}
        />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 580</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          <Accessory name="380Km/h" icon={Speed} />
          <Accessory name="3.2s" icon={Acceleration} />
          <Accessory name="800 HP" icon={Force} />
          <Accessory name="Gasolina" icon={Gasoline} />
          <Accessory name="Auto" icon={Exchange} />
          <Accessory name="2 Pessoas" icon={People} />
        </S.Accessories>

        <S.About>
          Este é automóvel desportivo. Surgiu do lendário touro de lideindultado
          na praça Real Maestranza de Sevilla. É um belíssimo carro para quem
          gosta de acelerar.
        </S.About>
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling' as never)}
        />
      </S.Footer>
    </S.Container>
  );
}
