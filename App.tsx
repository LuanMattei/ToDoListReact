import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importando os ícones Ionicons

import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; 
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray', 
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreens} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
