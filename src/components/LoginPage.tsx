import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, Image, Button, TouchableOpacity } from "react-native";

const LoginPage = ()=>{
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.topBox}>
                    <Text>Login form input fields</Text>
            </View>
            <View style={styles.bottomBox}>
                <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=>{
                            alert('am working')
                        }}>
                        <Text style={styles.buttonFont}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    topBox:{
        flex:3,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    bottomBox:{
        flex:2,
        padding:10,
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

export default LoginPage;