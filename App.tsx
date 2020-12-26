import React, { useState } from 'react';
import { isStyledComponent, ThemeProvider } from 'styled-components'
import {SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Text, StatusBar} from 'react-native'

import {useFonts} from 'expo-font'
import { theme } from './src/utils/themes';
import Router from './src/screens/Router';
import ThirdScreen from './src/screens/ThirdScreen';
import Onboard from './src/screens/Onboard'



export default function App() {

  const [showOnboard, setShowOnboard] = useState(true)

  const handleOnboardFinish = () => {
    setShowOnboard(false)
  }

  const [loaded] = useFonts({
    NunitoSemiBold: require('./src/assets/fonts/Nunito-SemiBold.ttf'),
    NunitoBold: require('./src/assets/fonts/Nunito-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  
  return (
    
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <>
      {showOnboard && <Onboard handleDone={handleOnboardFinish}/>}
      {!showOnboard && <Router/>}
      </>
    </ThemeProvider>
  </SafeAreaProvider>
  );
}



