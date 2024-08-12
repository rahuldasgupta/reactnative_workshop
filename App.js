import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';

//Pages
import splash from './src/pages/splash';
import appIntro from './src/pages/appIntro';

import Tabs from "./Tabs";

const AppLoad = createStackNavigator();

let customFonts = {
  'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFontsAsync();
  }, []);
    if (!fontsLoaded) {
      return null;
    }
    else{
      return (
        <NavigationContainer>
          <AppLoad.Navigator initialRouteName='Splash'>
            <AppLoad.Screen name="Splash" component={splash} options={{headerShown: false}}/>
            <AppLoad.Screen name="App Intro" component={appIntro} options={{headerShown: false}}/>
            <AppLoad.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
          </AppLoad.Navigator>
        </NavigationContainer>
      );
    }
    
  }


export default App
