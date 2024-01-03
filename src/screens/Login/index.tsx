import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";
import { styles } from "./styles";
import { RememberMe } from "../../components/Remember";
import backButton from "../../../assets/arrow-left.png";

export function Login() {
  const isAndroid = Platform.OS === "android";

  const { navigate } = useNavigation();

  const goToMainScreen = () => {
    navigate("Home" as never);
  };

  return (
    <Animated.View entering={FadeInRight} exiting={FadeOut} style={{ flex: 1 }}>
      <SafeAreaView
        style={[
          styles.container,
          {
            marginTop: isAndroid ? StatusBar.currentHeight : 0,
          },
        ]}
      >
        <View style={styles.appTitleView}>
          <TouchableOpacity onPress={goToMainScreen}>
            <Image style={styles.backButtonImage} source={backButton} />
          </TouchableOpacity>
          <View style={styles.viewLogo}>
            <Image source={require("../../../assets/pet-friendly-1.png")} />
            <Text style={styles.appTitle} allowFontScaling={false}>
              HelpDog
            </Text>
          </View>
          <View style={styles.backButtonImage}></View>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <View style={styles.viewLoginMessage}>
              <Text style={styles.welcomeMessage}>Bem-vindo</Text>
              <Text style={styles.loginMessage}>Faça login na sua conta</Text>
            </View>
            <View style={styles.viewInputs}>
              <Text>E-mail</Text>
              <TextInput
                autoCapitalize="none"
                placeholder="exemplo@gmail.com"
                keyboardType="email-address"
                autoComplete="email"
                style={styles.textInputs}
              />
              <Text>Senha</Text>
              <TextInput
                autoCapitalize="none"
                secureTextEntry
                placeholder="*********"
                keyboardType="default"
                autoComplete="password"
                style={styles.textInputs}
              />
            </View>
            <View style={styles.rememberMeView}>
              <RememberMe />
              <TouchableOpacity>
                <Text style={{ color: "#713FFF" }}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewButtons}>
            <TouchableOpacity
              onPress={goToMainScreen}
              style={styles.mainButton}
            >
              <Text style={styles.textMainButton}>Entrar na conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={goToMainScreen}
              style={styles.AlternativeLoginButton}
            >
              <Image
                style={styles.iconGoogle}
                source={require("../../../assets/icon-google.png")}
              />
              <Text style={styles.textAlternativeLoginButton}>
                Continue com Google
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewRegister}>
            <Text>Não tem uma conta?</Text>
            <TouchableOpacity onPress={() => console.log("cadastro")}>
              <Text style={styles.textRegister}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}
