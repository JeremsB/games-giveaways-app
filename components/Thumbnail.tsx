import * as React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export interface IThumbnailProps {
  img: string;
  platforms: string;
}

export function Thumbnail(props: IThumbnailProps) {
  const { img, platforms } = props;
  return (
    <View style={styles.imageWrapper}>
      <ImageBackground style={styles.thumbnail} source={{ uri: img }}>
        <View style={styles.platformsDiv}>
          <Text style={styles.platforms}>{platforms}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 8,
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
