import * as React from "react";
import { Text, Box, Pressable, theme } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center" p={10}>
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <Pressable
        onPress={() => navigation.navigate("IncDec")}
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 10,
        }}
      >
        <Text color={{ color: "white" }}>Screen Increment and Decrement</Text>
      </Pressable>
    </Box>
  );
}
