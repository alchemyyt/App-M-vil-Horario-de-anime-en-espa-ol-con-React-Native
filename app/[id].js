import { Link } from "expo-router";
import React, { useState, useEffect } from "react";
import { Text, View, Image, SectionList, ScrollView } from "react-native";
import { getData } from "../lib/getAnimes";
import { useLocalSearchParams } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [anime, setAnime] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const firstFlagsImageUrl = [
    "https://a.storyblok.com/f/178900/36x36/28ba98a391/mexico-flag.png",
    "https://a.storyblok.com/f/178900/36x36/b48f44e520/costa-rica-flag.png",
    "https://a.storyblok.com/f/178900/36x36/ecb8e4cb20/guatemala-flag.png",
    "https://a.storyblok.com/f/178900/36x36/d345856721/honduras-flag.png",
    "https://a.storyblok.com/f/178900/36x36/a671b6f660/nicaragua-flag.png",
    "https://a.storyblok.com/f/178900/36x36/18a09ed2ed/el-salvador-flag.png",
  ];
  const secondFlagsImageUrl = [
    "https://a.storyblok.com/f/178900/36x36/06dc3ea84d/colombia-flag.png",
    "https://a.storyblok.com/f/178900/36x36/5a902b2c9a/ecuador-flag.png",
    "https://a.storyblok.com/f/178900/36x36/91ca2f9cd4/panama-flag.png",
    "https://a.storyblok.com/f/178900/36x36/4c4e2e3d41/peru-flag.png",
  ];
  const thirdFlagsImageUrl = [
    "https://a.storyblok.com/f/178900/36x36/c202196168/bolivia-flag.png",
    "https://a.storyblok.com/f/178900/36x36/4f71e16522/puerto-rico-flag.png",
    "https://a.storyblok.com/f/178900/36x36/d1e8dac389/republica-dominicana-flag.png",
    "https://a.storyblok.com/f/178900/36x36/37c31b9d31/venezuela-flag.png",
  ];
  const fourthFlagsImageUrl = [
    "https://a.storyblok.com/f/178900/36x36/114dfbc7d3/chile-flag.png",
    "https://a.storyblok.com/f/178900/36x36/5dc57ca01a/argentina-flag.png",
    "https://a.storyblok.com/f/178900/36x36/67ee92bb7b/paraguay-flag.png",
    "https://a.storyblok.com/f/178900/36x36/2d3a115338/uruguay-flag.png",
  ];
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getData(`es/animes/${id}`)
        .then(setAnime)
        .catch(setError)
        .finally(() => setIsLoading(false));
    }
  }, [id]);

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
    <ScrollView className=" w-full pt-4">
      {
        anime && (
          <View className="flex flex-col items-center text-center min-h-screen lg:w-11/12 lg:mx-auto  lg:px-6 ">
            <Text className="text-2xl font-bold">{anime.titles.esTitle}</Text>
            <Image
              className="w-96 h-56 m-2"
              source={{
                uri: anime.images.horizontalImage,
              }}
            />
            <Text className="m-3 text-center">{anime.synopsis}</Text>
            <View className=" lg:flex lg:gap-2 lg:items-first lg:m-auto">
              <View>
                <Text className="text-xl font-bold  bg-slate-200 border-2 border-gray-400 text-center">
                  Donde ver?
                </Text>
                <View>
                  <Link
                    href={anime.streamingService.animeUrl}
                    className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105 text-center text-xl"
                  >
                    {anime.streamingService.siteName}
                  </Link>
                </View>
                <View className=" m-auto mt-3 ">
                  <View>
                    <Text className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 ">
                      Hora de estreno
                    </Text>
                  </View>

                  <View className="flex flex-row  w-96 items-center">
                    {firstFlagsImageUrl.map((i) => (
                      <Image
                        key={i}
                        source={{
                          uri: i,
                        }}
                        className="w-6 h-6 m-2 "
                      />
                    ))}
                    <Text className="font-bold">
                      {` / ${anime.broadcast.mx}`}
                    </Text>
                  </View>
                  <View className="flex flex-row  w-96 items-center">
                    {secondFlagsImageUrl.map((i) => (
                      <Image
                        key={i}
                        source={{
                          uri: i,
                        }}
                        className="w-6 h-6 m-2 "
                      />
                    ))}
                    <Text className="font-bold">
                      {` / ${anime.broadcast.co}`}
                    </Text>
                  </View>
                  <View className="flex flex-row  w-96 items-center">
                    {thirdFlagsImageUrl.map((i) => (
                      <Image
                        key={i}
                        source={{
                          uri: i,
                        }}
                        className="w-6 h-6 m-2 "
                      />
                    ))}
                    <Text className="font-bold">
                      {` / ${anime.broadcast.ve}`}
                    </Text>
                  </View>
                  <View className="flex flex-row  w-96 items-center">
                    {fourthFlagsImageUrl.map((i) => (
                      <Image
                        key={i}
                        source={{
                          uri: i,
                        }}
                        className="w-6 h-6 m-2"
                      />
                    ))}
                    <Text className="font-bold">
                      {` / ${anime.broadcast.ar}`}
                    </Text>
                  </View>
                  <View className="flex flex-row  w-96 items-center">
                    <Image
                      source={{
                        uri: "https://a.storyblok.com/f/178900/36x36/2e5e6cb815/spain-flag.png",
                      }}
                      className="w-6 h-6 m-2"
                    />
                    <Text className="font-bold">
                      {` / ${anime.broadcast.es}`}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="mt-4 flex items-center">
                <Text className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 w-full">
                  Informacion
                </Text>
                <Text className="font-bold">
                  {`Temporada :`}
                  <Link
                    href={`./temporadas/${anime.season}-${anime.year}`}
                    className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105"
                  >
                    {` ${anime.season} ${anime.year}`}
                  </Link>
                </Text>

                <Text className="font-bold">
                  {`Duracion: ${anime.duration} min`}
                </Text>
                <Text className="font-bold">
                  {`Dia de estreno: ${anime.broadcast.day}`}
                </Text>
              </View>
              <View className="mt-4   ">
                <Text className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 w-full">
                  Titulos
                </Text>
                <Text className=" font-bold px-10 text-center">{`Japones: ${anime.titles.originalTitle}`}</Text>
                <Text className=" font-bold px-10 text-center">{`Ingles: ${anime.titles.enTitle}`}</Text>
                <Text className=" font-bold px-10 text-center">
                  {`Español: ${anime.titles.esTitle}`}
                </Text>
              </View>
              <View className="mt-4 flex items-center  ">
                <Text className="font-bold text-xl text-center  bg-slate-200 border-2 border-gray-400 w-full">
                  Generos
                </Text>
                {anime.genres.map((element) => (
                  <Text key={element}>
                    <Link
                      href={`./generos/${element}`}
                      className="text-amber-500"
                    >
                      {element}
                    </Link>
                  </Text>
                ))}
              </View>
              <View className="flex items-center mt-4">
                <Text className="font-bold text-xl text-center bg-slate-200 border-2 border-gray-400 w-full">
                  Estudio
                </Text>
                <Link
                  href={`./estudios/${anime.studio}`}
                  className="text-amber-500 hover:text-amber-700 scale-100 transition-all duration-300 hover:scale-105"
                >
                  {anime.studio}
                </Link>
              </View>

              <View className="flex items-center mt-4">
                <Text className="font-bold text-xl text-center w-full bg-slate-200 border-2 border-gray-400 ">
                  Actores de doblaje
                </Text>
                <View>
                  {anime.voiceActors.map((element) => (
                    <Text key={element._id} className="text-center">
                      {element.character}:
                      <Link
                        href={element.wikiUrl}
                        className="text-amber-500 "
                        key={element._id}
                      >
                        {` ${element.voiceActorName} `}
                      </Link>
                    </Text>
                  ))}
                  <Text>
                    <Link
                      href={anime.doblajeWikiUrl}
                      className="text-amber-500 text-center"
                    >
                      Wiki
                    </Link>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )
        /*el condiciona de esta linea dice que solo va a renderizar el texto cuando anime no se nulo osea ya haya cargado sin ese condicional da error */
      }
      <Link href="/" className="text-blue-500">
        Volver
      </Link>
    </ScrollView>
  );
}
