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
      console.log(obj);
      arr.push(obj)
    });
    setFirebaseData(arr);
    console.log(firebaseData)
  }
  
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
      {
        firebaseData.map((data, index) => 
          <Text style={{marginTop: 20}}>Hotel Name {data.hotel_name}</Text>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
