import {Text, View} from "react-native";
import {VStack} from "@gluestack-ui/themed";

type ProfileScreenProps = {
    balance: number
}
export const ProfileScreen = (props: ProfileScreenProps) => {

    props.balance = 100;
    return(
        <View>
           <Text>
               My Profile
           </Text>
            <VStack>
                <Text>
                BALANCE: ${props.balance}
                </Text>
            </VStack>
        </View>
    )
}