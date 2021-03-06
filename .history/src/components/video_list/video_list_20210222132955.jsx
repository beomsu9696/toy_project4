import React from "react";
import { SafeAreaView, FlatList, View, StyleSheet, Button } from "react-native";

const VideoList = ({ props, match, history }) => {
  const DATA = props.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;

  const handleBack = () => {
    history.goBack();
  };
  const id = match.params.id;
  const detail = data[id - 1];
  const { title, artist, createAt, collector, contents, imgSrc } = detail;

  return (
    <SafeAreaView>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
