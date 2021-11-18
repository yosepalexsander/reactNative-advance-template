import axios from "axios";
import React from "react";
import { View, Text, Button, StyleSheet, FlatList, RefreshControl } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios

const PostDetail = (props) => {
  //init Props
  const title = props.route.params.title;
  const body = props.route.params.body;
  const id = props.route.params.id;

  //Init State
  const [comments, setComments] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // Create LifeCycle
  React.useEffect(() => {
    //Function Exception
    getComments();
  }, []);

  // Create Function to fetch
  const getComments = () => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        setComments(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      });
  };

  //   Create Component List
  const _renderItem = ({ item }) => {
    return (
      <ListItem key={item.id.toString()} bottomDivider>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>{item.title}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
            {item.name} - {item.body}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        {title}
      </Text>
      <Text style={{ marginTop: 20 }}>{body}</Text>
      <Text style={{ marginTop: 20 }}>Comments</Text>
      {/* Render Component List */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
        refreshing={isLoading}
        onRefresh={getComments}
        nestedScrollEnabled
      />
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
