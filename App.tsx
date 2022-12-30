import React, { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { SchedulingComplete } from 'screens/SchedulingComplete';

import { ThemeProvider } from 'styled-components/native';

import theme from 'styles/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Archivo_400Regular,
          Archivo_500Medium,
          Archivo_600SemiBold,
          Inter_400Regular,
          Inter_500Medium,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <SchedulingComplete />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
