import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Platform, PlatformColor } from 'react-native';
import { TextInput } from 'react-native-web';
import './style.css'
import Card from './component/Card';
import Login from './component/Login';
import TodoList from './component/TodoList';

export default function App() {

  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#28aeba',
    backgroundColor: "#fff"
  }

});