import React, { useState, useCallback } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useHistory } from "react-router-native";

const VideoDetail = ({ video, onVideoClick }) => {
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

  const history = useHistory();

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={`${video.id}`}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
      <Button
        color="green"
        title="Go Back"
        onPress={() => {
          onVideoClick(null);
          history.push(`/videos`);
        }}
      />
    </View>
  );
};

export default VideoDetail;
