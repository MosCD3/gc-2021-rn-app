import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, Image, Button, TouchableOpacity } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "./SignUp";
import FlexBoxTry from "./FlexBoxTry";
import LoginPage from "./LoginPage";


const Stack = createNativeStackNavigator();
 
const LnadingPageMain = ({navigation})=>{
    return (
        <View style={styles.wrapper}>
            <View style={styles.topBox}>
                <Image
                    source = {{
                        width:250,
                        height: 250,
                        uri:'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg'
                    }}/>
                    <Text>Welcome to GCApp</Text>
            </View>
            <View style={styles.bottomBox}>
                <View style={styles.navButtonsWrapper}>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=>{
                            navigation.push('SignUp');
                        }}>
                        <Text style={styles.buttonFont}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=>{
                            navigation.push('Login')
                        }}>
                        <Text style={styles.buttonFont}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const LandingPage =() =>{
    return (
        <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{
            }}
        >
            <Stack.Screen name="Landing" component={LnadingPageMain}/>
            <Stack.Screen name="SignUp" component={SignUpPage} options={{
                title:"Create Account"
            }}/>
            <Stack.Screen name="Login" component={LoginPage}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    topBox:{
        flex:1.5,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    bottomBox:{
        flex:2,
        justifyContent:'flex-end',
        padding:30
    },
    navButtonsWrapper: {
        height:100,
    },
    buttonStyle:{
        backgroundColor:'grey',
        padding:10,
        alignItems:'center',
        marginBottom: 2
    },
    buttonFont:{
        color:'white'
    }
})

export default LandingPage;