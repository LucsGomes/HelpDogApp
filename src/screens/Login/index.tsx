import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";

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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainButton: {
      width: 181,
      height: 45,
      backgroundColor: '#713FFF',
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 40,
      gap: 10
    },
    textMainButton: {
      textAlign: "center",
      color: '#fff',
    }
  });