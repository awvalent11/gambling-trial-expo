import {StyleSheet, Text, View} from "react-native";
import {HStack} from "@gluestack-ui/themed";
import {LeagueButton} from "./components/LeagueButton";
import React from "react";
import {StatusBar} from "expo-status-bar";
import {MyWalletButton} from "./components/MyWalletButton";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./index";
import { NavigationContainer } from '@react-navigation/native';
import {ProfileScreen} from "./ProfileScreen";
import {LeagueScreen} from "./components/LeagueScreen";
import {OddsMarketplace} from "./components/OddsMarketplace";
import { getHeaderTitle } from '@react-navigation/elements';
import {OddsCard} from "./components/OddsCard";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {TabNav} from "./components/TabNav";

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = ({navigation}) => {

    const Stack = createNativeStackNavigator<RootStackParamList>();



    return (<>
                <TabNav/>
            </>
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