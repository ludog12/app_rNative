

import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/views/Home';
import DogList from './src/views/DogList';


export default function App() {
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer
      >

        <Stack.Navigator 
          initialRouteName="home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#5B8C94',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Inicio" component={Home} />
          <Stack.Screen name="dogList" component={DogList}/>
        </Stack.Navigator>

      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
