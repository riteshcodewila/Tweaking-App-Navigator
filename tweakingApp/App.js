import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Screens/Profile';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerBackVisible: false, title: "Dashboard" }} />
        <Stack.Screen name="Profile" component={Profile} options={{title:"Go To User Settings"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
