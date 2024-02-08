import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {GluestackUIProvider, HStack, Pressable} from "@gluestack-ui/themed";
import {config} from "@gluestack-ui/config"

export default function App() {
  const onPressFunction = () => {
      console.log("2.5 men season 2 episode 1")
  }

  return (
  <GluestackUIProvider config={config}>
    <View style={styles.container}>
              <Text>Welcome to The House</Text>
        <HStack padding={'50px'}>

             <Pressable onPress={onPressFunction}
                 sx={{borderWidth: '2px',
                 borderTopLeftRadius: '5px',
                 borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                 borderBottomRightRadius: '5px',
                 backgroundColor: '$lightBlue200'
             }} margin='500px' alignItems={'center'} justifyContent={'center'}>
               <Text>My Wallet</Text>
             </Pressable>
             <Pressable onPress={onPressFunction}
                        sx={{borderWidth: '20px',
                            borderTopLeftRadius: '5px',
                            borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                            borderBottomRightRadius: '5px',
                            backgroundColor: '$coolGray300'
                        }} padding='500px'>
               <Text>NFL</Text>
             </Pressable>
        </HStack>
              <StatusBar style="auto" />
     </View>
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
