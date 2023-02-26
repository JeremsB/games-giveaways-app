import * as React from "react";
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export interface IThumbnailProps {
  img: string;
  platforms: string;
  id: number;
  navigation: any
}

export function Thumbnail(props: IThumbnailProps) {
  const { img, platforms, navigation, id } = props;
  function onNavigate() {
    navigation.navigate('Detail', {
      id: id,
    })
  }

  return (
    <TouchableHighlight style={styles.imageWrapper} onPress={onNavigate}>
      <ImageBackground style={styles.thumbnail} source={{ uri: img }}>
        <View style={styles.platformsDiv}>
          <Text style={styles.platforms}>{platforms}</Text>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  thumbnail: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
  },
  platformsDiv: {
    backgroundColor: "rgba(0, 0, 0, 0.49)",
    marginTop: 5,
    marginRight: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center'
  },
  platforms: {
    color: 'white',
  }
});
