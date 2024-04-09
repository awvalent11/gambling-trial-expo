import {Text, View} from "react-native";
import {Pressable, VStack} from "@gluestack-ui/themed";
import React, {useEffect, useState} from "react";
import dayjs, { Dayjs } from "dayjs";
import {ActiveBet} from "./components/ActiveBet";
import {PastBet} from "./components/PastBet";
import axios from "axios";
import {outstandingDummyBets, pastdummyData} from "./dummy-data";
import {createNavigationContainerRef, useNavigationContainerRef} from "@react-navigation/native";
import {LeagueScreen} from "./components/LeagueScreen";
import {OddsMarketplace} from "./components/OddsMarketplace";
import { createStackNavigator } from '@react-navigation/stack';


type ProfileScreenProps = {
    profile: Profile
    userEmail: string[]
}

type Profile = {
    email: string;
    balance: number;
    outstandingBets: Bet[]
    pastBets: PastBet[]
}

export type Bet = {
    id: number;
    home: string;
    away: string;
    odds: number;
    expiration: Dayjs;
    moneyLine?: number;
    payoff: number
    position: number
    status?: boolean //is this game going on or not?
}

// const loadProfileData = () => {
//     loadPastBets();
//     loadOutstandingBets();
// }

const seedProfile = {
    'email': 'my.email@gmail.com',
    'balance': 800,
    'outstandingBets': outstandingDummyBets,
    'pastBets': pastdummyData
}

// const loadPastBets = ():Bet[] => {
//     return pastdummyData
// }
//
// const loadOutstandingBets = ():Bet[] => {
//     return outstandingDummyBets
// }


export const ProfileScreen = (props: ProfileScreenProps) => {
    const [profile, setProfile] = useState<Profile>(seedProfile)
    const [pastBets, setPastBets] = useState<PastBet[]>(null)
    const [outstandingBets, setOutstandingBets] = useState<Bet[]>(null)
    // createNavigationContainerRef()
    useEffect(() => {
        // setPastBets(pastdummyData)
        // setOutstandingBets(outstandingDummyBets)
    }, [profile]);

    const Stack = createStackNavigator();

    return(

        <View>
           <Text>
               {seedProfile.email}
           </Text>
            <VStack>
                <Text>
                BALANCE: ${profile.balance}
                </Text>
                <Pressable onPress={() =>
                    alert("You're hitting me!")
                    // usenavigatior.push('OddsMarketplace');
                }
                           sx={{borderWidth: '$1',
                               borderRadius: '$sm',
                               backgroundColor: '$coolGray300'
                           }} padding='$10'>
                    <Text>Odds Marketplace</Text>
                </Pressable>
                {
                 profile.outstandingBets.map(bet => {
                     return(<ActiveBet bet={bet}/>)
                 })
                }
                {
                    profile.outstandingBets.length > 0 ? profile.outstandingBets.map(bet => <ActiveBet bet={bet}/>) : <Text>No Outstanding Bets</Text>
                }
                {
                    profile.pastBets.length > 0 ? profile.pastBets.map(pastBet => <PastBet pastBet={pastBet}/>) : <Text>No Outstanding Bets</Text>

                }
            </VStack>
        </View>
    )
}