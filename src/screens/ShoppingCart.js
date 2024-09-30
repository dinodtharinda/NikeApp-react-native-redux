import { FlatList, StyleSheet, Text, View } from "react-native";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
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
