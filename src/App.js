import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { StyleSheet, Text, View } from 'react-native';
import NavigationPage from "./layout/Navigation"
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <NavigationPage/>
      </NavigationContainer>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
