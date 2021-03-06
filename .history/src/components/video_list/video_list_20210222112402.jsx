import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  Text,
} from "react-native";

import VideoItem from "../video_item/video_item";

const VideoList = ({ props, history, match }) => {
  const DATA = props.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;

  const id = match.params.id;
  const detail = data[id - 1];
  const { imgSrc } = detail;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} resizeMode="contain" />
      </View>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    height: (deviceWidth * 2) / 3,
    width: (deviceWidth * 2) / 3,
    borderRadius: 20,
  },
});

export default VideoList;
