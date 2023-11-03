import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, Products } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const { colorScheme } = useColorScheme();
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1 bg-gray-200 dark:bg-black">
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <Header />
        <Products />
      </SafeAreaView>
    </Provider>
  );
}
