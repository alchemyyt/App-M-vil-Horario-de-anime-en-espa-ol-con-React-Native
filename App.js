import React, { useState, useEffect } from "react";
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
  const [clickedDay, setClickedDay] = useState(false);
  const handleClickDay = () => {
    setClickedDay(!clickedDay);
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={handleClickDay}>
        <Days titulo="Lunes" endPoint="es/schedule/monday" onCli />
      </TouchableWithoutFeedback>
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
{
  /**<ScrollView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={handleClickDay}
        className="bg-blue-500"
      >
        {clickedDay ? (
          <Days titulo="Lunes" endPoint="es/schedule/monday" />
        ) : null}
      </TouchableWithoutFeedback>
    </ScrollView>s */
}
