import {Dayjs} from "dayjs";
import {Text} from "react-native";


type PastBetProps = {
    pastBet: PastBet
}

export type PastBet = {
    id: number
    expirationDate: Dayjs
    value: number
    paymentInfo: string[]
}

export const PastBet = (props: PastBetProps) => {

    return(
        <Text>
            I am a Past Bet
        </Text>
    )
}