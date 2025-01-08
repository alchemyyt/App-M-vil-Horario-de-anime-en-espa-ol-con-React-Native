import { View, Text, Image, StyleSheet, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { getData } from "../lib/getAnimes";
import { Link } from "expo-router";

export default function Days({ endPoint }) {
  const [animes, setAnimes] = useState([]); //inicia es estado de anime con un array vacio
  const [error, setError] = useState(null); //inicia el estado un posible error en nulo
  const [isLoading, setIsLoading] = useState(false); //inicia el estado de cargando en falso
  useEffect(() => {
    setIsLoading(true); //cambia el estado de cargado a verdadero
    getData(endPoint) //ejecuta un fetch al api de REST de anime
      .then((animes) => {
        setAnimes(animes); //cambia el estado de anime y agrega todos los datos array
      })
      .catch(setError) //captura el error de haberlo
      .finally(() => setIsLoading(false)); //cambia el estado de cargando a cargado
  }, []);
  if (isLoading) {
    return (
      <Text className="bg-gray-500 border-2 border-black m-2 p-2 text-center text-xl font-bold text-white">
        Loading...
      </Text>
    );
  }

  if (error) {
    return (
      <Text className="bg-gray-500 border-2 border-black m-2 p-2 text-center text-xl font-bold text-white">
        Error fetching data: {error.message}
      </Text>
    );
  }

  return (
    <View className="bg-gray-500 border-2 border-black m-2 p-2">
      {animes && animes.length === 0 ? (
        <Text className="text-center text-xl font-bold text-white">
          Hoy no se emite ningun anime
        </Text>
      ) : (
        animes.map((anime) => (
          <Link key={anime._id} href={anime._id}>
            <View className="relative rounded-lg m-2">
              <Image
                style={styles.imagenVertical}
                source={{
                  uri: anime.images.verticalImage,
                }}
              />
              <Text className="absolute bottom-0 w-full text-2xl  text-center overflow-hidden font-bold text-amber-500 m-1  ">
                {anime.titles.esTitle}
              </Text>
            </View>
          </Link>
        ))
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  imagenVertical: {
    width: 280,
    height: 440,
  },
});
