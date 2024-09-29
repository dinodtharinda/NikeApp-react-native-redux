import { FlatList, StyleSheet, Text, View } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const ShoppingCartTotals = () => {
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>450,00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10,00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>460,00 US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.quantity + item.size + item.product.name}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <View style={styles.button}>
        <Button title="Checkout" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    padding: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "grey",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    width: "100%",
    position: "absolute",
    bottom: 30,
  },
});

export default ShoppingCart;
