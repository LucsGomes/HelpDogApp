import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "space-between"
    },
    appTitleView: {
      flexDirection: "row",
      gap: 6,
      marginTop: 18,
      alignSelf: "center",
      marginBottom: 60
    },
    contentView: {
      flex: 1,
      alignItems: "center", 
      justifyContent: "center",
      gap: 18,
    },
    appTitle: {
      color: "#3C184E",
      textAlign: 'center',
      fontFamily: 'Rubik_500Medium',
      fontSize: 18,
    },
    viewSlogan: {
      flexDirection: "column-reverse"
    },
    sloganText: {
      fontFamily: "Merriweather_900Black",
      color: "#3C184E",
      fontSize: 32,
      width: 264,
      textAlign: "center"
    },
    textDescription: {
      color: "#3C184E",
      textAlign: 'center',
      marginBottom: 10,
      fontFamily: 'Rubik_400Regular',
      fontSize: 18,
    },
    mainButton: {
      width: 181,
      height: 44,
      backgroundColor: '#713FFF',
      paddingVertical: 12,
      paddingHorizontal: 4,
      borderRadius: 40,
    },
    textMainButton: {
      textAlign: "center",
      fontFamily: 'Rubik_400Regular',
      fontSize: 18,
      color: '#fff',
    },
    textContactButton: {
      textAlign: "center",
      color: '#3C184E',
      fontFamily: 'Rubik_400Regular',
      fontSize: 18,
    },
    dogImage: {
      alignSelf: "flex-end",
      //flex: 2
    }
  });