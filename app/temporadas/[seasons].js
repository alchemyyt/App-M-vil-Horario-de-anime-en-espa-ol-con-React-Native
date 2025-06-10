import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  SectionList,
  ScrollView,
  StyleSheet,
} from "react-native";
import { getData } from "../../lib/getAnimes";
import { useLocalSearchParams } from "expo-router";

export default function GenresDetail() {
  const { seasons } = useLocalSearchParams();
  let palabras = seasons.split("-");
  const [anime, setAnime] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (seasons) {
      setIsLoading(true);
      getData(`es/animes/seasons/${palabras[0]}?year=${palabras[1]}`)
        .then(setAnime)
        .catch(setError)
        .finally(() => setIsLoading(false));
    }
  }, [seasons]);

  if (isLoading) {
    return (
      <Text className="text-center text-xl font-bold border-2 p-2 border-black my-2 rounded-lg">
        Cargando...
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
    <ScrollView className=" flex">
      <Text className="text-2xl font-bold text-center">{`${palabras[0]}-${palabras[1]}`}</Text>
      {anime.map((element) => (
        <Link
          key={element._id}
          href={`../${element._id}`}
          className=" relative rounded-lg m-2"
        >
          <View className="relative rounded-lg  bg-blue-500">
            <Image
              key={element._id}
              style={styles.imagenVertical}
              source={{
                uri: element.images.verticalImage,
              }}
            ></Image>
            <Text className=" absolute bottom-0 overflow-hidden text-xl text-center text-black bg-white/30 font-bold p-1 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 w-full  ">
              {element.titles.esTitle}
            </Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  imagenVertical: {
    width: 280,
    height: 440,
  },
});
