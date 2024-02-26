import {StyleSheet, Text, View} from "react-native";
import {HStack} from "@gluestack-ui/themed";
import {LeagueButton} from "./components/LeagueButton";
import React from "react";
import {StatusBar} from "expo-status-bar";
import {MyWalletButton} from "./components/MyWalletButton";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./index";
import {ProfileScreen} from "./ProfileScreen";
import {LeagueScreen} from "./components/LeagueScreen";


export const HomeScreen = ({navigation}) => {

    const Stack = createNativeStackNavigator<RootStackParamList>();



    return (<>
            <View style={styles.container}>
                <Text>Welcome to The House</Text>
                <HStack padding={'$3'}>
                    <MyWalletButton league={'My Wallet'} />
                    <LeagueButton league={'NFL'} navigation={navigation}/>
                    <LeagueButton league={'The Horses'} navigation={navigation} />
                </HStack>
                <StatusBar style="auto" />
            </View>
            {/*<Stack.Navigator>*/}
            {/*    <Stack.Screen name="Profile" component={ProfileScreen} />*/}
            {/*    <Stack.Screen name="League" component={LeagueScreen} />*/}
            {/* </Stack.Navigator>*/}
    </>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});