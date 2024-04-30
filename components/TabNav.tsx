import {ProfileScreen} from "../ProfileScreen";
import {OddsMarketplace} from "./OddsMarketplace";
import {Text} from "react-native";
import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {RecommendedBets} from "./RecommendedBets";


export const TabNav = () => {

const Tab = createMaterialTopTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Odds Marketplace" component={OddsMarketplace} />
            {/*<Tab.Screen name="Recommended Bets" component={RecommendedBets} />*/}
        </Tab.Navigator>
    )
}