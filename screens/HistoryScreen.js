import React from 'react';
import {Text, View, FlatList, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { styles } from './../styles/global'

import  Item  from './../components/Item'
import  Loading  from './../components/loading'

import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

class HistoryScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoading: false,
      data: []
    };
  }
  
  render(){
    const { isLoading, data } = this.state;
    const renderItem = ({item}) => (<Item item={item}/>);
    const { navigate } = this.props.navigation;

    return (
      <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </>  
    );
  }
}

export default HistoryScreen;