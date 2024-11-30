import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Days from "./components/Days";
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Days titulo="Lunes" endPoint="es/schedule/monday" />
      <Days titulo="Martes" endPoint="es/schedule/tuesday" />
      <Days titulo="Miercoles" endPoint="es/schedule/wednesday" />
      <Days titulo="Jueves" endPoint="es/schedule/thursday" />
      <Days titulo="Viernes" endPoint="es/schedule/friday" />
      <Days titulo="Sabado" endPoint="es/schedule/saturday" />
      <Days titulo="Domingo" endPoint="es/schedule/sunday" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
