import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, Platform, TextInput } from "react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";
import { styles } from "./styles";

export function Login() { 

    const isAndroid = Platform.OS === "android"

    const {navigate} = useNavigation()

    const goToMainScreen = () => {
      navigate("Home" as never)
    }

    return (
      <SafeAreaView style={[styles.container, {
        marginTop: isAndroid ? StatusBar.currentHeight : 0
      }]}>
        <View style={styles.appTitleView}>
          <Image source={require('../../../assets/pet-friendly-1.png')} />
          <Text style={styles.appTitle} allowFontScaling={false}>HelpDog</Text>
        </View>
        <View style={styles.contentContainer}>
          <Animated.View entering={FadeInRight} exiting={FadeOut}>
            <View style={{gap: 8}}>
              <Text>E-mail</Text>
              <TextInput
                autoCapitalize="none"
                placeholder="exemplo@gmail.com"
                style={styles.textInputs}
              />
              <Text>Senha</Text>
              <TextInput
                autoCapitalize="none"
                secureTextEntry
                placeholder="0123456789"
                style={styles.textInputs}
              />
            </View>
            <TouchableOpacity onPress={goToMainScreen} style={styles.mainButton}>
              <Text style={styles.textMainButton}>Entrar na Conta</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </SafeAreaView>
    ); 
  }