import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CarDTO } from 'dtos/CarDTO';

import { CarDetails } from 'screens/CarDetails';
import { Home } from 'screens/Home';
import { MyCars } from 'screens/MyCars';
import { Scheduling } from 'screens/Scheduling';
import { SchedulingComplete } from 'screens/SchedulingComplete';
import { SchedulingDetails } from 'screens/SchedulingDetails';
import { SignIn } from 'screens/SignIn';

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  SchedulingComplete: undefined;
  MyCars: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
