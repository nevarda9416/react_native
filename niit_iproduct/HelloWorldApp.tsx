import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
type GreetingProps = {
  name: string;
};
const styles = StyleSheet.create({
  center: {
    color: '#4630EB'
  }
});
const Greeting = (props: GreetingProps) => {
  return (
    <View>
      <Text style={styles.center}>Hello {props.name}!</Text>
    </View>
  )
};
const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Greeting name='Rexxar'/>
        <Greeting name='Jaina'/>
        <Greeting name='Valeera'/>
      <Text style={{color:'#F00F00'}}>Hello Tú!</Text>
    </View>
  );
};
export default HelloWorldApp;