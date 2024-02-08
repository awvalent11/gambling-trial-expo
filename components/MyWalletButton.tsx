import {Text} from "react-native";
import {Pressable} from "@gluestack-ui/themed";
import React from "react";

type MyWalletButtonProps = {
    league: String;
    navigation: any
}
export const MyWalletButton = (props: MyWalletButtonProps ) => {
    const onPressFunction = () => {
        props.navigation.navigate('Profile')
    }
    return(
        <Pressable onPress={onPressFunction}
                   sx={{borderWidth: '$1',
                       borderRadius: '$sm',
                       backgroundColor: '$coolGray300'
                   }} padding='$10'>
            <Text>{props.league}</Text>
        </Pressable>
    )
}