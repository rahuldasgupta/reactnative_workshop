import React from "react";
import { Image, View, Dimensions, Text, TouchableOpacity, ScrollView, Alert, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Entypo, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Events extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            userData: {},
            email: "",
            width: windowWidth*(90/100),
            height: windowHeight*(58/100),
            updateModal: false,
            versionID: "",
            currentMode: "",
            count: 0,
            faces: 0,
            hasCameraPermission: false,
            flashMode: false,
            isImageProcessing: false,
            imageURI: "",
            retakeModal: false,
            facesData: [],
            facialCamera: false,
            eyeClose: false,
            eyeOpen: false,
            isImageClicked: false,
            loadingModal: true,
            API_message: "",
            isInMarked: false,
            isOutMarked: false,
            isLocationDeniedModal: false,
            place: "",
            selected: 'Any type',
        };
    }
    render(){
        const { selected } = this.state;
        const buttons = ['Any type', 'Concerts', 'Music Festivals'];
        return(
            <View style={{width: windowWidth, flex: 1}}>
              <StatusBar backgroundColor={"#03314b"} style="light" />
              <LinearGradient
                    colors={[ '#03314b', '#03314b','#000']}
                    style={{width:"100%", height:"100%"}}
              >
                <ScrollView style={{ paddingTop:"12%", paddingBottom: "7%"}} showsVerticalScrollIndicator={false}>
                    <View style={{margin:"3%", marginTop: 0, padding:"2%", paddingTop: 0, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize: 45, color:"#fff", fontWeight:"bold"}}>Explore Events</Text>
                            <Text style={{fontSize: 15, color:"#fff", fontWeight:"bold"}}>Concerts · Music Festivals</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:"4%", marginRight:"4%", width:"92%", marginBottom: 5}}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={(text) => this.setState({searchQuery: text})}
                            value={this.state.searchQuery}
                            style={{
                                width:"100%",
                                marginBottom: 10,
                                borderRadius: 100,
                                height: 49,
                                marginBottom: 15,
                                textTransform: 'capitalize',
                                backgroundColor:"#F5F5F5"
                            }}
                            inputStyle={{fontSize: 16.5, fontFamily: "Lato-Regular", marginLeft: -7, marginTop: -3}}
                            iconColor="#222"
                            placeholderTextColor={"#222"}
                        />
                    </View>
                    <View style={{backgroundColor: "#fff", borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingTop:"5%"}}>
                        <ScrollView horizontal={true} style={styles.scrollView} contentContainerStyle={styles.container}>
                            {
                                buttons.map((buttonText, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[ styles.button, selected === buttonText && styles.buttonSelected]}
                                    >
                                        <Text style={[ styles.buttonText, selected === buttonText && styles.buttonTextSelected]}>{buttonText}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                        <ScrollView contentContainerStyle={{padding:"2%", paddingBottom:"12%"}}>
                            <View style={styles.card}>
                                <View style={{backgroundColor:"#000", position:"absolute", zIndex: 999, borderTopLeftRadius: 10, borderBottomRightRadius: 25, width: 55, height: 65, alignItems:"center", justifyContent:"center", paddingHorizontal: 10}}>
                                    <Text style={{color:"#fff", fontFamily: "Lato-Bold", fontSize: 17}}>1st Dec</Text>
                                </View>
                                <Image
                                    source={{uri: "https://i0.wp.com/www.hornbillfestival.com/wp-content/uploads/2020/12/hornbill-festival.jpg?fit=1280%2C698&ssl=1"}}
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart-outline" size={24} color="gray" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                        <Text style={styles.cardTitle}>Hornbill Festival</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                        <Image source={require("../../../assets/location.png")} style={{height: 16, width: 16}}/>
                                        <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}> Kisama Heritage Village, Kohima - Nagaland</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{backgroundColor:"#000", position:"absolute", zIndex: 999, borderTopLeftRadius: 10, borderBottomRightRadius: 25, width: 55, height: 65, alignItems:"center", justifyContent:"center", paddingHorizontal: 10}}>
                                    <Text style={{color:"#fff", fontFamily: "Lato-Bold", fontSize: 17}}>7th Sep</Text>
                                </View>
                                <Image
                                    source={{uri: "https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Cg_custom%2Fv1721829034%2Fhlwafdgf5gj4x2p2fser.jpg"}} // replace with your image URL
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart" size={24} color="red" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                        <Text style={styles.cardTitle}>Vidya Vox Concert</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                        <Image source={require("../../../assets/location.png")} style={{height: 16, width: 16}}/>
                                        <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>DDSC Stadium, Dimapur - Nagaland </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <View style={{backgroundColor:"#000", position:"absolute", zIndex: 999, borderTopLeftRadius: 10, borderBottomRightRadius: 25, width: 55, height: 65, alignItems:"center", justifyContent:"center", paddingHorizontal: 10}}>
                                    <Text style={{color:"#fff", fontFamily: "Lato-Bold", fontSize: 17}}>8th Sep</Text>
                                </View>
                                <Image
                                    source={{uri: "https://res.cloudinary.com/dwzmsvp7f/image/upload/q_75,f_auto,w_2000/c_crop%2Cg_custom%2Fv1722005021%2Fxkqz27izn6efpavgl28l.jpg"}} // replace with your image URL
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart-outline" size={24} color="gray" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                        <Text style={styles.cardTitle}>Kamakshi Khanna Heartbreak India Tour</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                        <Image source={require("../../../assets/location.png")} style={{height: 16, width: 16}}/>
                                        <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>The Maroon Room, Guwahati - Assam</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginBottom: 90}}></View>
                        </ScrollView>
                    </View>
                </ScrollView>
              </LinearGradient>
              
            </View>
        );
    }
}
const styles = StyleSheet.create({
    scrollView: {
      flexDirection: 'row',
      marginHorizontal: "3%",
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      padding: 10,
      paddingHorizontal: 20,
      margin: 5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#f4f4f4',
      backgroundColor: '#f4f4f4',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonSelected: {
      backgroundColor: '#20b08d',
      borderColor: "#20b08d"
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
        elevation: 2,
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