import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native-web'

export default function List(props) {
  return (
    <View>
        <View>
        <img style={styles.img} src={props.title.image} alt={props.title.title} />
        </View>
    <View style={styles.container}> 
        <Text style={styles.listItem}>{props.title.title}</Text> 
        <Text>${props.title.price}</Text>
        <View style={styles.listBtn}>Done</View> 
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        border: "1px solid white",
        flex: "1",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "10px",
        marginLeft: "10px",
        marginBottom: "10px",
        marginRight: "10px"
    },
    listItem:{
        fontSize: 24,
        marginTop: "10px",
        marginLeft: "10px",
        marginBottom: "10px"

    },
    listBtn:{
        display:"inline-block",
        with: "20%",
        backgroundColor: "smoke",
    },
    img: {
        width: '350px',
        height: "250px",
        border: '1px solid white',
        padding: "10px"
    }
})