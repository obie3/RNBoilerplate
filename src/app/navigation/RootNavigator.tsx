
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '@features/auth/screens/LoginScreen'
import { TransferScreen } from '@features/transfer/screens/TransferScreen'

const Stack=createNativeStackNavigator()

export const RootNavigator=()=> (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Transfer" component={TransferScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)
