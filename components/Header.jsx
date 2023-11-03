import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <Text className="text-xl font-bold dark:text-white">VIP Brand</Text>

      <View className="flex-row items-center justify-center gap-3">
        <TouchableOpacity
          onPress={toggleColorScheme}
          className="rounded-full p-2"
        >
          {colorScheme === "light" ? (
            <FontAwesome name="moon-o" size={24} color="black" />
          ) : (
            <Ionicons name="sunny" size={24} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full p-2">
          <View className="relative">
            <Feather
              name="shopping-bag"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
            />
            <View className="absolute -bottom-1 -right-1 h-4 w-4 items-center justify-center rounded-full bg-red-500">
              <Text className="leading-0 text-[11px] text-white">10</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
