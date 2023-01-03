import React from 'react';

import { NavigationContainer, RouteProp } from '@react-navigation/native';

import { useAuth } from 'hooks/auth';

import { AppStackParamList } from './app.stack.routes';
import { AppTabRootStackParamList, AppTabRoutes } from './app.tab.routes';
import { AuthRootStackParamList, AuthRoutes } from './auth.routes';

import { LoadAnimation } from 'components/LoadAnimation';

export type RoutesParams = AuthRootStackParamList &
  AppStackParamList &
  AppTabRootStackParamList;

export type RootRouteProps<RouteName extends keyof RoutesParams> = RouteProp<
  RoutesParams,
  RouteName
>;

export function Routes() {
  const { user, isLoading } = useAuth();

  return isLoading ? (
    <LoadAnimation />
  ) : (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
