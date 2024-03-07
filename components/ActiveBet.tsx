import {Bet} from "../ProfileScreen";
import {Text} from "react-native";
import {Box, HStack, VStack} from "@gluestack-ui/themed";
import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat';
type ActiveBetProps = {
    bet: Bet;
}


dayjs.extend(localizedFormat);


export const ActiveBet = (props: ActiveBetProps) => {

    return(
        <HStack
            alignItems='center'
            justifyContent='space-between'
            borderColor={"$black"}
            borderBottomWidth={1}
            paddingHorizontal={24}
            paddingVertical={12}>
            {/*<Box w="$80" h="$20" bg="$yellow100">*/}
                <VStack>
                    <HStack bg="$blue400">
                        <Text>
                            Game Day: {props.bet.expiration.format("LLLL")}
                        </Text>
                    </HStack>
                    <HStack bg="$blue200">
                        <Text>
                            Payoff: ${props.bet.payoff}
                        </Text>
                        <Text>
                            Position: ${props.bet.position}
                        </Text>
                    </HStack>
                    <HStack bg="$blue400">
                        <Text>
                            {props.bet.away} @
                        </Text>
                        <Text>
                            {props.bet.home}
                        </Text>
                        <Text>
                            {props.bet.odds}
                            //as percentage
                        </Text>
                    </HStack>
                </VStack>
            {/*</Box>*/}
        </HStack>
    )
}