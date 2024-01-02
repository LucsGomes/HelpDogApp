import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, StatusBar, Platform, SafeAreaView, Dimensions } from "react-native";
import Animated, { FadeInRight, FadeOut } from "react-native-reanimated";
import { styles } from "./styles";
import DogImage from  "../../../assets/img.png";
import Logo from "../../../assets/pet-friendly-1.png";
import PurpleLine from "../../../assets/vector-1.png";
import { usePhoneCall } from "../../hooks/usePhoneCall";

export function Home() { 
    const isAndroid = Platform.OS === "android"

    const {navigate} = useNavigation()

    const goToLoginScreen = () => {
      navigate("Login" as never)
    }

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(((dimensions.width * 10) / 9) *1.07);
    const imageWidth = dimensions.width;

    const {callToNumber} = usePhoneCall()
  
    return (
      <SafeAreaView style={[styles.container, {
        marginTop: isAndroid ? StatusBar.currentHeight : 0
      }]}>
        <View style={styles.appTitleView}>
          <Image source={Logo} />
          <Text style={styles.appTitle} allowFontScaling={false}>HelpDog</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.viewSlogan}>
            <Image source={PurpleLine}/>
            <Text style={styles.sloganText} allowFontScaling={false}>Ajude quem precisa de ajuda</Text>
          </View>
          <Text style={styles.textDescription} allowFontScaling={false}>Com apenas 1 real você pode me ajudar a alimentar cães de ruas.</Text>
          <Animated.View entering={FadeInRight} exiting={FadeOut} style={styles.viewButtons}>
            <TouchableOpacity onPress={goToLoginScreen} style={styles.mainButton}>
              <Text style={styles.textMainButton} allowFontScaling={false}>Contribuir</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={() => callToNumber('+552199999999')}>
                <Text style={styles.textContactButton}>Entrar em contato</Text>
          </TouchableOpacity>
          </Animated.View>
        </View>
        <View>
          <Image style={[styles.dogImage, { height: imageHeight, width: imageWidth, objectFit: "cover"}]} source={DogImage}/>
        </View>
      </SafeAreaView>
    ); 
  }