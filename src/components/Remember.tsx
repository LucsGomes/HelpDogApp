import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { StyleSheet } from "react-native";

function RememberMe() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}/>
        <Text style={styles.text}>Lembre de mim</Text>
    </View>
  )
  ;
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkbox: {
      borderRadius: 9999,
      borderColor: "#E8E8E8",
      backgroundColor: "#F7FAFC",
      marginRight: 8,
    },
    text: {
      fontFamily: "Archivo_500Medium",
      fontSize: 14,
      lineHeight: 16,
      color: "#1A202C",
    },
  })

export { RememberMe }