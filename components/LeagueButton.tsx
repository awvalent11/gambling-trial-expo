import {Text} from "react-native";
import {Pressable} from "@gluestack-ui/themed";
import React from "react";

type LeagueButtonProps = {
    league: String;
}
export const LeagueButton = (props: LeagueButtonProps ) => {
    const onPressFunction = () => {

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
