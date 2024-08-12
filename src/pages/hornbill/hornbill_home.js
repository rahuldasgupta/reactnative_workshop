import React from "react";
import { Image, View, Dimensions, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-reanimated-carousel';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Image as FastImage } from 'expo-image';
import Timeline from 'react-native-timeline-flatlist';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Feather from '@expo/vector-icons/Feather';

const windowWidth = Dimensions.get('window').width;

export default class HornbillHome extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            searchQuery: '',
            selected: 'Any type',
            images: [
                "https://i0.wp.com/www.hornbillfestival.com/wp-content/uploads/2020/12/hornbill-festival.jpg?fit=1280%2C698&ssl=1",
                "https://i.ytimg.com/vi/TlfCdI_Kslo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASfKFXFF55vzRih-Rhj6o9jmgdEQ",
                "https://i0.wp.com/www.hornbillfestival.com/wp-content/uploads/2023/11/hornbill-festival-2023.jpg?fit=1590%2C1305&ssl=1"
            ],
            searchQuery: null,
            carouselWidth: windowWidth*(88/100),
        };
        this.data = [
            {time: '09:00 AM', title: 'Opening Ceramony', icon: require('../../../assets/confetti.png')},
            {time: '10:00 AM', title: 'The Boys', description: 'Rock Concert of the European Band "The Ocean"', icon: require('../../../assets/musical-note.png')},
            {time: '11:15 AM', title: 'Cultural Show', description: 'Cultural Dance show by all the major tribes of Nagaland', icon: require('../../../assets/handshake.png')},
            {time: '12:00 PM', title: 'Traditional Wrestling', icon: require('../../../assets/gloves.png')}
        ]      
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
                            <Text style={{fontSize: 45, color:"#fff", fontWeight:"bold"}}>25th Hornbill</Text>
                            <Text style={{fontSize: 15, color:"#fff", fontWeight:"bold"}}>The Festival of Festivals</Text>
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
                    <View style={{backgroundColor: "#f6f6f6", borderTopLeftRadius: 25, borderTopRightRadius: 25, paddingTop:"4%"}}>
                        <ScrollView contentContainerStyle={{padding:"2%", paddingBottom:"12%"}}>
                            <View style={{paddingHorizontal:"4%", marginBottom:"5%", justifyContent:"space-between", flexDirection:"row"}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Hornbill Stalls")} style={styles.serviceCards}>
                                    <Image source={require("../../../assets/street-shop.png")} style={{height: 60, width: 60}}/>
                                    <Text style={styles.serviceCardText}>Locate{"\n"}Stalls</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.serviceCards}>
                                    <Image source={require("../../../assets/location_2.png")} style={{height: 60, width: 60}}/>
                                    <Text style={styles.serviceCardText}>How{"\n"}To Reach</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.serviceCards}>
                                    <Image source={require("../../../assets/faq.png")} style={{height: 60, width: 60}}/>
                                    <Text style={styles.serviceCardText}>Helpdesk{"\n"}& Info</Text>
                                </TouchableOpacity>
                            </View>
                            <Carousel
                                loop
                                width={this.state.carouselWidth}
                                height={130}
                                autoPlay={true}
                                style={{marginBottom: 7, borderRadius: 12, marginHorizontal:"4%",}}
                                data={this.state.images}
                                scrollAnimationDuration={2000}
                                renderItem={({ index }) => (
                                    <FastImage priority="high" source={{ uri: this.state.images[index] }} style={{height:130, width: "100%",}}></FastImage>
                                )}
                            />
                            <Collapse>
                                <CollapseHeader>
                                    <View style={styles.timelineCards}>
                                        <View style={{width:"80%", flexDirection:"row", alignItems:"center"}}>
                                            <View style={{width: 50, paddingVertical: 7, backgroundColor:"#20b08d", borderRadius: 10}}>
                                                <Text style={{fontFamily: "Lato-Bold", fontSize: 25, color:"#fff", textAlign:"center"}}>1</Text>
                                                <Text style={{fontFamily: "Lato-Regular", fontSize: 15, color:"#fff", textAlign:"center"}}>Day</Text>
                                            </View>
                                            <View style={{flexDirection:"column",}}>
                                                <Text style={{color:"#03314b", opacity: 0.8, fontSize: 15, fontFamily: "Lato-Bold", marginLeft: 15}}>1st December</Text>
                                                <Text style={{color:"#03314b", fontSize: 20, fontFamily: "Lato-Bold", marginLeft: 15}}>Opening Ceremony</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Feather name="chevrons-down" size={24} color="#03314b" />
                                        </View>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody style={{width:"95%", marginTop:"3%", paddingHorizontal:"2%", marginHorizontal:"2.5%"}}>
                                    <Timeline
                                        data={this.data}
                                        circleSize={40}
                                        circleColor='#f6f6f6'
                                        lineColor='#20b08d'
                                        timeContainerStyle={{minWidth:50, marginTop: 5, marginHorizontal: 10}}
                                        timeStyle={{textAlign: 'center', fontFamily: "Lato-Bold", backgroundColor:'#d3fff4', color:'#20b08d', borderWidth: 1, borderColor:"#20b08d", paddingHorizontal:15, paddingVertical: 7, borderRadius:10}}
                                        descriptionStyle={{color:'gray', fontFamily: "Lato-Regular"}}
                                        options={{
                                            style:{paddingTop: 5}
                                        }}
                                        titleStyle={{fontFamily: "Lato-Bold", color:"#03314b", marginTop: -2, marginBottom: -4}}
                                        detailContainerStyle={{marginBottom: 20, marginHorizontal: 10, backgroundColor:"#fff", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, elevation: 2, shadowColor: '#c8c8c8', borderWidth: 1, borderColor: "#ececec", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 1,}}
                                        isUsingFlatlist={true}
                                        innerCircle={'icon'}
                                        columnFormat='two-column'
                                    />
                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={styles.timelineCards}>
                                        <View style={{width:"80%", flexDirection:"row", alignItems:"center"}}>
                                            <View style={{width: 50, paddingVertical: 7, backgroundColor:"#20b08d", borderRadius: 10}}>
                                                <Text style={{fontFamily: "Lato-Bold", fontSize: 25, color:"#fff", textAlign:"center"}}>2</Text>
                                                <Text style={{fontFamily: "Lato-Regular", fontSize: 15, color:"#fff", textAlign:"center"}}>Day</Text>
                                            </View>
                                            <View style={{flexDirection:"column",}}>
                                                <Text style={{color:"#03314b", opacity: 0.8, fontSize: 15, fontFamily: "Lato-Bold", marginLeft: 15}}>2nd December</Text>
                                                <Text style={{color:"#03314b", fontSize: 20, fontFamily: "Lato-Bold", marginLeft: 15}}>Music Festival</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Feather name="chevrons-down" size={24} color="#03314b" />
                                        </View>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody style={{width:"95%", marginTop:"3%", paddingHorizontal:"2%", marginHorizontal:"2.5%"}}>
                                    <Timeline
                                        data={this.data}
                                        circleSize={40}
                                        circleColor='#f6f6f6'
                                        lineColor='#20b08d'
                                        timeContainerStyle={{minWidth:50, marginTop: 5, marginHorizontal: 10}}
                                        timeStyle={{textAlign: 'center', fontFamily: "Lato-Bold", backgroundColor:'#d3fff4', color:'#20b08d', borderWidth: 1, borderColor:"#20b08d", paddingHorizontal:15, paddingVertical: 7, borderRadius:10}}
                                        descriptionStyle={{color:'gray', fontFamily: "Lato-Regular"}}
                                        options={{
                                            style:{paddingTop: 5}
                                        }}
                                        titleStyle={{fontFamily: "Lato-Bold", color:"#03314b", marginTop: -2, marginBottom: -4}}
                                        detailContainerStyle={{marginBottom: 20, marginHorizontal: 10, backgroundColor:"#fff", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, elevation: 2, shadowColor: '#c8c8c8', borderWidth: 1, borderColor: "#ececec", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 1,}}
                                        isUsingFlatlist={true}
                                        innerCircle={'icon'}
                                        columnFormat='two-column'
                                    />
                                </CollapseBody>
                            </Collapse>
                            <Collapse>
                                <CollapseHeader>
                                    <View style={styles.timelineCards}>
                                        <View style={{width:"80%", flexDirection:"row", alignItems:"center"}}>
                                            <View style={{width: 50, paddingVertical: 7, backgroundColor:"#20b08d", borderRadius: 10}}>
                                                <Text style={{fontFamily: "Lato-Bold", fontSize: 25, color:"#fff", textAlign:"center"}}>3</Text>
                                                <Text style={{fontFamily: "Lato-Regular", fontSize: 15, color:"#fff", textAlign:"center"}}>Day</Text>
                                            </View>
                                            <View style={{flexDirection:"column",}}>
                                                <Text style={{color:"#03314b", opacity: 0.8, fontSize: 15, fontFamily: "Lato-Bold", marginLeft: 15}}>3rd December</Text>
                                                <Text style={{color:"#03314b", fontSize: 20, fontFamily: "Lato-Bold", marginLeft: 15}}>Cultural Shows</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Feather name="chevrons-down" size={24} color="#03314b" />
                                        </View>
                                    </View>
                                </CollapseHeader>
                                <CollapseBody style={{width:"95%", marginTop:"3%", paddingHorizontal:"2%", marginHorizontal:"2.5%"}}>
                                    <Timeline
                                        data={this.data}
                                        circleSize={40}
                                        circleColor='#f6f6f6'
                                        lineColor='#20b08d'
                                        timeContainerStyle={{minWidth:50, marginTop: 5, marginHorizontal: 10}}
                                        timeStyle={{textAlign: 'center', fontFamily: "Lato-Bold", backgroundColor:'#d3fff4', color:'#20b08d', borderWidth: 1, borderColor:"#20b08d", paddingHorizontal:15, paddingVertical: 7, borderRadius:10}}
                                        descriptionStyle={{color:'gray', fontFamily: "Lato-Regular"}}
                                        options={{
                                            style:{paddingTop: 5}
                                        }}
                                        titleStyle={{fontFamily: "Lato-Bold", color:"#03314b", marginTop: -2, marginBottom: -4}}
                                        detailContainerStyle={{marginBottom: 20, marginHorizontal: 10, backgroundColor:"#fff", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, elevation: 2, shadowColor: '#c8c8c8', borderWidth: 1, borderColor: "#ececec", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 1,}}
                                        isUsingFlatlist={true}
                                        innerCircle={'icon'}
                                        columnFormat='two-column'
                                    />
                                </CollapseBody>
                            </Collapse>
                            <View style={{marginBottom: 95}}></View>
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
    serviceCards: {
        justifyContent:"center", alignItems:"center", alignSelf:"center", width: "31%", borderRadius: 10, elevation: 2, shadowColor: '#c8c8c8', borderWidth: 1, borderColor: "#ececec", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 1, padding: 10, paddingVertical: 12, backgroundColor:"#fff"
    },
    serviceCardText: {
        textAlign:"center", fontFamily: "Lato-Bold", marginTop: 5
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
      timelineCards: {
        width:"90%", flexDirection:"row", justifyContent:"space-between", alignItems:"center", borderRadius: 10, borderWidth: 1.2, borderColor: "#ececec", paddingVertical: 12, backgroundColor:"#fff", marginTop:"4%", paddingHorizontal:"4%", paddingTop: "3%", paddingBottom:"3.5%", marginHorizontal:"5%"
      },
  });