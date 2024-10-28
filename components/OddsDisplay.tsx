import {Box, HStack, Text, VStack} from "@gluestack-ui/themed";
import {Colors} from "../Theme";
import dayjs from "dayjs";
import {green} from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import {odd} from "../dummy-data";


type OddsDisplayProps = {
    odd: odd
    oddsFormat: string
}
export const OddsDisplay = (props: OddsDisplayProps) => {
    const bet = {
        id: 3,
        home: "NY",
        away: "WAS",
        odds: 600,
        expiration: dayjs('2024-10-01'),
        position: 100,
        payoff: 600,
    }

    return(
        <VStack space='xs'>
            <Text
                fontFamily='Army-Medium'
                fontSize={12}
                color={Colors.zinc600}
            >
                {props.odd.sportsBook}
            </Text>
            <HStack
                alignItems='center'
                space='md'
            >
                <Box
                    justifyContent='center'
                    paddingHorizontal={15}
                    paddingVertical={1.5}
                    borderRadius={8}
                    borderWidth={1}
                    borderColor={
                        "$black"
                    }
                    backgroundColor={
                        "$green200"
                    }
                >
                    <Text
                        fontFamily='Army-Medium'
                        color={
                           ""
                        }
                        fontSize={12}
                    >
                        {props.odd.pointsSpread}
                    </Text>
                </Box>
            </HStack>
        </VStack>
    )
}