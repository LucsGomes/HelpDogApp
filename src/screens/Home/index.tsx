import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";
import { styles } from "./styles";

export function Home() { 
    const {navigate} = useNavigation()

    const goToLoginScreen = () => {
      navigate("Login" as never)
    }
  
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Animated.View entering={FadeInRight} exiting={FadeOut}>
          <TouchableOpacity onPress={goToLoginScreen} style={styles.mainButton}>
            <Text style={styles.textMainButton}>Contribuir</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    ); 
  }