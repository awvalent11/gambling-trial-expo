import {Text} from "react-native";
import {Pressable} from "@gluestack-ui/themed";
import React from "react";

type LeagueButtonProps = {
    league: String;
    navigation: any
}
export const LeagueButton = (props: LeagueButtonProps ) => {
    const onPressFunction = () => {
        props.navigation.navigate()
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
