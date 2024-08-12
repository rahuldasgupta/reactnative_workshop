import React from "react";
import { Image, View, Dimensions, Text, TouchableOpacity, ScrollView, Linking, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class HornbillStalls extends React.Component {
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
            selected: 'Ao Dishes',
        };
    }
    openGoogelMaps = (latitude, longitude) => {
      const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
      Linking.openURL(mapUrl);
    }
    render(){
        const { selected } = this.state;
        const buttons = ['Ao Dishes', 'Angami Dishes', 'Lotha Dishes'];
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
                          <Text style={{fontSize: 45, color:"#fff", fontWeight:"bold"}}>Locate Stalls</Text>
                          <Text style={{fontSize: 15, color:"#fff", fontWeight:"bold"}}>Food · Delicacies · Hertiage</Text>
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
                        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
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
                            <TouchableOpacity onPress={()=>this.openGoogelMaps("25.6163689", "94.1143735")} style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"93%", marginHorizontal:"3.5%", marginTop: "4%"}}>
                              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                                <View style={{borderRadius: 10, justifyContent:"center", backgroundColor:'#d3fff4', alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                                  <Ionicons name="fast-food-outline" color={"#20b08d"} size={30}/>
                                </View>
                                <View>
                                  <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    Achumi Stalls (Ao Delicacies)
                                  </Text>
                                  <Text style={{marginLeft: 15, opacity: 0.5, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    5mins away
                                  </Text>
                                </View>
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
                                  width:"93%",
                                  marginTop: 18,
                                  marginBottom: 18
                              }}
                            />
                            <TouchableOpacity onPress={()=>this.openGoogelMaps("25.6163689", "94.1143735")} style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"93%", marginHorizontal:"3.5%"}}>
                              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                                <View style={{borderRadius: 10, justifyContent:"center", backgroundColor:'#d3fff4', alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                                  <AntDesign name="rest" color={"#20b08d"} size={30}/>
                                </View>
                                <View>
                                  <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    Tea & Beverages
                                  </Text>
                                  <Text style={{marginLeft: 15, opacity: 0.5, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    2mins away
                                  </Text>
                                </View>
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
                                  width:"93%",
                                  marginTop: 18,
                                  marginBottom: 18
                              }}
                            />
                            <TouchableOpacity onPress={()=>this.openGoogelMaps("25.6163689", "94.1143735")} style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"93%", marginHorizontal:"3.5%"}}>
                              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                                <View style={{borderRadius: 10, justifyContent:"center", backgroundColor:'#d3fff4', alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                                  <Ionicons name="fast-food-outline" color={"#20b08d"} size={30}/>
                                </View>
                                <View>
                                  <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    Chang Food Corner
                                  </Text>
                                  <Text style={{marginLeft: 15, opacity: 0.5, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    11mins away
                                  </Text>
                                </View>
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
                                  width:"93%",
                                  marginTop: 18,
                                  marginBottom: 18
                              }}
                            />
                            <TouchableOpacity onPress={()=>this.openGoogelMaps("25.6163689", "94.1143735")} style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"93%", marginHorizontal:"3.5%"}}>
                              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                                <View style={{borderRadius: 10, justifyContent:"center", backgroundColor:'#d3fff4', alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                                  <Ionicons name="fast-food-outline" color={"#20b08d"} size={30}/>
                                </View>
                                <View>
                                  <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    Ao Food Hub
                                  </Text>
                                  <Text style={{marginLeft: 15, opacity: 0.5, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    7mins away
                                  </Text>
                                </View>
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
                                  width:"93%",
                                  marginTop: 18,
                                  marginBottom: 18
                              }}
                            />
                            <TouchableOpacity onPress={()=>this.openGoogelMaps("25.6163689", "94.1143735")} style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"93%", marginHorizontal:"3.5%"}}>
                              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                                <View style={{borderRadius: 10, justifyContent:"center", backgroundColor:'#d3fff4', alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                                  <AntDesign name="rest" color={"#20b08d"} size={30}/>
                                </View>
                                <View>
                                  <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    Fresh Fruit Juice
                                  </Text>
                                  <Text style={{marginLeft: 15, opacity: 0.5, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    4mins away
                                  </Text>
                                </View>
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
                                  width:"93%",
                                  marginTop: 18,
                                  marginBottom: 18
                              }}
                            />
                            <TouchableOpacity onPress={()=>this.openGoogelMaps("25.6163689", "94.1143735")} style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", alignSelf:"center", width:"93%", marginHorizontal:"3.5%"}}>
                              <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center",}}>
                                <View style={{borderRadius: 10, justifyContent:"center", backgroundColor:'#d3fff4', alignItems:"center", alignSelf:"center", height: 45, width: 45}}>
                                  <Ionicons name="beer-outline" color={"#20b08d"} size={30}/>
                                </View>
                                <View>
                                  <Text style={{marginLeft: 15, fontSize: 17, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    Local Rice Beer Hub
                                  </Text>
                                  <Text style={{marginLeft: 15, opacity: 0.5, fontFamily: "Lato-Regular", color:"#03314b"}}>
                                    4mins away
                                  </Text>
                                </View>
                              </View>
                              <MaterialIcons
                                name="arrow-forward-ios"
                                color={"#20b08d"}
                                size={22}
                              />
                            </TouchableOpacity>
                            <View style={{marginBottom: 110}}></View>
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