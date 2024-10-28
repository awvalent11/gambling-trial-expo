import axios from "axios";
import {Pressable, VStack} from "@gluestack-ui/themed";
import {View, Text} from "react-native";
import {OddsCard} from "./OddsCard";
import {ActiveBet} from "./ActiveBet";
import {PastBet} from "./PastBet";
import React, {useEffect, useState} from "react";
import {exampleGameType, mockNFLDataWeek8} from "../dummy-data";

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
    const [games, setGames] = useState(mockNFLDataWeek8);
    // useEffect(() => {
    //     // axios.get("http://k8s-game2048-nflingre-04613a5480-994585251.us-east-2.elb.amazonaws.com/gambling-api/nfl-week-games")
    //     axios.get("https://api.sportsdata.io/v3/nfl/odds/json/GameOddsByWeek/2024/7?key=a1c6821b242546c180c07e0d1e508670")
    //         .then((res: any) => {
    //             console.log(res.data)
    //             setGames(res.data)
    //         })
    // }, [])


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