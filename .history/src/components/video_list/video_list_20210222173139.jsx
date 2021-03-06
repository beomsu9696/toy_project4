import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { Link } from "react-router-native";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, onVideoClick }) => {
  const renderItem = ({ item }) => (
    <VideoItem video={item} onVideoClick={onVideoClick} />
  );

  const 비디오리스트 = videos.map((item) => {
    <Button key={item.id}>
      <Link to={`/`}>
        <Text key={item.id}>디테일</Text>
      </Link>
    </ㅠ>;
  });

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>
      <View>{비디오리스트}</View>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
