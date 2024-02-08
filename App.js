import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
// import {GluestackUIProvider, HStack } from "@gluestack-ui/themed";
// import {config} from "@gluestack-ui/config"
export default function App() {
  return (
  // <GluestackUIProvider config={config}>
    <View style={styles.container}>
              <Text>Welcome to The House!</Text>
             {/*   <HStack*/}
             {/*      flexDirection='row'*/}
             {/*      justifyContent='space-between'*/}
             {/*      alignItems='center'*/}
             {/*      paddingHorizontal='$6'*/}
             {/*      backgroundColor='transparent'*/}
             {/*  >*/}
             {/*<Pressable onPress={onPressFunction}*/}
             {/*    sx={{borderWidth: '2px',*/}
             {/*    borderTopLeftRadius: '5px',*/}
             {/*    borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',*/}
             {/*    borderBottomRightRadius: '5px'}} padding='50px'>*/}
             {/*  <Text>My Wallet</Text>*/}
             {/*</Pressable>*/}
             {/*<Pressable onPress={onPressFunction} padding='50px'>*/}
             {/*  <Text>NFL</Text>*/}
             {/*</Pressable>*/}
             {/*  </HStack>*/}
              <StatusBar style="auto" />
     </View>
   // </GluestackUIProvider>
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
