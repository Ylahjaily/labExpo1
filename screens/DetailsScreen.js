import { StatusBar } from 'expo-status-bar';
import React, {setState} from 'react';
import {Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { styles } from '../styles/DetailsScreen';
import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = '@save_product';

class DetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount(){
    if (this.props.route.params?.id) {
      
      const query =this.props.route.params.id
      fetch(`https://world.openfoodfacts.org/api/v0/product/${query}.json`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.saveData(jsonResponse.product)
        this.setState({ data : jsonResponse.product})
      })
    }
  };

  saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
      const oldData = await AsyncStorage.getItem(STORAGE_KEY)
      if(oldData !== null){
        await AsyncStorage.mergeItem(STORAGE_KEY, jsonValue)
        const newData = await AsyncStorage.getItem(STORAGE_KEY)
        console.log(newData)
      }
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  render(){
    const { data } = this.state;
    return (
      <View styles={styles.container} >
      <Text>{data.product_name_fr}</Text>
        <View styles = {styles.imageContainer}>
          <Image
          source={{
          uri: data.image_front_small_url
            }}
          style={styles.image}
          />
        </View>
          <Text>{data.brands}</Text>
          <Text>nutriment score {data.nutriscore_grade}</Text>
      </View>
    );
  }
 
}

export default DetailsScreen;