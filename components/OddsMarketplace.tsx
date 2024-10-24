import axios from "axios";
import {Pressable, VStack} from "@gluestack-ui/themed";
import {View, Text} from "react-native";
import {OddsCard} from "./OddsCard";
import {ActiveBet} from "./ActiveBet";
import {PastBet} from "./PastBet";
import React, {useEffect, useState} from "react";

type OddsMarketplaceProps = {
    league:String
}

export type Game = {
    id: number
    home: String
    away: String
    odds: Odds[]
}

export type Odds = {
    pointsSpread: number
    overUnder: number
    moneyLine: number
    sportsBook: String
}

export const OddsMarketplace = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        axios.get("http://k8s-game2048-nflingre-04613a5480-994585251.us-east-2.elb.amazonaws.com/gambling-api/nfl-week-games")
            .then((res: any) => setGames(res.data))
    })


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
                         <OddsCard game={game}/>
                    )
                }
            )}
        </VStack>
    </View>
    )

}