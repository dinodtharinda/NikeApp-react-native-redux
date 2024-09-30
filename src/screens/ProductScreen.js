import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";

/* 
state.prod.products
state ==> index
prod is name of the product attribute. that assign to product slice
products is products  in the product slice. It could be inital state
*/

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const viewProductHandler = (item) => {
    //update selected product
    dispatch(productsSlice.actions.setSelectedProduct(item.id));

    navigation.navigate("Product Details");
  };
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          android_ripple={{ color: "grey" }}
          style={styles.itemContainer}
          onPress={viewProductHandler.bind(this, item)}
        >
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
