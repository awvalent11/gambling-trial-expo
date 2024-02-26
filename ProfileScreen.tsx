import {Text, View} from "react-native";
import {VStack} from "@gluestack-ui/themed";
import {useEffect, useState} from "react";
import dayjs, { Dayjs } from "dayjs";
import {ActiveBet} from "./components/ActiveBet";
import {PastBet} from "./components/PastBet";
import axios from "axios";


type ProfileScreenProps = {
    profile: Profile
}

type Profile = {
    email: string;
    balance: number;
    outstandingBets: Bet[]
    pastBets: Bet[]
}

export type Bet = {
    id: number;
    home: string;
    away: string;
    odds: number;
    expiration: Dayjs;
}

const loadProfileData = () => {
    // axios.get('/profileService')
    //     .then(res => {
    //         console.log(res.data);
    //     });

    //loadOutstandingBets
    //loadPastBets
    //loadWallet
    return null;
}

const seedProfile = {
    'email': 'my.email@gmail.com',
    'balance': 800,
    'outstandingBets': [],
    'pastBets': []
}


export const ProfileScreen = (props: ProfileScreenProps) => {
    const [profile, setProfile] = useState<Profile>(seedProfile)
    // useEffect(() => {
    //     loadProfileData()
    // }, []);
    // const pastBet: PastBet = {
    //     "id": 1,
    //     "expirationDate": new dayjs.Dayjs("02/15/2024"),
    //     "value": 100,
    //     paymentInfo: ["Bank A", "Bank B"]}

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
                {/*{*/}
                {/*     props.profile.pastBets.map(bet => {*/}
                {/*         return(<PastBet pastBet={pastBet}/>)*/}
                {/*     })*/}
                {/*}*/}
            </VStack>
        </View>
    )
}