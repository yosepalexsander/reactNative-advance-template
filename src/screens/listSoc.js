import * as React from "react";
import { Text, Box, FlatList, Pressable } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  // Set Dummy Data with Array
  const socialMedia = ["YouTube", "Instagram", "Netflix"];
  // Make Function handle press to get value per list
  const handlePress = (value) => {
    navigation.navigate("Detail Social", { name: value });
  };
  return (
    <Box safeArea bg="primary.400" flex={1} alignItems="center" justifyContent="center" p={10}>
      <FlatList
        data={socialMedia}
        renderItem={({ item }) => (
          <Pressable key={item} onPress={() => handlePress(item)}>
            <Text>{item}</Text>
          </Pressable>
        )}
      />
    </Box>
  );
}
