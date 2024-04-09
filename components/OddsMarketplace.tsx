import axios from "axios";
import {VStack} from "@gluestack-ui/themed";
import {View, Text} from "react-native";

type OddsMarketplaceProps = {
    league:String
}

export const OddsMarketplace = () => {
    const games = axios.get("http")
    // games.map(game => return(
    //     <Odds
    // ))
    return(
            <View>
                <VStack>
                    <Text>
                        Odds get rendered here
                    </Text>
                </VStack>
            </View>
    )
}