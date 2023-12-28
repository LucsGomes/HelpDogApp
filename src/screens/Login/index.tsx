import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";
import { styles } from "./styles";

export function Login() { 
    const {navigate} = useNavigation()
    function navega() {
      navigate("Home" as never)
    }
  
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Animated.View entering={FadeInRight} exiting={FadeOut}>
          <TouchableOpacity onPress={() => navega()} style={styles.mainButton}>
            <Text style={styles.textMainButton}>Contribuir</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    ); 
  }