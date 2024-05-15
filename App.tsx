
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import { StyleSheet } from 'react-native';
import ContextShare from './src/contexts/ContextShare';


const Stack = createNativeStackNavigator();

function App() {
 

  return (
   <ContextShare>
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}
      options={{ headerShown: false }}
      />
      <Stack.Screen name='Cart' component={Cart}
      options={{
        title:"Your order",
        headerTitleAlign:"center",
        headerStyle:{
          backgroundColor:"#3AC77A"
        },
        headerTintColor: 'white',
          headerTitleStyle: {
            color: 'white',
          }
      }}
      />
  
    </Stack.Navigator>
   </NavigationContainer>
   </ContextShare>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
