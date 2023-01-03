import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStackRoutes } from './app.stack.routes';

import { MyCars } from 'screens/MyCars';
import { Profile } from 'screens/Profile';

import { useTheme } from 'styled-components';

import Car from 'assets/car.svg';
import Home from 'assets/home.svg';
import People from 'assets/people.svg';

export type AppTabRootStackParamList = {
  AppStackRoutes: undefined;
  Profile: undefined;
  MyCars: undefined;
};

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabRootStackParamList>();

export function AppTabRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.textDetail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: colors.backgroundPrimary,
        },
      }}
    >
      <Screen
        name="AppStackRoutes"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <Home width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <Car width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <People width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
