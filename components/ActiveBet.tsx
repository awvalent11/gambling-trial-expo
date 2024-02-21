import {Bet} from "../ProfileScreen";
import {Text} from "react-native";

type ActiveBetProps = {
    bet: Bet;
}


export const ActiveBet = (props: ActiveBetProps) => {

    return(
        <Text>
            Bets Go Here
        </Text>
    )
}