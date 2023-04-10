import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native-web'
import List from './List'
// import {data} from './data'
import { Platform } from 'react-native'
import {myImg} from '../img/my.png'

export default function TodoList() {
    const [Data, setData]=useState([])



    const [filter, setFilter]=useState(Data)
    const [loading, setLoading]=useState(false)
    let  componentMounted=true;
  
    useEffect(()=>{
      const getProducts=async ()=>{
        setLoading(true)
        const response=await fetch("https://fakestoreapi.com/products")
        console.log(response)
        if(componentMounted){
          setData(await response.clone().json())
          setFilter(await response.json())
          setLoading(false);
          console.log('product=',filter)
        }
        return ()=>{
          componentMounted=false;
        }
      }
     getProducts();
  
  
    }, []);
    componentMounted=true
   
        //  fetch("https://fakestoreapi.com/products")
        //   .then(response => response.json())
        //   .then(json => setMydata(json))
        //   .catch(error => {
        //     console.error(error);
        //   });
  


    
  return (
      <View style={styles.cont}>
        <Text style={styles.title} >Today's task</Text>
        <Text style={styles.title} >Your phone {Platform.OS}</Text>
        <img style={styles.img} alt='thi is image' src="https://imgd.aeplcdn.com/370x208/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-15.jpeg?isig=0&q=75" />
        <View>
            {Data.map((item, index)=>{
                console.log("item=", item)
                return <List key={index} title={item} />
            })}
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    cont: {
        backgroundColor: "#fff",
    },
    title:{
        fontSize: "20px",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "5px"
    },
    img: {
        width: '370',
        height: "280",
        border: '1px solid white',
        marginLeft: "10px"
    }
})