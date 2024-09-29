import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = products[0];

  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("add to cart");
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          onPress={addToCart}
          android_ripple={{ color: "grey" }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
    textAlign: "justify",
  },
  buttonOuterContainer: {
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    borderRadius: 100,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "black",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default ProductDetailsScreen;
