import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CarDTO } from 'dtos/CarDTO';
import { ConfirmationDTO } from 'dtos/ConfirmationDTO';
import { FirstStepDTO } from 'dtos/FirstStepDTO';

import { CarDetails } from 'screens/CarDetails';
import { Confirmation } from 'screens/Confirmation';
import { Home } from 'screens/Home';
import { MyCars } from 'screens/MyCars';
import { Scheduling } from 'screens/Scheduling';
import { SchedulingDetails } from 'screens/SchedulingDetails';
import { SignIn } from 'screens/SignIn';
import { SignUpFirstStep } from 'screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from 'screens/SignUp/SignUpSecondStep';

export type RootStackParamList = {
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: { user: FirstStepDTO };
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  MyCars: undefined;
  Confirmation: ConfirmationDTO;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
