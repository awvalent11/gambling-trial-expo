import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {GluestackUIProvider, HStack, Pressable} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config"
import {LeagueButton} from "./components/LeagueButton";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./HomeScreen";
import {ProfileScreen} from "./ProfileScreen";
import {ClerkProvider, SignedIn, SignedOut, useUser} from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import {clerk} from "@clerk/clerk-expo/dist/singleton";

 const tokenCache = {
      getToken(key) {
        try {
             return SecureStore.getItemAsync(key);
            }
        catch (err) {
             return null;
            }
      },
  saveToken(key, value) {
        try {
            return SecureStore.setItemAsync(key, value);
            }
        catch (err) {
             return null;
            }
      },
};

export default function App() {
  const publishableKey = 'pk_test_b2JsaWdpbmctZG9yeS02MS5jbGVyay5hY2NvdW50cy5kZXYk'

  const Stack = createNativeStackNavigator();
  const onPressFunction = () => {
      console.log("2.5 men season 2 episode 1")
  }

  const getIsSignedIn = () => {

      return true;
  };

  let isSignedIn = getIsSignedIn();

    return (
  <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache} >
      <GluestackUIProvider config={config}>
          <NavigationContainer>
              <Stack.Navigator>
                  {isSignedIn ? (
                      <>
                          <Stack.Screen
                              name="Home"
                              component={HomeScreen}
                              options={{title: 'Welcome to The House'}}
                              style={styles.container}
                          />
                          <Stack.Screen name="Profile" component={ProfileScreen}/>
                          <Stack.Screen name="Settings" component={SettingsScreen}/>
                      </>
                  ) : (
                      <>
                          <Stack.Screen name="SignIn" component={SignInScreen}/>
                          <Stack.Screen name="SignUp" component={SignUpScreen}/>
                      </>
                  )}
              </Stack.Navigator>
          </NavigationContainer>
      </GluestackUIProvider>
  </ClerkProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});