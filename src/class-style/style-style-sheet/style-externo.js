import {Platform, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Platform.OS === 'ios' ? "blue" : "red",
    },
    title: {
      fontSize: 50,
      fontWeight: "bold",
      color: "white",
    },
    text: {
      paddingTop: 20,
      fontSize: 30,
      color: "yellow"
    },
  });