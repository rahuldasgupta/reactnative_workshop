import React from 'react';
import {
  View, Text, Image,
  SafeAreaView, TouchableOpacity
} from 'react-native';
import { Ionicons, Entypo} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

//Pages

import Home from './src/pages/home/home';

import Hotels from './src/pages/hotels/hotels';
import ViewHotel from './src/pages/hotels/view_hotel';

import Events from './src/pages/events/events';

import Trips from './src/pages/trips/trips';
import Orders from './src/pages/orders/orders';

import HornbillIntro from './src/pages/hornbill/hornbill_intro';
import HornbillHome from './src/pages/hornbill/hornbill_home';
import HornbillStalls from './src/pages/hornbill/hornbill_stalls';

import Account from './src/pages/accounts/account';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HornbillStack = createStackNavigator();
const OrderStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#03314b',
              elevation: 0,
              height: 93,
            },
            headerLeft: () => (
              <Image source={require("./assets/nagahills_white.png")} style={{height: 55, width: 120, marginLeft: 23}} resizeMode="contain" />
            ),
            headerTitle: null,
            headerRight: () => (
              <TouchableOpacity style={{flexDirection:"row", alignItems:"center", height: 40, width: 40, borderRadius: 10, backgroundColor:"#20b08d", marginRight:25, paddingLeft: 8}}>
                <Ionicons name="notifications-outline" size={25} color="#fff"/>
              </TouchableOpacity>
            ),
            headerTintColor: "#fff",
            headerTitleStyle: {
              marginLeft: 7,
            },
          })}
        />
        <HomeStack.Screen
          name="Hotels"
          component={Hotels}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="View Hotel"
          component={ViewHotel}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Trips"
          component={Trips}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="Events"
          component={Events}
          options={{headerShown: false}}
        />
    </HomeStack.Navigator>
  );
};
const OrderStackScreen = ({navigation}) => {
  return (
    <OrderStack.Navigator initialRouteName='Orders'>
      <OrderStack.Screen
        name="Orders"
        component={Orders}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#03314b',
            elevation: 0,
            height: 93,
          },
          headerLeft: () => (
            <Image source={require("./assets/nagahills_white.png")} style={{height: 55, width: 120, marginLeft: 23}} resizeMode="contain" />
          ),
          headerTitle: null,
          headerRight: () => (
            <TouchableOpacity style={{flexDirection:"row", alignItems:"center", height: 40, width: 40, borderRadius: 10, backgroundColor:"#20b08d", marginRight:25, paddingLeft: 8}}>
              <Ionicons name="notifications-outline" size={25} color="#fff"/>
            </TouchableOpacity>
          ),
          headerTintColor: "#fff",
          headerTitleStyle: {
            marginLeft: 7,
          },
        })}
      />
    </OrderStack.Navigator>
  );
};
const AccountStackScreen = ({navigation}) => {
  return (
    <AccountStack.Navigator initialRouteName='Account'>
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#03314b',
            elevation: 0,
            height: 93,
          },
          headerLeft: () => (
            <Image source={require("./assets/nagahills_white.png")} style={{height: 55, width: 120, marginLeft: 23}} resizeMode="contain" />
          ),
          headerTitle: null,
          headerRight: () => (
            <TouchableOpacity style={{flexDirection:"row", alignItems:"center", height: 40, width: 40, borderRadius: 10, backgroundColor:"#20b08d", marginRight:25, paddingLeft: 8}}>
              <Ionicons name="notifications-outline" size={25} color="#fff"/>
            </TouchableOpacity>
          ),
          headerTintColor: "#fff",
          headerTitleStyle: {
            marginLeft: 7,
          },
        })}
      />
    </AccountStack.Navigator>
  );
};
const HornbillStackScreen = ({navigation}) => {
  return (
    <HornbillStack.Navigator initialRouteName='Hornbill Intro'>
      <HornbillStack.Screen
        name="Hornbill Intro"
        component={HornbillIntro}
        options={{headerShown: false}}
      />
      <HornbillStack.Screen
        name="Hornbill Home"
        component={HornbillHome}
        options={{headerShown: false}}
      />
      <HornbillStack.Screen
        name="Hornbill Stalls"
        component={HornbillStalls}
        options={{headerShown: false}}
      />
    </HornbillStack.Navigator>
  );
};
const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: false,
          style: {
            position: 'absolute',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            height: 67,
            backgroundColor: '#20b08d',
            borderRadius: 100,
            margin:"4%",
            width: "92%",
            marginBottom: 14,
          },
        }}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center", backgroundColor:"#03314b", padding: 11, borderRadius: 100}}>
                      <Image source={require("./assets/home-page.png")} style={{height: 24, width: 24}} />
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                       <Image source={require("./assets/home-page.png")} style={{height: 25, width: 25}} />
                    </View>
                  ),
              })}
          />
          <Tab.Screen
            name="Search"
            component={OrderStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center", backgroundColor:"#03314b", padding: 11, borderRadius: 100}}>
                      <Image source={require("./assets/document.png")} style={{height: 24, width: 24}} />
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                       <Image source={require("./assets/document.png")} style={{height: 25, width: 25}} />
                    </View>
                  ),
              })}
          />
          <Tab.Screen
            name="Hornbill"
            component={HornbillStackScreen}
            options={({navigation}) => ({
              tabBarIcon: ({focused}) =>(
                <View style={{alignItems:"center", backgroundColor:"#fff", padding: 7, paddingLeft: 9, paddingRight: 5, borderRadius: 100}}>
                  <Image source={require("./assets/hornbill.png")} style={{height: 40, width: 40}} />
                </View>
              )
            })}
          />
          <Tab.Screen
            name="Find"
            component={OrderStackScreen}
            options={({navigation}) => ({
              tabBarIcon: ({focused}) =>
                focused ? (
                  <View style={{alignItems:"center", backgroundColor:"#03314b", padding: 11, borderRadius: 100}}>
                    <Image source={require("./assets/calender.png")} style={{height: 24, width: 24}} />
                  </View>
                ) : (
                  <View style={{alignItems:"center"}}>
                     <Image source={require("./assets/calender.png")} style={{height: 25, width: 25}} />
                  </View>
                ),
            })}
          />
          <Tab.Screen
            name="Accounts"
            component={AccountStackScreen}
            options={({navigation}) => ({
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <View style={{alignItems:"center", backgroundColor:"#03314b", padding: 11, borderRadius: 100}}>
                      <Image source={require("./assets/user_white.png")} style={{height: 24, width: 24}} />
                    </View>
                  ) : (
                    <View style={{alignItems:"center"}}>
                       <Image source={require("./assets/user_white.png")} style={{height: 25, width: 25}} />
                    </View>
                  ),
              })}
          />
          
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Tabs;