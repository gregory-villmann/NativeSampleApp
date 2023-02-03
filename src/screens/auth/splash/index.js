import React, {useState} from 'react';
import {Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import {Button} from "@react-native-material/core";

const Splash = () => {
    return (
        <SafeAreaView style={styles.view}>
            <Image style={styles.image} resizeMode={'contain'} source={require('../../../../assets/friends.png')}></Image>
            <View style={styles.background}>
                <Text style={styles.text}>You'll find {"\n"}<Text style={styles.innerText}>All you need</Text>{"\n"} Here!</Text>
                <View style={styles.buttonComponent}>
                    <Button color={'white'} style={styles.buttonLogin} title={'Log in'}></Button>
                    <Button style={styles.buttonSign} variant={'text'} color={'#FCA34D'} title={'Sign up'}></Button>
                </View>
            </View>
        </SafeAreaView>

    );
}
export default Splash;
