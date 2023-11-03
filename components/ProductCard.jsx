import { useState } from "react";
import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import PropTypes from "prop-types";

const ProductCard = ({
  image,
  category,
  title,
  price,
  description,
  isLastCard,
  onLoadMore,
}) => {
  const [count, setCount] = useState(1);
  const [showText, setShowText] = useState(false);
  const { colorScheme } = useColorScheme();

  const handleLoadMore = () => {
    if (isLastCard) {
      onLoadMore();
    }
  };
  return (
    <>
      <View className="my-5 w-full rounded-3xl bg-white p-5 dark:bg-gray-500/30">
        <View className="rounded-xl bg-white">
          <Image
            source={{ uri: image }}
            className="h-72 w-full"
            style={{ resizeMode: "contain" }}
          />
        </View>
        <View className="mt-5">
          <Text className="text-sm text-black/60 dark:text-white/70">
            {category}
          </Text>
          <Text className="text-lg font-semibold dark:text-white">{title}</Text>
          <View className="my-3 flex-row justify-between">
            <View className="flex-row items-center gap-3">
              <AntDesign
                name="minuscircleo"
                size={24}
                color={colorScheme === "light" ? "black" : "white"}
                onPress={() => setCount(count - 1)}
              />
              <Text className="text-xl dark:text-white">{count}</Text>
              <AntDesign
                name="pluscircleo"
                size={24}
                color={colorScheme === "light" ? "black" : "white"}
                onPress={() => setCount(count + 1)}
              />
            </View>
            <Text className="text-2xl font-extrabold tabular-nums dark:text-white">
              ${price * count}
            </Text>
          </View>
          <Text
            numberOfLines={!showText ? 2 : 0}
            className="text-sm text-black/90 dark:text-white/70"
            onPress={() => setShowText((prev) => !prev)}
          >
            {description}
          </Text>
          <TouchableOpacity className="mt-5 w-10/12 flex-row justify-center self-center rounded-full bg-black p-3 dark:bg-white">
            <AntDesign
              name="shoppingcart"
              size={24}
              color={colorScheme === "light" ? "white" : "black"}
            />
            <Text className="ml-3 text-base font-bold text-white dark:text-black">
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {isLastCard && (
        <Pressable
          className="my-2 w-5/12 flex-row items-center justify-center self-center rounded-full bg-black p-2 dark:bg-white"
          onPress={handleLoadMore}
        >
          <AntDesign
            name="reload1"
            size={24}
            color={colorScheme === "light" ? "white" : "black"}
          />
          <Text className="ml-3 text-base font-bold text-white dark:text-black">
            More
          </Text>
        </Pressable>
      )}
    </>
  );
};

ProductCard.prototype = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
