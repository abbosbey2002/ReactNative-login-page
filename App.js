import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Platform, PlatformColor } from 'react-native';
import { TextInput } from 'react-native-web';
import './style.css'

export default function App() {

  return (
    <View style={styles.container}>
      <Text>{Platform.OS}</Text>
    <View style={styles.box}>
      <Text style={styles.login}>Login</Text>
      <label>Email</label>
      <TextInput style={styles.input} />
      <label>Password</label>
      <TextInput style={styles.input} />
      <Text style={styles.forget}>Forget password</Text>
      <Button color="#28aeba" title='submit' />
      <Text style={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laboriosam</Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28aeba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center"
  },
  Text:{
    color: "green",
    fontSize: "15px",
    backgroundColor: "white",
    padding: "10px"
  },
  box:{
    width: '20rem',
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px"
  },
  input:{
    backgroundColor: "white",
    borderColor: 'gainsboro',
    borderWidth: "2px",
    marginBottom: "10px",
    padding: "4px"
  },
  desc:{
    letterSpacing: '1px',
    fontSize: '14px',
    marginTop: "10px",
    lineHeight: "1.2"
  },
  forget:{
    margin: '5px',
    color: "#551a8b",
    
  }
  
});
