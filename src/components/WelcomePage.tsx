import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity, Dimensions } from "react-native";
import FlexBoxTry from "./FlexBoxTry";



const Stack = createNativeStackNavigator();


const WelcomePageMain = ({navigation})=> {
    const {wrapper, textStyle, clickMeStyle, iconStyle} = styles

    return (
        <View style = {wrapper}>
        <Text style = {textStyle}>Welcome to my application</Text>
            <Image
                source = {{
                    width:300,
                    height: 300,
                    uri:'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg'
                }}/>
            <Text 
                style = {clickMeStyle}
                onPress={()=>{
                alert('get resolution')
                const res = Dimensions.get('window')
                console.log(res)
            }}>Text Button</Text>
            <Button 
                title='Simple button' 
                onPress = {()=>{
                    // Alert.alert('Attention!','Operation success!')
                    navigation.push('Flex', { owner: 'Welcome' });
                }}/>
            
            <TouchableOpacity
            
                onPress = {()=>{
                    console.log('Complex button')
                    Alert.alert('Attention!',"Sign out?",[
                        { text:'Yes', onPress:()=> { console.log('Do log out') } },
                        { text:'No', onPress:()=> { console.log('Do nothing') } }
                    ])
                }}>
                <Text>Complex button</Text>
                <Image style = {iconStyle} source = {require('./../../assets/favicon.png')}/>
            </TouchableOpacity> 

        </View>
    )
}

const WelcomePage = ()=> {
    return(
        <Stack.Navigator
                initialRouteName="WelcomePageMain">
            <Stack.Screen name="WelcomePageMain" component={WelcomePageMain} />
            <Stack.Screen name="Flex" component={FlexBoxTry} />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor: "#f1f1f1",
        padding:0,
        alignItems:'center',
        justifyContent:'flex-start',
        
    },
    textStyle: {
        textAlign: 'center'
    },
    clickMeStyle:{
        margin: 10,
        padding: 10,
        backgroundColor: '#000',
        color:'#fff'
    },
    iconStyle:{
        width: 50,
        height: 50
    }
})

export default WelcomePage;

