import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import products from "../data/products";

const ProductsScreen = ({ navigation }) => {
  const viewProductHandler = (itemData) => {
    console.log(itemData)
    navigation.navigate("Product Details", {
      productId: itemData.id,
    });
  };
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable style={styles.itemContainer} onPress={viewProductHandler.bind(this,item)}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
