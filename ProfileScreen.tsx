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
    // axios.get('/users')
    //     .then(res => {
    //         console.log(res.data);
    //     });

    //loadOutstandingBets
    //loadPastBets
    //loadWallet
    return null;
}


export const ProfileScreen = (props: ProfileScreenProps) => {
    const [profile, setProfile] = useState()
    useEffect(() => {
        loadProfileData()
    }, []);
    const pastBet: PastBet = {
        "id": 1,
        "expirationDate": new dayjs.Dayjs("02/15/2024"),
        "value": 100,
        paymentInfo: ["Bank A", "Bank B"]}

    return(
        <View>
           <Text>
               My Profile
           </Text>
            <VStack>
                <Text>
                BALANCE: ${props.profile.balance}
                </Text>
                {
                 props.profile.outstandingBets.map(bet => {
                     return(<ActiveBet bet={bet}/>)
                 })
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