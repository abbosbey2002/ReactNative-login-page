import React from 'react'
import { View, StyleSheet, Text } from 'react-native-web'

export default function Card() {
  return (
   <View style={styles.container}>
    <Text style={styles.Text}>my text</Text>
    {false ? <Text>hello</Text> : <Text>bye</Text>}
    </View>
  )

  

}

const styles=StyleSheet.create({
    container:{
        width: "20rem",
        backgroundColor: "#fff",
        margin: "1rem"
    },
    Text:{
        color: "red"
    }
})