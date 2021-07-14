import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PageHeader from './src/components/Header';
import WelcomePage from './src/components/WelcomePage';

export default function App() {
  return (
    <View style = {styles.container}>
      <PageHeader/>
      <WelcomePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
