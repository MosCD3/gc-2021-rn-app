import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";


const PageHeader = ()=> {
    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.textStyle}>Header displayed here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: "#000",
        padding:10,
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
    textStyle: {
        color:"#fff",
        textAlign: 'center'
    }
})

export default PageHeader;

