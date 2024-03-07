import {Text, View} from "react-native";
import {VStack} from "@gluestack-ui/themed";
import {useEffect, useState} from "react";
import dayjs, { Dayjs } from "dayjs";
import {ActiveBet} from "./components/ActiveBet";
import {PastBet} from "./components/PastBet";
import axios from "axios";
import {outstandingDummyBets, pastdummyData} from "./dummy-data";


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
    useEffect(() => {
        // setPastBets(pastdummyData)
        // setOutstandingBets(outstandingDummyBets)
    }, [profile]);

    return(

        <View>
           <Text>
               My Profile
           </Text>
            <VStack>
                <Text>
                BALANCE: ${profile.balance}
                </Text>
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