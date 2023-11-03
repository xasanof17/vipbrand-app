import { useEffect, useState, useContext } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useColorScheme } from "nativewind";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productsSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const { products, } = useAppContext();
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const { colorScheme } = useColorScheme();
  // const products = useSelector((state) => state.products.products);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(2);

  const fetchProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await res.json();
    setLoading(false);
    setRefreshing(false);
    setProducts(data);
  };

  useEffect(() => {
    // dispatch(setProducts(fetchProducts()));
    fetchProducts();
  }, [limit]);

  const handleRefresh = () => {
    setRefreshing(true);
    setLimit(limit + 2);
    fetchProducts();
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={colorScheme === "dark" ? "#fff" : "#000"}
      />
    );
  }

  return (
    <View className="flex-1">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <ProductCard
            {...item}
            isLastCard={index === products.length - 1}
            onLoadMore={handleRefresh}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default Products;
