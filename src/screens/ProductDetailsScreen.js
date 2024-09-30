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
import Button from "../components/Button";

const ProductDetailsScreen = ({navigation,route}) => {
  const productId = route.params.productId;
  const product = products.find(product => product.id === productId);
  

  const { width } = useWindowDimensions();

  const addToCart = () => {
   navigation.navigate('Shopping Cart')
  };

  return (
    <>
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
      <View style={styles.button}>
        <Button onPress={addToCart} title="Add to cart" />
      </View>
    </>
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
  button: {
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
});

export default ProductDetailsScreen;
