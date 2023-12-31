import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    appTitleView: {
      flexDirection: "row",
      gap: 6,
      marginTop: 18,
      alignSelf: "center",
      marginBottom: 60
    },
    appTitle: {
      color: "#3C184E",
      textAlign: 'center',
      fontFamily: 'Rubik_500Medium',
      fontSize: 18,
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start"
    },
    viewLoginMessage: {
      gap: 4
    },
    loginMessage: {
      color: "#1A202C",
      fontSize: 24,
      fontFamily: "Archivo_600SemiBold",
      marginBottom: 30
    },
    textInputs: {
      //alignContent: "center"
      width: 327,
      padding: 12,
      borderWidth: 1,
      borderColor: '#E8E8E8',
      backgroundColor: '#E8E8E8',
    },
    mainButton: {
      width: 327,
      height: 45,
      backgroundColor: '#713FFF',
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 4,
      gap: 10,
      marginTop: 16
    },
    textMainButton: {
      textAlign: "center",
      color: '#fff',
      fontFamily: 'Rubik_400Regular',
    },
    viewInputs: {
      gap: 16,
    },
    viewButtons: {
      gap: 18,
      alignItems: "center"
    },
    AlternativeLoginButton: {
      flexDirection: "row",
      gap: 6,
      width: 327,
      height: 45,
      backgroundColor: "#1A202C",
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center"
    },
    iconGoogle: {
      marginLeft: 4
    },
    textAlternativeLoginButton: {
      color: '#fff',
    },
    viewRegister: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 40,
      gap: 4
    },
    textRegister: {
      color: '#713FFF',
    }
  });