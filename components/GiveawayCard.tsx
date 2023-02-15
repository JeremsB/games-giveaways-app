import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Giveaway } from "../types/giveaway.type";

export interface IGiveawayCardProps {
  giveaway: Giveaway;
}

export function GiveawayCard(props: IGiveawayCardProps) {
  const { giveaway } = props;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{giveaway.title}</Text>
      <Image
        style={styles.thumbnail}
        source={{
          uri: giveaway.thumbnail,
        }}
      />
      <Text>{JSON.stringify(giveaway)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
  },
  thumbnail: {
    width: 50,
    height: 100,
  },
});
