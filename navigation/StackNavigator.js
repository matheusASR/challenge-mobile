import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import CadastroStep1 from '../screens/CadastroStep1';
import CadastroStep2 from '../screens/CadastroStep2';
import CadastroStep3 from '../screens/CadastroStep3';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CadastroStep1" component={CadastroStep1} />
      <Stack.Screen name="CadastroStep2" component={CadastroStep2} />
      <Stack.Screen name="CadastroStep3" component={CadastroStep3} />
      <Stack.Screen name="MenuPrincipal" component={BottomTabs} />
    </Stack.Navigator>
  );
}
