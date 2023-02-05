import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Font from "expo-font";
import { StyleSheet } from "react-native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

interface Article {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
}

const HomeScreen = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=tech&sortBy=publishedAt&language=en&apiKey=2a729b07675643febeac3c27d5301226`
      );
      setArticles(response.data.articles);
    };
    fetchData();
  }, []);

  useEffect(() => {
    Font.loadAsync({
      CST_FONT: require("../fonts/CST_FONT.ttf"),
    });
  }, []);

  const styles = StyleSheet.create({
    text: {
      fontFamily: "CST_FONT",
    },
  });

  const hLine = StyleSheet.create({
    line: {
      borderBottomColor: "#FBD243",
      borderBottomWidth: 1,
      width: "100%",
      marginTop: 40,
    },
  });

  return (
    <SafeAreaView className="flex-1 bg-slate-800 relative">
      <ScrollView>
        {/* Sign in button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Paywall")}
          className="absolute z-100 top-4 right-5 items-center"
        >
          <Ionicons name="person-circle" size={35} color="#FFFFFF" />
          <Text className="text-center text-white">SIGN UP</Text>
        </TouchableOpacity>

        {/* Illuminate logo */}
        <Image
          source={require("../assets/illuminate-logo.png")}
          className="top-7 left-8"
        />

        <View className="mt-12 ml-3 mr-3">
          <FlatList
            data={articles}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View className="m-5">
                <Text style={styles.text} className="text-white text-xl">
                  {item.title}
                </Text>
                <Text className="text-gray-400 mt-3 mb-4">{item.author}</Text>
                <Text className="text-white font-light">
                  {item.description}
                </Text>
                <View style={hLine.line} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
