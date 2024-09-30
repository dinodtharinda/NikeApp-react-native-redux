import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "./screens/ProductScreen";
import { Platform, Pressable, Text } from "react-native";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options= {({ navigation }) => ({
            headerRight:()=> (
              <Pressable  style={{ flexDirection: "row",padding:10}} onPress={()=>navigation.navigate('Shopping Cart')}>
                <FontAwesome5 name="shopping-cart" size={18} color="grey" />
                <Text style={{marginLeft:5,fontWeight:'500'}}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{}}
        />
        <Stack.Screen name="Shopping Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
