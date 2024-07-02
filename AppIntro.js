import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

export default function AppIntro() {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
      <ImageBackground
        source={{uri: "https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHp1a291JTIwdmFsbGV5fGVufDB8fDB8fHww"}}
        //source={require("./assets/intro.jpg")}
        style={{ height: "100%", width:"100%"}}
      >
        <View style={{paddingTop: "12%", paddingHorizontal: "5%"}}>
          <TouchableOpacity style={{borderWidth: 1, marginLeft:"80%", borderColor:"#fff", borderRadius: 10, padding: 8, width: 63}}>
            <Text style={{textAlign:"center", color:"#fff"}}>Skip</Text>
          </TouchableOpacity>
          <Text style={{marginTop: "7%", color: "#fff", fontSize: 68, fontWeight:"500", lineHeight: 83}}>Explore Nagaland with us.</Text>
          <Text style={{color:"#fff", fontSize: 16}}>We travellin are ready to help you on vacation around Nagaland.</Text>
        </View>
        <View style={{backgroundColor:"#fff", position:"absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15, width:"100%", paddingHorizontal:35, paddingVertical:30}}>
          <TouchableOpacity style={{width: "100%", backgroundColor:"#1b1b1b", padding: 20, borderRadius: 15}}>
            <Text style={{color:"#fff", textAlign:"center", fontSize: 16, fontWeight:"600"}}>Get Started {"  "}<FontAwesome6 name="arrow-right-long" size={17} color="#fff" /></Text>
          </TouchableOpacity>
          <View style={{flexDirection:"row", alignSelf:"center"}}>
            <Text style={{marginTop: 15, textAlign:"center",  fontWeight:"500", marginRight: 5}}>already have account?</Text>
            <TouchableOpacity style={{marginTop: 15}}><Text style={{color:"#006aca"}}>Login</Text></TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
