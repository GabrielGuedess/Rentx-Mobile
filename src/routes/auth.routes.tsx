import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ConfirmationDTO } from 'dtos/ConfirmationDTO';
import { FirstStepDTO } from 'dtos/FirstStepDTO';

import { Confirmation } from 'screens/Confirmation';
import { SignIn } from 'screens/SignIn';
import { SignUpFirstStep } from 'screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from 'screens/SignUp/SignUpSecondStep';
import { Splash } from 'screens/Splash';

export type AuthRootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: { user: FirstStepDTO };
  Confirmation: ConfirmationDTO;
};

const { Navigator, Screen } = createStackNavigator<AuthRootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
