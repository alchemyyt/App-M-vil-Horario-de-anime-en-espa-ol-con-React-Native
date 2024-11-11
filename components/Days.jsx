import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { getData } from "../lib/getAnimes";
const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 500,
  },
});
export default function Days({ titulo, endPoint }) {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    getData(endPoint).then((animes) => {
      setAnimes(animes);
    });
  }, []);

  return (
    <View className="bg-red-600">
      <Text>{titulo}</Text>
      {animes.map((anime) => (
        <View key={anime._id}>
          <Text>{anime.titles.esTitle}</Text>
          <Image
            style={styles.logo}
            source={{
              uri: anime.images.verticalImage,
            }}
          />
        </View>
      ))}
    </View>
  );
}
