import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import VideoList from "./components/video_list/video_list";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=나훈아&maxResults=25&key=AIzaSyDlRY8MTesdvHw_lMP8v4G_NKGaLAm8UBU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <SafeAreaView>
      <VideoList videos={videos} />
    </SafeAreaView>
  );
}
