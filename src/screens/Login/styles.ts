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
      justifyContent: "center"
    },
    textInputs: {
      //alignContent: "center"
      padding: 12,
      borderWidth: 1,
      borderColor: '#E8E8E8',
      backgroundColor: '#E8E8E8',
    },
    mainButton: {
      width: 181,
      height: 45,
      backgroundColor: '#713FFF',
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 40,
      gap: 10,
      marginTop: 16
    },
    textMainButton: {
      textAlign: "center",
      color: '#fff',
      fontFamily: 'Rubik_400Regular',
    }
  });