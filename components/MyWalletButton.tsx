import {Text} from "react-native";
import {Pressable} from "@gluestack-ui/themed";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "../index";
import {ProfileScreen} from "../ProfileScreen";

type MyWalletButtonProps = {
    league: String;

}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MyWalletButton = (props: MyWalletButtonProps ) => {
    // const onPressFunction = () => {
    //     props.navigation.navigate('Profile')
    // }
    return(
        <Pressable
            // onPress={onPressFunction}
                   sx={{borderWidth: '$1',
                       borderRadius: '$sm',
                       backgroundColor: '$coolGray300'
                   }} padding='$10'>
            <Stack.Navigator>
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    // options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Pressable>
    )
}