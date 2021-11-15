
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexBoxTry from './src/components/FlexBoxTry';
import PageHeader from './src/components/Header';
import MyTabs from './src/components/MyTabs';
import TextStyles from './src/components/TextStyles';
import { NavigationContainer } from '@react-navigation/native';
import SignUpPage from './src/screens/SignUp';
import LoginPage from './src/screens/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LnadingPageMain from './src/navigation/LandingPage';
import AfterLoginPage from './src/navigation/AfterLoginPage';


const MainStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
            initialRouteName="Landing"
            screenOptions={{
              headerShown:false
            }}>
            <MainStack.Screen name="Landing" component={LnadingPageMain}/>
            <MainStack.Screen name="SignUp" component={SignUpPage} options={{
                title:"Create Account"
            }}/>
            <MainStack.Screen name="Login" component={LoginPage}/>
            <MainStack.Screen name="AfterLogin" component={AfterLoginPage}/>
        </MainStack.Navigator>
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
