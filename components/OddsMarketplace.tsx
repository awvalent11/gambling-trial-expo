import axios from "axios";
import {Pressable, VStack} from "@gluestack-ui/themed";
import {View, Text} from "react-native";
import {OddsCard} from "./OddsCard";
import {ActiveBet} from "./ActiveBet";
import {PastBet} from "./PastBet";
import React from "react";

type OddsMarketplaceProps = {
    league:String
}

export const OddsMarketplace = () => {
    const games: Number[] = [0, 0, 0, 0];
    // const games = axios.get("http")
    // games.map(game => return(
    //     <Odds
    // ))

    return(
    <View>
        <Text>
            Odds Marketplace
        </Text>
        <VStack>
                    {games.map(
                game => {
                    return(
                         <OddsCard/>
                    )
                }
            )}
        </VStack>
    </View>
    )

}