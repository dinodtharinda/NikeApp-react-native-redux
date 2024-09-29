import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import products from "./src/data/products";
import ProductsScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
     {/* <ProductsScreen /> */}
     <ProductDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

});
