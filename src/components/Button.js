import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({onPress,title}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "grey" }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    buttonOuterContainer: {
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
})

export default Button;
