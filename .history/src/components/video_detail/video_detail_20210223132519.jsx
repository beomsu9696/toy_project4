import React, { useState, useCallback } from "react";
import { Button, View, Alert, TouchableOpacity, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Link } from "react-router-native";

const VideoDetail = ({ video }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={`${video.id}`}
        onChangeState={onStateChange}
      />
      <Text>{video.snippet.title}</Text>
      <Text>{video.snippet.channelTitle}</Text>
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      <TouchableOpacity>
        <Link to={`/videos`}>
          <Text>뒤로가기</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default VideoDetail;
