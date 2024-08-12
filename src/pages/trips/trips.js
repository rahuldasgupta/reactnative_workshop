import React from "react";
import { Image, View, Dimensions, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

export default class Trips extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            searchQuery: '',
            selected: 'Any type',
        };
    }
    render(){
        const { selected } = this.state;
        const buttons = ['Any type', 'Hostel', 'Paying Guest'];
        return(
            <View style={{width: windowWidth, flex: 1}}>
              <StatusBar backgroundColor={"#03314b"} style="light" />
              <LinearGradient
                    colors={[ '#03314b', '#03314b','#000']}
                    style={{width:"100%", height:"100%"}}
              >
                <ScrollView style={{paddingTop:"12%", paddingBottom: "7%"}} showsVerticalScrollIndicator={false}>
                    <View style={{margin:"3%", marginTop: 0, padding:"2%", paddingTop: 0, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize: 45, color:"#fff", fontWeight:"bold"}}>Explore Trips</Text>
                            <Text style={{fontSize: 15, color:"#fff", fontWeight:"bold"}}>Camping · Trekking  · Tours</Text>
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
                    <View style={{backgroundColor: "#f6f6f6", borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingTop:"5%"}}>
                        <ScrollView contentContainerStyle={{padding:"2%", paddingBottom:"12%"}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ImageBackground resizeMode="cover" source={{uri: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-places-to-visit-in-kohima.jpg"}} style={{height: 120, width: 100, marginLeft:"2%", marginRight: 10}}imageStyle={{borderRadius: 15}}>
                                    <View style={{backgroundColor:"rgba(0, 0, 0, 0.2)", width:"100%", height:"100%", borderRadius: 15, alignItems:"center", alignSelf:"center"}}>
                                        <Text style={{fontFamily: "Lato-Bold", textAlign:"center", alignItems:"flex-end", position:"absolute", bottom: 10, fontSize: 18, color:"#fff"}}>Kohima</Text>
                                    </View>
                                </ImageBackground>
                                <ImageBackground resizeMode="cover" source={{uri: "https://im.hunt.in/cg/Dimapur/City-Guide/ruins.jpg"}} style={{height: 120, width: 100, marginRight: 10}}imageStyle={{borderRadius: 15}}>
                                    <View style={{backgroundColor:"rgba(0, 0, 0, 0.2)", width:"100%", height:"100%", borderRadius: 15, alignItems:"center", alignSelf:"center"}}>
                                        <Text style={{fontFamily: "Lato-Bold", textAlign:"center", alignItems:"flex-end", position:"absolute", bottom: 10, fontSize: 18, color:"#fff"}}>Dimapur</Text>
                                    </View>
                                </ImageBackground>
                                <ImageBackground resizeMode="cover" source={{uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAm94e4YeIpinq9htxywQ7HXwa1ELNLFh_S9suGBx2dghkKOKdCHoBR6YuY_PtrpVcKdarIRgUarx1p-2mTUD0Q2t6IYNKsJn1fCOaIr1GL6yHaDT2GSp8As5avabZfO48WhK4uG9eJ34/w1200-h630-p-k-no-nu/DSC_0058.JPG"}} style={{height: 120, width: 100, marginRight: 10}}imageStyle={{borderRadius: 15}}>
                                    <View style={{backgroundColor:"rgba(0, 0, 0, 0.2)", width:"100%", height:"100%", borderRadius: 15, alignItems:"center", alignSelf:"center"}}>
                                        <Text style={{fontFamily: "Lato-Bold", textAlign:"center", alignItems:"flex-end", position:"absolute", bottom: 10, fontSize: 18, color:"#fff"}}>Wokha</Text>
                                    </View>
                                </ImageBackground>
                                <ImageBackground resizeMode="cover" source={{uri: "https://scontent.fshl2-1.fna.fbcdn.net/v/t1.6435-9/118787356_3219303541520417_6566631768729571470_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=BmP1bkH3z0wQ7kNvgHuiXwU&_nc_ht=scontent.fshl2-1.fna&gid=AGM50PgQMX9WlHca_YB3FiL&oh=00_AYDOry4Qhm3CoZxQNZ7ThqgY4I1sDVEOlSI5lb5ogR9Nag&oe=66CFD08C"}} style={{height: 120, width: 100, marginRight: 20}}imageStyle={{borderRadius: 15}}>
                                    <View style={{backgroundColor:"rgba(0, 0, 0, 0.2)", width:"100%", height:"100%", borderRadius: 15, alignItems:"center", alignSelf:"center"}}>
                                        <Text style={{fontFamily: "Lato-Bold", textAlign:"center", alignItems:"flex-end", position:"absolute", bottom: 10, fontSize: 18, color:"#fff"}}>Z`boto</Text>
                                    </View>
                                </ImageBackground>
                            </ScrollView>
                            <View style={{marginTop: "5%", marginBottom:"2%", flexDirection:"row", alignItems:"center", marginLeft: 4}}>
                                <Image source={require("../../../assets/fire.png")} style={{height: 30, width: 30}}/>
                                <Text style={{fontFamily: "Lato-Bold", fontSize: 18, marginLeft: 7}}>Popular Desinations</Text>
                            </View>
                            <View style={styles.card}>
                                <Image
                                    source={{uri: "https://static2.tripoto.com/media/filter/tst/img/1793215/TripDocument/1574405659_1574405653596.jpg"}}
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart-outline" size={24} color="gray" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View>
                                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                            <Text style={styles.cardTitle}>Dzukou Valley Tour</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                            <Image source={require("../../../assets/bonfire.png")} style={{height: 16, width: 16}}/>
                                            <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>Camping · Trekking  · Bonfire</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{backgroundColor:"#20b08d", padding: 7, width: 105, alignItems:"center", justifyContent:"center", borderRadius: 10}}>
                                        <Text style={{color:"#fff", fontFamily: "Lato-Bold", fontSize: 15.5}}>Book Trip</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <Image
                                    source={{uri: "https://archive.cloud.cwgc.org/images-cemetery-images-prod/2058100/kohima2003-2.jpg"}}
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart-outline" size={24} color="gray" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View>
                                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                            <Text style={styles.cardTitle}>Kohima City Tour</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                            <Image source={require("../../../assets/bonfire.png")} style={{height: 16, width: 16}}/>
                                            <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>Sightseeing · Lunch</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{backgroundColor:"#20b08d", padding: 7, width: 105, alignItems:"center", justifyContent:"center", borderRadius: 10}}>
                                        <Text style={{color:"#fff", fontFamily: "Lato-Bold", fontSize: 15.5}}>Book Trip</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.card}>
                                <Image
                                    source={{uri: "https://thegypsychiring.com/wp-content/uploads/2023/04/Mount-Saramati-Snow-in-Winter.webp"}}
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart-outline" size={24} color="gray" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View>
                                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                            <Text style={styles.cardTitle}>Mount Saramati Trek</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                            <Image source={require("../../../assets/bonfire.png")} style={{height: 16, width: 16}}/>
                                            <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>Camping · Trekking  · Bonfire</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={{backgroundColor:"#20b08d", padding: 7, width: 105, alignItems:"center", justifyContent:"center", borderRadius: 10}}>
                                        <Text style={{color:"#fff", fontFamily: "Lato-Bold", fontSize: 15.5}}>Book Trip</Text>
                                    </TouchableOpacity>
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
      backgroundColor: '#03314b',
      borderColor: "#03314b"
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
        shadowColor: '#c8c8c8',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
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
        flexDirection:"row", justifyContent:"space-between"
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