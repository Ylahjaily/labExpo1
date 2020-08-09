
import React, { useNavigation } from 'react';
import {Text, View , Image, TouchableWithoutFeedback} from 'react-native';
import { styles } from './../styles/Item';

import Status from './status';

const Item = ({item, navigate}) => (
  <TouchableWithoutFeedback onPress={()=> 
    {
        navigate('Details', {
        id: item.id,
        otherParam: 'anything you want here',
      })
      
     console.warn(item)
  }}>
      <View style={styles.item}>
        <View style={styles.itemContainer}>
          <Image
            source={{
            uri: item.image_front_small_url
              }}
            style={styles.image}
            />

        </View>
        <View style={styles.infosContainer}>
          <Text>{item.product_name_fr}</Text>
          <Text>{item.brands}</Text>
          <Text>{item.energy_value}</Text>
          <Status status = {item.nutriscore_grade}></Status>
        </View>
      </View>
    </TouchableWithoutFeedback>
)

export default Item