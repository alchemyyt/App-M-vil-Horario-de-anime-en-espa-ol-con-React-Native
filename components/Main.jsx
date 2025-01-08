import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Days from "./Days";
export default function App() {
  const weekDays = [
    { title: "Lunes", endpoint: "monday" },
    { title: "Martes", endpoint: "tuesday" },
    { title: "Miercoles", endpoint: "wednesday" },
    { title: "Jueves", endpoint: "thursday" },
    { title: "Viernes", endpoint: "friday" },
    { title: "Sabado", endpoint: "saturday" },
    { title: "Domingo", endpoint: "sunday" },
  ];
  const [selectedDay, setSelectedDay] = useState(null);
  const onPressButton = (e) => {
    setSelectedDay(e.title === selectedDay ? null : e.title); //si el estado es el mismo lo convierte en nulo si no cambia el estado por el dia del map
  };
  return (
    <ScrollView style={styles.container} className="w-full">
      {weekDays.map((day) => (
        <View key={`${day.title}`} className="flex items-center ">
          <Text style={styles.title} className="text-2xl mt-10 font-bold mb-2">
            {day.title}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressButton(day)}
            className="text-center"
          >
            <AntDesign name="downcircleo" size={24} color="black" />
          </TouchableOpacity>
          {selectedDay === day.title && ( //si el estado es igual al dia de la iteracion renderiza el componente
            <Days endPoint={`es/schedule/${day.endpoint}`} />
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
});
