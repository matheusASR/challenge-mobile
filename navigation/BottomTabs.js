import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RecomendacoesMenu from '../screens/Recomendacoes';
import PerfilMenu from '../screens/Perfil';
import InvestimentosMenu from '../screens/Investimentos';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Recomendações') iconName = 'home';
          else if (route.name === 'Perfil') iconName = 'person';
          else if (route.name === 'Investimentos') iconName = 'trending-up';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: { backgroundColor: '#000' },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Recomendações" component={RecomendacoesMenu} />
      <Tab.Screen name="Perfil" component={PerfilMenu} />
      <Tab.Screen name="Investimentos" component={InvestimentosMenu} />
    </Tab.Navigator>
  );
}