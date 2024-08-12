import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import moment from "moment";

class ViewHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [
        'Wi-Fi', '65" HDTV', 'Indoor fireplace', 'Hair dryer',
        'Washing machine', 'Dryer', 'Refrigerator', 'Dishwasher'
      ],
      startDate: null,
      endDate: null,
      displayedDate: moment(),
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" barStyle='light-content' />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <ImageBackground
            style={styles.image}
            source={{ uri: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png' }}
          >
            <View style={{marginTop:"9%", paddingHorizontal:"4%", paddingBottom:"3%", justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
              <Ionicons name="chevron-back" size={23} color="#03314b" style={{padding: 7, backgroundColor:"#fff", paddingLeft: 5, paddingRight: 9, height: 37, width: 37, borderRadius: 100, borderWidth: 1, borderColor: "#AFAFAF"}} />
              <FontAwesome name="heart-o" size={20} color="#03314b" style={{padding: 8.5, backgroundColor:"#fff", height: 37, width: 37, borderRadius: 100, borderWidth: 1, borderColor: "#AFAFAF"}} />
            </View>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Paying Guest in Kohima</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={20} color="#e4d00a" />
              <Text style={styles.rating}> 4.92 (116 reviews)</Text>
            </View>
            <Text style={{fontFamily: "Lato-Bold", marginTop: 10, fontSize: 17}}>Description</Text>
            <Text style={{fontFamily: "Lato-Regular", marginTop: 7, marginBottom: 5, lineHeight: 18}}>Located at the High Court Junction, Merima. 20 mins away from ISBT Terminal and on the way to Wokha road.</Text>
            <View style={styles.divider} />
            <Text style={styles.subTitle}>Facilities</Text>
            <View style={{flexDirection:"row", justifyContent: "space-between", alignItems:"center", paddingHorizontal:"4%", marginTop:"3%"}}>
              <View style={{alignItems:"center"}}>
                <Image source={require("../../../assets/wifi.png")} style={{height: 30, width: 30}} />
                <Text style={{fontFamily: "Lato-Bold", textAlign:"center", marginTop: 7}}>Free Wifi</Text>
              </View>
              <View style={{alignItems:"center"}}>
                <Image source={require("../../../assets/swimming.png")} style={{height: 30, width: 30}} />
                <Text style={{fontFamily: "Lato-Bold", textAlign:"center", marginTop: 7}}>Pool</Text>
              </View>
              <View style={{alignItems:"center"}}>
                <Image source={require("../../../assets/fork-and-spoon.png")} style={{height: 30, width: 30}} />
                <Text style={{fontFamily: "Lato-Bold", textAlign:"center", marginTop: 7}}>Breakfast</Text>
              </View>
              <View style={{alignItems:"center"}}>
                <Image source={require("../../../assets/television.png")} style={{height: 30, width: 30}} />
                <Text style={{fontFamily: "Lato-Bold", textAlign:"center", marginTop: 7}}>Smart TV</Text>
              </View>
            </View>
            <View style={{flexDirection:"row", justifyContent: "space-evenly", alignItems:"center", paddingHorizontal:"4%", marginTop:"6%", marginBottom:"5%"}}>
              <View style={{alignItems:"center"}}>
                <Image source={require("../../../assets/hair-dryer.png")} style={{height: 30, width: 30}} />
                <Text style={{fontFamily: "Lato-Bold", textAlign:"center", marginTop: 7}}>Dryer</Text>
              </View>
              <View style={{alignItems:"center"}}>
                <Image source={require("../../../assets/washing-machine.png")} style={{height: 30, width: 30}} />
                <Text style={{fontFamily: "Lato-Bold", textAlign:"center", marginTop: 7}}>Washing Maching</Text>
              </View>
              <View style={{alignItems:"center"}}>
                <Image source={require("../../../assets/fridge.png")} style={{height: 30, width: 30}} />
                <Text style={{fontFamily: "Lato-Bold", textAlign:"center", marginTop: 7}}>Fridge</Text>
              </View>
            </View>
            <View style={styles.additionalInfoContainer}>
              <FontAwesome name="key" size={20} color="black" />
              <Text style={styles.additionalInfo}> Self check-in</Text>
            </View>
            <View style={styles.additionalInfoContainer}>
              <FontAwesome name="star" size={20} color="black" />
              <Text style={styles.additionalInfo}> Great check-in experience</Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.dateText}>10 - 15 July  •  5 nights:</Text>
                <Text style={styles.priceText}>₹3999</Text>
              </View>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 70 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calenderContainer: {
    flex: 1,
    marginTop:"5%",
    marginBottom: "1%",
  },

  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  header: { marginTop: "9%", paddingHorizontal: "4%", paddingBottom: "3%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  contentContainer: { padding: "7%", paddingHorizontal: "5%", marginTop: -25, zIndex: 99, backgroundColor: "#fff", borderTopLeftRadius: 25, borderTopRightRadius: 25 },
  title: { fontSize: 24, fontFamily: "Lato-Bold", marginBottom: 2 },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  rating: { fontSize: 16, fontFamily: "Lato-Regular", marginLeft: 5 },
  detailsRow: { marginTop: 7 },
  detailText: { fontFamily: "Lato-Bold", fontSize: 15, marginLeft: 5, marginRight: 29 },
  divider: { borderBottomColor: '#DEDEDE', borderBottomWidth: 0.7, alignSelf: "center", width: "100%", marginVertical: "5%" },
  subTitle: { fontSize: 17, fontFamily: "Lato-Bold", marginBottom: 10 },
  amenitiesContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  amenity: { backgroundColor: '#f0f0f0', padding: 8, paddingHorizontal: 20, borderRadius: 8, marginVertical: 4, marginRight: 8 },
  additionalInfoContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  additionalInfo: { fontSize: 16, fontWeight: 'bold', marginLeft: 8 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#03314b', padding: 16, borderRadius: 16, marginVertical: 10 },
  detailsContainer: { flexDirection: 'column' },
  dateText: { color: '#fff', fontSize: 14 },
  priceText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  bookButton: { backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8 },
  bookButtonText: { color: '#03314b', fontSize: 16, fontWeight: 'bold' },
});

export default ViewHotel;
