import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {styles} from './styles/global';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoryScreen  from './screens/HistoryScreen';
import ScanScreen  from './screens/ScanScreen';
import RecosScreen from './screens/RecosScreen';
import SyntheseScreen from './screens/SyntheseScreen';
import SearchScreen from './screens/SearchScreen';

export default function App() {

  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Historique" component={HistoryScreen} options={{tabBarIcon: ()=> <Ionicons name='md-home' size={22}/>}}/>
        <Tab.Screen name="Recos" component={RecosScreen} options={{tabBarIcon: ()=> <Ionicons name='ios-checkmark-circle' size={22}/>}}/>
        <Tab.Screen name="Scan" component={ScanScreen} options={{tabBarIcon: ()=> <Ionicons name='md-qr-scanner' size={22}/>}}/>
        <Tab.Screen name="Synthese" component={SyntheseScreen} options={{tabBarIcon: ()=> <Ionicons name='ios-book' size={22}/>}}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon: ()=> <Ionicons name='md-search' size={22}/>}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
