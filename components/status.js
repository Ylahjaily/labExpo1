import React from 'react';
import {Text, View } from 'react-native';
import { styles } from './../styles/status';

const selectStatus= (status) => {
    switch(status) {
    case 'a': 
        return (
            <View style = {styles.container}>
                <Text>Excellent</Text>
                <View style={styles.darkGreenIndicator}></View>
            </View>
        )
    case 'b': 
        return (
            <View style = {styles.container}>
                <View style={styles.lightGreenIndicator}></View>
                <Text>Bon</Text>
            </View>
        )
    case 'c': 
        return (
            <View style = {styles.container}>
                <View style={styles.OrangeIndicator}></View>
                <Text>Mediocre</Text>
            </View>
        )
    case 'd': 
        return (
            <View style = {styles.container}>
                <View style={styles.RedIndicator}></View>
                <Text>Mauvais</Text>
            </View>
        )
    case 'e': 
        return (
            <View style = {styles.container}>
                <Text>Très Mauvais</Text>
            </View>
        )           
    }
}

const Status = ({status}) => (
    !!status && 
      selectStatus(status)
)

export default Status