import React from "react";
import { Image, View, Dimensions, Text, TouchableOpacity, ScrollView, Alert, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Image as FastImage } from 'expo-image';
import { Searchbar } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

const windowWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
          images: [
            "https://i0.wp.com/www.hornbillfestival.com/wp-content/uploads/2020/12/hornbill-festival.jpg?fit=1280%2C698&ssl=1",
            "https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Cg_custom%2Fv1721829034%2Fhlwafdgf5gj4x2p2fser.jpg",
            "https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Cg_custom%2Fv1722005021%2Fxkqz27izn6efpavgl28l.jpg"
          ],
          searchQuery: null,
          carouselWidth: windowWidth*(88/100),
        };
    }
    render(){
        return(
            <View style={{width: windowWidth, backgroundColor:"#f6f6f6"}}>
              <StatusBar backgroundColor={"#03314b"} style="light" />
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{margin:"3%", padding:"3%", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                  <View>
                      <Text style={{fontSize: 16.5, color:"#03314b", fontFamily: "Lato-Bold",}}>Hey Rishav</Text>
                      <Text style={{fontSize: 25, marginTop: 3, color:"#03314b", fontFamily: "Lato-Bold",}}>Welcome back</Text>
                  </View>
                  <Image
                      source={require("../../../assets/user.png")}
                      style={{
                        height: 60,
                        width: 60,
                        resizeMode:"cover",
                      }}
                  />
                </View>
                <View style={{marginLeft:"4%", marginRight:"4%", width:"92%", flexDirection:"row", marginBottom: 7,}}>
                  <Searchbar
                      placeholder={"Search"}
                      onChangeText={(searchText) => this.setState({searchQuery: searchText})}
                      value={this.state.searchQuery}
                      style={{
                          width:"96%",
                          marginLeft:"2%",
                          marginBottom: 10,
                          borderRadius: 10,
                          height: 49,
                          marginBottom: 15,
                          textTransform: 'capitalize',
                          backgroundColor:"#fff",
                          shadowColor: "#000", shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.22, shadowRadius: 2.22, elevation: 3,
                      }}
                      inputStyle={{fontSize: 16.5, fontFamily: "Lato-Regular", marginLeft: -5, marginTop: -3}}
                      iconColor="#03314b"
                      placeholderTextColor={"#03314b"}
                      elevation={0}
                  />
                </View>
                <Carousel
                    loop
                    width={this.state.carouselWidth}
                    height={130}
                    autoPlay={true}
                    style={{marginBottom: 7, borderRadius: 12, marginLeft:"6%",}}
                    data={this.state.images}
                    scrollAnimationDuration={2000}
                    renderItem={({ index }) => (
                        <FastImage priority="high" source={{ uri: this.state.images[index] }} style={{height:130, width: "100%",}}></FastImage>
                    )}
                />
                <View style={{marginVertical: "5%", paddingHorizontal:"5%", flexDirection:"row", alignItems:"center", alignSelf:"center", marginLeft: 4}}>
                    <Image source={require("../../../assets/fire.png")} style={{height: 30, width: 30}}/>
                    <Text style={{fontFamily: "Lato-Bold", fontSize: 18, marginLeft: 7}}>Popular Services</Text>
                </View>
                <View style={{ marginBottom:"3%", paddingHorizontal:"6%", justifyContent:"space-between", flexDirection:"row"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Hotels")} style={styles.serviceCards}>
                        <Image source={require("../../../assets/hotel.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>Hotels &{"\n"}Guest House</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Trips")} style={styles.serviceCards}>
                        <Image source={require("../../../assets/trips.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>Tour{"\n"}Destinations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Events")} style={styles.serviceCards}>
                        <Image source={require("../../../assets/rock-and-roll.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>Events &{"\n"}Concerts</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom:"3%", paddingHorizontal:"6%", justifyContent:"space-between", flexDirection:"row"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Hornbill")} style={styles.serviceCards}>
                        <Image source={require("../../../assets/hornbill.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>25th Hornbill{"\n"}Festival</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serviceCards}>
                        <Image source={require("../../../assets/transport.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>Book{"\n"}Taxi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serviceCards}>
                        <Image source={require("../../../assets/ramen.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>Places To{"\n"}Eat</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 100, paddingHorizontal:"6%", justifyContent:"space-between", flexDirection:"row"}}>
                    <TouchableOpacity style={styles.serviceCards}>
                        <Image source={require("../../../assets/siren.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>Emergency{"\n"}Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serviceCards}>
                        <Image source={require("../../../assets/announcement.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>Announcment{"\n"}& Notices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serviceCards}>
                        <Image source={require("../../../assets/faq.png")} style={{height: 60, width: 60}}/>
                        <Text style={styles.serviceCardText}>View{"\n"}FAQs</Text>
                    </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    image_slider_view: {
      marginBottom: "5%", width: "92%", height: 160, marginLeft:"4%", marginRight:"4%", shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    serviceCards: {
      justifyContent:"center", alignItems:"center", alignSelf:"center", width: "31%", borderRadius: 10, elevation: 2, shadowColor: '#c8c8c8', borderWidth: 1, borderColor: "#ececec", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 1, padding: 10, paddingVertical: 12, backgroundColor:"#fff"
    },
    serviceCardText: {
      textAlign:"center", fontFamily: "Lato-Bold", marginTop: 5
    },
    buttonText: {
      color: '#000',
      textAlign: 'center',
    },
    buttonTextSelected: {
      color: '#fff',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        width: "96%",
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        margin:"2%"
      },
      cardImage: {
        width: "100%",
        height: 150,
      },
      heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 100,
        padding: 5,
      },
      cardContent: {
        padding: 15,
      },
      cardTitle: {
        fontSize: 17,
        fontFamily: "Lato-Bold",
        marginBottom: 5,
      },
      cardRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      cardDetails: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
      },
      cardPrice: {
        fontSize: 20,
        fontFamily: "Lato-Bold",
        color: "#1dcc98"
      },
      strikethrough: {
        textDecorationLine: 'line-through',
        color: 'gray',
        fontSize: 17,
        fontFamily: "Lato-Bold"
      },
  });