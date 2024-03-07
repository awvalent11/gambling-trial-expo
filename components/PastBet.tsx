import {Dayjs} from "dayjs";
import {Text} from "react-native";
import {Bet} from "../ProfileScreen";


type PastBetProps = {
    pastBet: PastBet
}

export type PastBet = {

    id: number
    home: string
    away: string
    odds: number
    expiration: Dayjs
    moneyLine?: number
    position: number
    payoff: number
    paymentInfo: string[]
}

export const PastBet = (props: PastBetProps) => {

    return(
        <Text>
            I am a Past Bet
        </Text>
    )
}