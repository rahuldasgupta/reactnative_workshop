import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Share } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome5, Feather, Fontisto  } from '@expo/vector-icons';
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from 'expo-status-bar';


const Account = ({ navigation }) => {

  const [userDetails, setUserDetails] = useState({});
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    const setTabStyles = async () => {
      NavigationBar.setBackgroundColorAsync("#f3f5f9");
      NavigationBar.setButtonStyleAsync("dark");
    };

    setTabStyles();

  }, [navigation]);

  const logOut = async() => {}
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#03314b"} style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingTop:"6%"}}>
          <View style={{backgroundColor:"#fff", borderRadius: 15, paddingLeft:"4%", paddingRight:"5%", paddingVertical:"3%", width:"90%", marginLeft:"5%", flexDirection:"row", alignItems:"center", shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2,}}>
            <Image source={require("../../../assets/user.png")} style={{height: 100, width: 100}} resizeMode="cover"/>
            <View style={{marginLeft: 15}}>
              <Text style={{color:"#222", fontFamily: "Lato-Bold", fontSize: 24}}>Rishav Sethi</Text>
              <View style={{padding: 5, paddingHorizontal: 10, paddingBottom: 3, borderWidth: 1, borderColor: "#20b08d", borderRadius: 10, backgroundColor: "#d3fff4", alignItems: "center",  marginTop: 8, marginBottom: 3}}>
                <Text style={{color: "#20b08d", fontFamily: "Poppins-Medium", fontSize: 13, textAlign:"center"}}>rishav@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: "6%", marginHorizontal:"5%"}}>
            <View style={{padding: 10, width: "47%", borderWidth: 1,  paddingLeft: 15, borderColor:"#e1ad01", borderRadius: 10, backgroundColor:"#FFFBC6"}}>
              <Text style={{color:"#e1ad01", fontFamily: "Poppins-Medium", fontSize: 28,}}>12,048</Text>
              <Text style={{color:"#e1ad01", fontFamily: "Lato-Bold", fontSize: 16, marginTop: -5}}>NagaHill{"\n"}Points</Text>
            </View>
            <View style={{width: "47%", borderWidth: 1, padding: 10, paddingLeft: 15, borderColor:"#20b08d", borderRadius: 10, backgroundColor:"#d3fff4"}}>
              <Text style={{color:"#20b08d", fontFamily: "Poppins-Medium", fontSize: 28,}}>#526</Text>
              <Text style={{color:"#20b08d", fontFamily: "Lato-Bold", fontSize: 16, marginTop: -5}}>Leaderboard{"\n"}Rank</Text>
            </View>
          </View>
          <View style={{backgroundColor:"#fff", borderRadius: 15, width:"90%", marginLeft:"5%", marginTop: "6%", marginBottom:"5%", shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2,}}>
            <TouchableOpacity
              style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"90%", marginLeft:"5%", marginRight:"5%", marginTop: 20 }}
            >
              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                <View style={{borderRadius: 10, backgroundColor:"#d3fff4", justifyContent:"center", alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                  <FontAwesome5 name="user" color={"#20b08d"} size={22}/>
                </View>
                <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#222",  lineHeight: 20}}>
                  Edit Profile
              </Text>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                color={"#20b08d"}
                size={22}
              />
            </TouchableOpacity>
            <View
              style={{
                  borderBottomColor: '#D7D7D7',
                  borderBottomWidth: 0.8,
                  alignSelf:"center",
                  width:"100%",
                  marginTop: 20,
                  marginBottom: 20
              }}
            />
            <TouchableOpacity
              style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"90%", marginLeft:"5%", marginRight:"5%" }}
            >
              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                <View style={{borderRadius: 10, backgroundColor:"#d3fff4", justifyContent:"center", alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                  <AntDesign name="sharealt" color={"#20b08d"} size={27}/>
                </View>
                <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#222",  lineHeight: 20}}>
                  Share App
                </Text>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                color={"#20b08d"}
                size={22}
              />
            </TouchableOpacity>
            <View
              style={{
                  borderBottomColor: '#D7D7D7',
                  borderBottomWidth: 0.8,
                  alignSelf:"center",
                  width:"100%",
                  marginTop: 20,
                  marginBottom: 20
              }}
            />
            <TouchableOpacity onPress={logOut} style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"90%", marginLeft:"5%", marginRight:"5%", marginBottom: 20}}>
              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                <View style={{borderRadius: 10, backgroundColor:"#d3fff4", justifyContent:"center", alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                  <MaterialIcons name="logout" color={"#20b08d"} size={25}/>
                </View>
                <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#222", lineHeight: 20}}>
                  Logout
              </Text>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                color={"#20b08d"}
                size={22}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#f6f6f6",
    width:"100%",
    flex: 1
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Account;
