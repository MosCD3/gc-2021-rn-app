
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexBoxTry from './src/components/FlexBoxTry';
import PageHeader from './src/components/Header';
import MyTabs from './src/components/MyTabs';
import TextStyles from './src/components/TextStyles';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './src/components/LandingPage';
import SignUpPage from './src/components/SignUp';
import LoginPage from './src/components/LoginPage';
import WelcomePage from './src/components/WelcomePage';



export default function App() {
  return (
    <NavigationContainer>
      <LandingPage/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pageHeader:{
    flex:1
  },
  pageBody:{
    flex:2
  },
  pageFooter:{
    flex:1
  }
});
