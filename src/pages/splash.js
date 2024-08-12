import React from "react";
import { Image, View, Dimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class splash extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            userData: {},
        };
    }
    checkLogin = async () => {
        this.props.navigation.navigate("App Intro");
    }
    async componentDidMount(){
        this.checkLogin();
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.checkLogin()
        });
        NavigationBar.setBackgroundColorAsync("#fff");
        NavigationBar.setButtonStyleAsync("dark");
    }
    render(){
        return(
            <View style={{flex: 1, alignItems: "center", alignSelf:"center", justifyContent:"center", marginTop: Constants.statusBarHeight}}>
                <StatusBar backgroundColor={"#fff"} style="dark" />
                <Image
                      source={require("../../assets/splash.png")}
                      style={{
                      height: windowHeight,
                      width: windowWidth,
                      resizeMode:"cover"
                    }}
                />
            </View>
        );
    }
}