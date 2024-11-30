import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getData } from "../lib/getAnimes";

export default function Days({ titulo, endPoint }) {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    getData(endPoint).then((animes) => {
      setAnimes(animes);
    });
  }, []);

  return (
    <View className="">
      <Text>{titulo}</Text>
      {animes.map((anime) => (
        <View key={anime._id}>
          <Text>{anime.titles.esTitle}</Text>
        </View>
      ))}
    </View>
  );
}
