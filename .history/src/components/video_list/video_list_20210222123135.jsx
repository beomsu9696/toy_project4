import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { data } from "../data";

const VideoList = ({ match, history }) => {
  // const DATA = match.params.videos;
  // const renderItem = ({ item }) => <VideoItem video={item} />;
  const handleBack = () => {
    history.goBack();
  };

  const id = match.parmas.id;
  const detail = data[id - 1];
  const { text } = detail;

  return (
    <SafeAreaView>
      <View>
        <Button onPress={handleBack} title="Back" />
        <Text>{text}</Text>
      </View>

      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
