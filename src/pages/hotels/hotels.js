import React from "react";
import { Image, View, Dimensions, Text, TouchableOpacity, ScrollView, Alert, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import { Image as FastImage } from 'expo-image';

const windowWidth = Dimensions.get('window').width;

export default class Events extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            searchQuery: '',
            selected: 'Any type',
            images: [
                require("../../../assets/banner_2.jpg"),
                require("../../../assets/banner_3.jpg"),
                require("../../../assets/banner_1.jpg")
            ],
            carouselWidth: windowWidth*(90/100),
        };
    }
    render(){
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
                            <Text style={{fontSize: 45, color:"#fff", fontWeight:"bold"}}>Explore Stays</Text>
                            <Text style={{fontSize: 15, color:"#fff", fontWeight:"bold"}}>Hotels · Homestays  · PGs</Text>
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
                    <View style={{flexDirection:"row", marginBottom:"5%", paddingHorizontal:"5%"}}>
                        <TouchableOpacity style={{alignItems:"center", marginRight: 15}}>
                            <View style={{padding: 14, paddingTop: 12, paddingBottom: 16,  height: 70, width: 70, backgroundColor:"#20b08d", borderRadius: 100}}>
                                <Image source={require("../../../assets/guest_house_white.png")} style={{height: 42, width: 42}}/>
                            </View>
                            <Text style={{fontFamily: "Lato-Regular", color: "#fff", marginTop: 5}}>Hotels</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:"center", marginRight: 15}}>
                            <View style={{padding: 14, paddingTop: 12, paddingBottom: 16,  height: 70, width: 70, backgroundColor:"#fff", borderRadius: 100}}>
                                <Image source={require("../../../assets/review.png")} style={{height: 42, width: 42}}/>
                            </View>
                            <Text style={{fontFamily: "Lato-Regular", color: "#fff", marginTop: 5}}>Guest House</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <View style={{padding: 14, paddingTop: 12, paddingBottom: 16,  height: 70, width: 70, backgroundColor:"#fff", borderRadius: 100}}>
                                <Image source={require("../../../assets/hostel.png")} style={{height: 42, width: 42}}/>
                            </View>
                            <Text style={{fontFamily: "Lato-Regular", color: "#fff", marginTop: 5}}>Hostel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: "#f6f6f6", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop:"5%"}}>
                        <Carousel
                            loop
                            width={this.state.carouselWidth}
                            height={150}
                            autoPlay={true}
                            style={{marginBottom: "3%", borderRadius: 12, marginLeft:"5%",}}
                            data={this.state.images}
                            scrollAnimationDuration={2000}
                            renderItem={({ index }) => (
                                <FastImage priority="high" source={this.state.images[index]} style={{height:150, width: "100%",}}></FastImage>
                            )}
                        />
                        <View style={{marginTop: "3%", paddingHorizontal:"5%", flexDirection:"row", alignItems:"center", marginLeft: 4}}>
                            <Image source={require("../../../assets/fire.png")} style={{height: 30, width: 30}}/>
                            <Text style={{fontFamily: "Lato-Bold", fontSize: 18, marginLeft: 7}}>Nearby Hotels</Text>
                        </View>                  
                        <ScrollView horizontal={true} contentContainerStyle={{padding:"2%", paddingTop:"4%"}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("View Hotel")} style={styles.card}>
                                <Image
                                    source={{uri: "https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png"}}
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart-outline" size={24} color="gray" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                        <Text style={styles.cardTitle}>PG in Kohima</Text>
                                        <Text style={styles.cardPrice}>₹<Text style={{fontFamily: "Poppins-Medium"}}></Text>899</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                        <Image source={require("../../../assets/location.png")} style={{height: 16, width: 16}}/>
                                        <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>Near High Court Junction, Merima</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("View Hotel")} style={styles.card}>
                                <Image
                                    source={{uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493101913.jpg?k=1f84962bed35e291ed7bf54c96eebd34f0a70cddd734db25fb08283ebc410370&o=&hp=1"}} // replace with your image URL
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart" size={24} color="red" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                        <Text style={styles.cardTitle}>Hostel in Kohima</Text>
                                        <Text style={styles.cardPrice}>₹<Text style={{fontFamily: "Poppins-Medium"}}></Text>1199</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                        <Image source={require("../../../assets/location.png")} style={{height: 16, width: 16}}/>
                                        <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>Near High Court Junction, Merima</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity TouchableOpacity onPress={()=>this.props.navigation.navigate("View Hotel")} style={styles.card}>
                                <Image
                                    source={{uri: "https://www.primepgs.in/public/blog_image/4411460671675242324.jpg"}} // replace with your image URL
                                    style={styles.cardImage}
                                />
                                <TouchableOpacity style={styles.heartIcon}>
                                    <Ionicons name="heart-outline" size={24} color="gray" />
                                </TouchableOpacity>
                                <View style={styles.cardContent}>
                                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                        <Text style={styles.cardTitle}>PG in Zhadima</Text>
                                        <Text style={styles.cardPrice}>₹<Text style={{fontFamily: "Poppins-Medium"}}></Text>799</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", marginTop: 3}}>
                                        <Image source={require("../../../assets/location.png")} style={{height: 16, width: 16}}/>
                                        <Text style={{fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10}}>Next to CRPF Camp Base</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
    gradient: { width: "100%", height: "100%" },
    scrollView: { paddingTop: "12%", paddingBottom: "7%" },
    header: { margin: "3%", marginTop: 0, padding: "2%", paddingTop: 0, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    title: { fontSize: 45, color: "#fff", fontWeight: "bold" },
    subtitle: { fontSize: 15, color: "#fff", fontWeight: "bold" },
    searchContainer: { marginLeft: "4%", marginRight: "4%", width: "92%", marginBottom: 5 },
    searchBar: { width: "100%", marginBottom: 10, borderRadius: 100, height: 49, marginBottom: 15, backgroundColor: "#F5F5F5" },
    searchInput: { fontSize: 16.5, fontFamily: "Lato-Regular", marginLeft: -7, marginTop: -3 },
    iconRow: { flexDirection: "row", marginBottom: "5%", paddingHorizontal: "5%" },
    iconWrapper: { alignItems: "center", marginRight: 15 },
    iconContainer: { padding: 14, paddingTop: 12, paddingBottom: 16, height: 70, width: 70, borderRadius: 100 },
    icon: { height: 42, width: 42 },
    iconText: { fontFamily: "Lato-Regular", color: "#fff", marginTop: 5 },
    carouselContainer: { backgroundColor: "#f6f6f6", borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: "5%" },
    carousel: { marginBottom: "3%", borderRadius: 12, marginLeft: "5%" },
    carouselImage: { height: 150, width: "100%" },
    sectionHeader: { marginTop: "3%", paddingHorizontal: "5%", flexDirection: "row", alignItems: "center", marginLeft: 4 },
    sectionIcon: { height: 30, width: 30 },
    sectionTitle: { fontFamily: "Lato-Bold", fontSize: 18, marginLeft: 7 },
    horizontalScroll: { padding: "2%", paddingTop: "4%" },
    card: { backgroundColor: 'white', borderRadius: 15, borderWidth: 4, borderColor: "#fff", overflow: 'hidden', width: 250, elevation: 3, shadowColor: '#c8c8c8', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3, marginLeft: "2%", marginBottom: 150 },
    cardImage: { width: "100%", height: 150 },
    heartIcon: { position: 'absolute', top: 10, right: 10, backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 100, padding: 5 },
    cardContent: { padding: 15, paddingHorizontal: 10 },
    cardTitleRow: { flexDirection: "row", justifyContent: "space-between" },
    cardTitle: { fontSize: 17, fontFamily: "Lato-Bold", marginBottom: 5 },
    cardPrice: { fontSize: 18, fontFamily: "Lato-Bold", color: "#20b08d" },
    cardLocationRow: { flexDirection: "row", alignItems: "center", marginTop: 3 },
    locationIcon: { height: 16, width: 16 },
    cardLocation: { fontFamily: "Lato-Regular", marginLeft: 5, marginTop: -2, marginRight: 10 },
});