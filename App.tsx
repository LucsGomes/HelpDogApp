import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animated, { FadeIn, FadeInLeft, FadeInRight, FadeOut } from 'react-native-reanimated';


function HomeScreen() {
  const {navigate} = useNavigation()
  function navega() {
    setTimeout(() => {navigate('Login' as never)}, 6*1000)
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Animated.View entering={FadeInRight} exiting={FadeOut}>
        <TouchableOpacity onPress={() => navega()}>
          <Text style={styles.TouchableOpacity} >Navegar</Text>
        </TouchableOpacity>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  ); 
}

function LoginScreen() {
  const {navigate} = useNavigation()
  function navega() {
    setTimeout(() => {navigate('Home' as never)}, 6*1000)
  }
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navega()}>
        <Text style={styles.TouchableOpacity} >Navegar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  ); 
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{header: () => null}} name="Home" component={HomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchableOpacity: {
    backgroundColor: 'tomato',
    padding: 3,
    borderRadius: 8
  }
});
