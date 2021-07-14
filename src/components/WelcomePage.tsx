import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";


const WelcomePage = ()=> {
    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.textStyle}>Welcome page text here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: "#f1f1f1",
        padding:10,
        alignItems:'center'
    },
    textStyle: {
        textAlign: 'center'
    }
})

export default WelcomePage;

