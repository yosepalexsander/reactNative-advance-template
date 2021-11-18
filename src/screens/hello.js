import * as React from "react";
import { Text, Box } from "native-base";
import { Pressable } from "react-native";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <Pressable
        onPress={() => navigation.navigate("InDec")}
        style={{
          backgroundColor: "whitesmoke",
          height: 40,
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text color="primary.500">Go To Screen Increment Decrement</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("Signin")}
        style={{
          backgroundColor: "whitesmoke",
          height: 40,
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text color="primary.500">Go To Screen Sign in</Text>
      </Pressable>
    </Box>
  );
}
