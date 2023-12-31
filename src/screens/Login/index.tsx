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
            <View style={styles.viewLoginMessage}>
              <Text style={{fontFamily: "Archivo_500Medium", fontSize: 16}}>Bem-vindo</Text>
              <Text style={styles.loginMessage}>Faça login na sua conta</Text>
            </View>
            <View style={styles.viewInputs}>
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
                placeholder="*********"
                style={styles.textInputs}
              />
            </View>
            <View style={styles.viewButtons}>
              <TouchableOpacity onPress={goToMainScreen} style={styles.mainButton}>
                <Text style={styles.textMainButton}>Entrar na conta</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={goToMainScreen} style={styles.AlternativeLoginButton}>
                <Image style={styles.iconGoogle} source={require('../../../assets/icon-google.png')}/>
                <Text style={styles.textAlternativeLoginButton}>Continue com Google</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewRegister}>
              <Text>Não tem uma conta?</Text>
              <TouchableOpacity onPress={() => console.log('cadastro')}>
                <Text style={styles.textRegister}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </SafeAreaView>
    ); 
  }