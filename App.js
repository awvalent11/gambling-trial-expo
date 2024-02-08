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

export default function App() {

  const Stack = createNativeStackNavigator();
  const onPressFunction = () => {
      console.log("2.5 men season 2 episode 1")
  }

  return (
  <GluestackUIProvider config={config}>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Welcome to The House'}}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
