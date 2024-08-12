import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default class AppIntro extends Component {
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
          source={require("../../assets/bg.jpg")}
          style={{ height: "100%", width: "100%"}}
        >
          <View style={{height: "100%", width: "100%", backgroundColor: 'rgba(0, 0, 0, 0.4)',}}>
            <View style={{ paddingTop: "12%", paddingHorizontal: "5%" }}>
              <TouchableOpacity style={{ borderWidth: 1, marginLeft: "80%", backgroundColor: "#000", borderRadius: 50, padding: 8, width: 63 }}>
                <Text style={{ textAlign: "center", color: "#fff" }}>Skip</Text>
              </TouchableOpacity>
              <Text style={{ marginTop: "7%", color: "#fff", fontSize: 68, fontFamily: "Lato-Bold", lineHeight: 77 }}>Explore Nagaland with us.</Text>
              <Text style={{ color: "#fff", fontSize: 20, fontFamily: "Lato-Bold", marginTop: 10 }}> Stays · Concerts · Trips · Events</Text>
            </View>
            <View style={{ backgroundColor: "#fff", position: "absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15, width: "100%", paddingHorizontal: 35, paddingVertical: 30 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Tabs")} style={{ width: "100%", backgroundColor: "#20b08d", padding: 20, borderRadius: 15 }}>
                <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, fontFamily: "Lato-Bold" }}>Get Started {"  "}<FontAwesome6 name="arrow-right-long" size={17} color="#fff" /></Text>
              </TouchableOpacity>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Text style={{ marginTop: 15, textAlign: "center", fontFamily: "Lato-Regular", marginRight: 5, color:"#03314b" }}>already have account?</Text>
                <TouchableOpacity style={{ marginTop: 15 }}><Text style={{ color: "#20b08d", fontFamily: "Lato-Regular" }}>Login</Text></TouchableOpacity>
              </View>
            </View>
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
