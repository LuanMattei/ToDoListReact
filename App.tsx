import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RandomColorHeaderTitle from './src/RandomColorHeaderTitle'; 

import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 2, // Defina a largura da borda inferior
            borderBottomColor: 'rgb(216, 216, 216)', // Defina a cor da borda inferior
          },
          headerTitleAlign: 'center', // Centralize o título do cabeçalho
          headerTitle: props => (
            <View>
              <RandomColorHeaderTitle title="To do List" />
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
