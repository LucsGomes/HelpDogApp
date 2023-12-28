import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StatusBar, Platform, SafeAreaView } from "react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";
import { styles } from "./styles";

export function Home() { 
    const isAndroid = Platform.OS === "android"

    const {navigate} = useNavigation()

    const goToLoginScreen = () => {
      navigate("Login" as never)
    }
  
    return (
      <SafeAreaView style={[styles.container, {
        marginTop: isAndroid ? StatusBar.currentHeight : 0
      }]}>
        <View style={styles.appTitleView}>
          <Image width={24} height={24} source={require('../../../assets/pet-friendly-1.png')} />
          <Text style={styles.appTitle}>HelpDog</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.viewSlogan}>
            <Image source={require('../../../assets/vector-1.png')}/>
            <Text style={styles.sloganText}>Ajude quem precisa de ajuda</Text>
          </View>
          <Text style={styles.textDescription}>Com apenas 1 real você pode me ajudar a alimentar cães de ruas.</Text>
          <Animated.View entering={FadeInRight} exiting={FadeOut} style={{gap: 20}}>
            <TouchableOpacity onPress={goToLoginScreen} style={styles.mainButton}>
              <Text style={styles.textMainButton}>Contribuir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToLoginScreen}>
              <Text style={styles.textContactButton}>Entrar em contato</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
          <Image style={styles.dogImage} source={require('../../../assets/img.png')}/>
      </SafeAreaView>
    ); 
  }