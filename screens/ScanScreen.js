import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, setState} from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


class ScanScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hasPermission: null,
      scanned: false,
      data: []
    };
  }

  componentDidMount(){
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      this.setState({hasPermission : 'granted'});
    })();
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({scanned: true});
    alert(`Product ${data} has been scanned!`);
    this.props.navigation.navigate('Details', {
      id: data,
      otherParam: 'anything you want here',
    })
  };


render(){

  const { hasPermission , scanned} = this.state;

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => this.setState({scanned: false})} />}
      
    </View>
  );
}
}

export default ScanScreen;