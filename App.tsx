import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
import { useFonts, Rubik_400Regular, Rubik_500Medium } from "@expo-google-fonts/rubik";
import { Merriweather_900Black } from "@expo-google-fonts/merriweather";
import { Archivo_600SemiBold, Archivo_500Medium } from "@expo-google-fonts/archivo";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular, 
    Rubik_500Medium,
    Merriweather_900Black,
    Archivo_600SemiBold,
    Archivo_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
       <Routes/>
       <StatusBar style='auto'/>
    </NavigationContainer>
  );
}
