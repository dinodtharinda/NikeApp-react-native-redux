import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import products from "./src/data/products";
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductsScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ShoppingCart/>
     {/* <ProductsScreen /> */}
     {/* <ProductDetailsScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },

});
