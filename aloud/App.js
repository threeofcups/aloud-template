import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import proData  from './src/sampleProData';
import collData  from './src/sampleCollData';
import recData  from './src/sampleRecData';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = { 
    'proInfo': proData[1].username,
    'proName': proData[1].name_display,
    'proPic': proData[1].url_image,
    'proBio': proData[1].bio,

 };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>aloud</Text>
    <Text style={styles.instructions}>{this.state['proInfo']}'s Profile</Text>
        <Text>@{this.state['proName']}</Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: this.state['proPic']}}
        />
        <Text>Bio: {this.state['proBio']}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 50, height: 50
  }
});
