import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default class HornbillIntro extends Component {
  constructor(props) {
    super(props);    
    this.state = {
        userData: {},
    };
  }
  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
        <ImageBackground
          source={require("../../../assets/bg_2.jpg")}
          style={{ height: "100%", width: "100%"}}
        >
          <View style={{height: "100%", width: "100%", backgroundColor: 'rgba(0, 0, 0, 0.35)',}}>
            <View style={{ paddingTop: "12%", paddingHorizontal: "5%" }}>
              <Text style={{ marginTop: "7%", color: "#fff", fontSize: 68, fontFamily: "Lato-Bold", lineHeight: 77 }}>Hornbill Fesitval Nagaland.</Text>
              <Text style={{ color: "#fff", fontSize: 20, fontFamily: "Lato-Bold", marginTop: 10 }}> Music · Cultural · Heritage</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Hornbill Home")} style={{ width: "90%", marginHorizontal:"5%", backgroundColor: "#fff", padding: 17, borderRadius: 100, position:"absolute", bottom: 100 }}>
              <Text style={{ color: "#20b08d", textAlign: "center", fontSize: 16, fontFamily: "Lato-Bold" }}>Continue</Text>
            </TouchableOpacity>
          </View>
          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
