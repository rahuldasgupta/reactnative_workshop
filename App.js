import React, { useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {initializeApp} from 'firebase/app';
import { collection, query, where, getDocs, getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmZ9odbp_CfRWHs4bETrVmgHyAo1VCdd0",
  authDomain: "dyrs-nagaland.firebaseapp.com",
  projectId: "dyrs-nagaland",
  storageBucket: "dyrs-nagaland.appspot.com",
  messagingSenderId: "479154911562",
  appId: "1:479154911562:web:16f629fe05b97634c729b3"
};

export default function App() {
  const [firebaseData, setFirebaseData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async() => {
    let arr = [] // [{.....}, {....}, {....}]
    let obj = {}

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const q = query(collection(db, "hotels"));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      obj=doc.data();
      arr.push(obj)
    });
    setFirebaseData(arr);
  }
  
  return (
    <View style={{paddingTop:"12%"}}>
      <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
      {
        firebaseData.map((data, index) => 
          <ImageBackground source={{uri: data.image}} style={{height: 200, width:"97%", marginLeft:"2.5%", marginBottom: 15}} imageStyle={{borderRadius: 10, }} resizeMode="cover">
            <View style={{backgroundColor:"rgba(0, 0, 0, 0.7)", width:"97%", position:"absolute", bottom: 0, paddingHorizontal: 15, paddingVertical: 13, borderBottomLeftRadius  : 10, borderBottomRightRadius: 10}}>
              <Text style={{color:"#fff", fontSize: 24, fontWeight:"bold"}}>{data.hotel_name}</Text>
              <Text style={{color:"#fff", fontSize: 16, fontWeight:"500"}}>₹{data.price} <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{data.mrp}</Text></Text>
            </View>
          </ImageBackground>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
