import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import SignUpScreen from "./clerk-screens/SignUpScreen";
import SignInScreen from "./clerk-screens/SignInScreen";
import VerifyCodeScreen from "./clerk-screens/VerifyCodeScreen";
import MyProfileScreen from "./clerk-screens/MyProfileScreen";
import LinkingConfiguration from "./auth-screens/LinkingConfiguration";
import { ClerkLoaded, useUser } from "@clerk/clerk-expo";
import {ProfileScreen} from "./ProfileScreen";
import {HomeScreen} from "./HomeScreen";
import {OddsMarketplace} from "./components/OddsMarketplace";
import {OddsCard} from "./components/OddsCard";

export type RootStackParamList = {
    Root: undefined;
    SignUp: undefined;
    SignIn: undefined;
    Profile: undefined;
    VerifyCode: undefined;
    Home: undefined;
    League: undefined;
    OddsMarketplace: undefined;
};

export default function Navigation() {
    return (
        <NavigationContainer linking={LinkingConfiguration}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Read more about the protected routes pattern in React Native
 *
 * https://reactnavigation.org/docs/auth-flow
 */
const RootNavigator = () => {
    const { isSignedIn, user } = useUser();
    //const userEmail = user.emailAddresses;

    return (
        <ClerkLoaded>
            <Stack.Navigator>
                {isSignedIn ? (
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: "Home" }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="SignUp"
                            component={SignUpScreen}
                            options={{ title: "Sign Up" }}
                        />
                        <Stack.Screen
                            name="SignIn"
                            component={SignInScreen}
                            options={{ title: "Sign In" }}
                        />
                        <Stack.Screen
                            name="VerifyCode"
                            component={VerifyCodeScreen}
                            options={{ title: "Sign Up" }}
                        />
                    </>
                )}
            </Stack.Navigator>
        </ClerkLoaded>
    );
};
