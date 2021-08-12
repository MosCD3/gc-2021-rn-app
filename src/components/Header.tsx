import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";


const PageHeader = ()=> {
    return (
        <SafeAreaView style = {styles.wrapper}>
            <Text style = {styles.textStyle}>Header displayed here</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: "#0a4a4b",
        padding:10,
        paddingTop: Platform.OS === 'android' ? 30 : 20,
    },
    textStyle: {
        color:"#fff",
        textAlign: 'center'
    }
})

export default PageHeader;

