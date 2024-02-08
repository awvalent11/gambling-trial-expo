import {StyleSheet, Text, View} from "react-native";
import {HStack, Pressable} from "@gluestack-ui/themed";
import {LeagueButton} from "./components/LeagueButton";
import React from "react";
import {StatusBar} from "expo-status-bar";
import {MyWalletButton} from "./components/MyWalletButton";


export const HomeScreen = ({navigation}) => {


    return (

        <View style={styles.container}>
            <Text>Welcome to The House</Text>
            <HStack padding={'$3'}>
                <MyWalletButton league={'My Wallet'} navigation={navigation} />
                <LeagueButton league={'NFL'} navigation={navigation}/>
                <LeagueButton league={'The Horses'} navigation={navigation} />
            </HStack>
            <StatusBar style="auto" />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});