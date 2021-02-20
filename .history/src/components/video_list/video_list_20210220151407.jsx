import React from "react";
import { View, Text, FlatList } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <View>
      <FlatList
        data={props.videos}
        renderItem={({ video }) => {
          <VideoItem //
            video={video.video}
          />;
        }}
        keyExtractor={(video) => video.id}
      />
    </View>
  );
};

export default VideoList;

<Text>
  {props.videos.map((video) => (
    <VideoItem key={video.id} video={video} />
  ))}
</Text>;
