import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { CarDTO } from 'dtos/CarDTO';
import { ConfirmationDTO } from 'dtos/ConfirmationDTO';

import { CarDetails } from 'screens/CarDetails';
import { Confirmation } from 'screens/Confirmation';
import { Home } from 'screens/Home';
import { MyCars } from 'screens/MyCars';
import { Scheduling } from 'screens/Scheduling';
import { SchedulingDetails } from 'screens/SchedulingDetails';

export type AppStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  MyCars: undefined;
  Confirmation: ConfirmationDTO;
};

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
