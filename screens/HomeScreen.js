import React, { useState, useEffect } from 'react';
import {Text, View,  FlatList } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';

import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();
const STORAGE_KEY = '@save_product';

import  Item  from './../components/Item'

class  HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  setData(value){
    this.setState(
      ()  => {
        let data = [...this.state.data, value];
        return {
          data,
          isLoaded: true
        }
      }
    )
  }

  readData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
      if (jsonValue !== null) {
        this.setData(JSON.parse(jsonValue))
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  componentDidMount() {
    this.readData();
  }

  render () {
  const renderItem = ({item}) => (<Item item={item} navigate={this.props.navigation.navigate}/>);
  return(
    this.state.isLoaded  === false ? (
      <View><Text>Loading...</Text></View> )
      : 
     (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Stack.Navigator>
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </View>
    )
  )
  
  }
}

export default HomeScreen;
