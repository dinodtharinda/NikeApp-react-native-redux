import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import products from "./src/data/products";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from "./src/navigation";
import {Provider} from 'react-redux'
import { store } from "./src/store";
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
  return (
   <Provider store={store}>
     <SafeAreaView style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff",
  },
});
