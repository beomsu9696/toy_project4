import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <SafeAreaView>
      <Image
        style={styles.video}
        source={{ uri: snippet.thumbnails.medium.url }}
      />
      <View>
        <Text>{snippet.title}</Text>
        <Text>{snippet.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  video: { width: 100, height: 100, resizeMode: "contain" },
  title: {},
  channel: {},
});

export default VideoItem;
