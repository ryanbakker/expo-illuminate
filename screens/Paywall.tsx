import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall"
>;

const Paywall = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="bg-[#0f1b28] flex-1">
      <View className="m-10 mb-4 space-y-2">
        <Text className="text-2xl text-center text-white font-bold">
          illuminate Pro
        </Text>
        <Text className="text-center text-white">
          Upgrade to access all Pro Features
        </Text>
      </View>

      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-0 right-0 p-5"
      >
        <Ionicons name="md-close-circle-sharp" size={32} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Logo */}
      <View className="items-center">
        <MaterialCommunityIcons
          name="newspaper-plus"
          size={150}
          color="#E5962D"
        />
      </View>

      {/* Content */}
      <View className="space-y-5 px-10 py-5">
        <View className="flex-row space-x-7 items-center">
          <Ionicons name="checkmark-circle" size={32} color="#E5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to Pro Articles
            </Text>
            <Text className="text-white text-sm font-extralight">
              Enjoy full access to all of our pro news articles. Posted daily.
              {""}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-7 items-center">
          <Ionicons name="checkmark-circle" size={32} color="#E5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Advanced Search Feature
            </Text>
            <Text className="text-white text-sm font-extralight">
              Get our advanced search feature, to quickly find articles.{""}
            </Text>
          </View>
        </View>

        <View className="flex-row space-x-7 items-center">
          <Ionicons name="checkmark-circle" size={32} color="#E5962D" />
          <View className="flex-1">
            <Text className="text-white font-bold text-lg">
              Access to Article Archive
            </Text>
            <Text className="text-white text-sm font-extralight">
              Full access to our entire article database.
            </Text>
          </View>
        </View>
      </View>

      {/* Monthly Subscribe */}
      <TouchableOpacity
        onPress={() => {
          Alert.alert("You are now subscribed to the monthly plan!");
        }}
        className="items-center px-10 py-4 bg-[#E5962D] mx-10 rounded-full mb-2"
      >
        <Text className="text-white text-md text-center font-bold mb-1">
          1 Week Free Trial
        </Text>
        <Text className="text-white">$6.99 / Month</Text>
      </TouchableOpacity>

      {/* Annual Subscribe */}
      <TouchableOpacity
        onPress={() => {
          Alert.alert("You are now subscribed to the yearly plan!");
        }}
        className="items-center px-10 py-4 border-2 border-[#E5962D] mx-10 rounded-full mt-2"
      >
        <Text className="text-white text-md text-center font-bold mb-1">
          Save $23.89 Annually
        </Text>
        <Text className="text-white">$59.99 / Year</Text>
      </TouchableOpacity>

      {/* Restore Purchases */}
      <TouchableOpacity
        onPress={() => {
          Alert.alert("Your purchases have been restored!");
        }}
        className="m-5"
      >
        <Text className="text-center text-[#E5962D]">Restore Purchases</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Paywall;
