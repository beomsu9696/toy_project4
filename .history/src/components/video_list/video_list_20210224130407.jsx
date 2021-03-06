import React from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  Button,
  Alert,
} from "react-native";
import { useHistory } from "react-router-native";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, onVideoClick, selectedVideo }) => {
  const history = useHistory();

  const renderItem = ({ item }) => (
    <VideoItem
      video={item}
      onVideoClick={onVideoClick}
      selectedVideo={selectedVideo}
    />
  );

  return (
    <SafeAreaView>
      <Button
        color="green"
        title="Go Back"
        onPress={() => {
          history.push("/");
        }}
      />
      <Button
        title="Video Choice Init Button"
        onPress={() => {
          onVideoClick(null);
        }}
      />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default VideoList;
