import {ProfileScreen} from "../ProfileScreen";
import {OddsMarketplace} from "./OddsMarketplace";
import {Text} from "react-native";
import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";


export const TabNav = () => {

const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="OddsMarketplace" component={OddsMarketplace} />
        </Tab.Navigator>
    )
}