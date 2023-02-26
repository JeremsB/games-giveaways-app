import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Giveaway } from "../types/giveaway.type";
import { Thumbnail } from "./Thumbnail";

export interface IGiveawayCardProps {
  giveaway: Giveaway;
  navigation: any;
}

export function GiveawayCard(props: IGiveawayCardProps) {
  const { giveaway, navigation } = props;

  return (
    <View style={styles.card}>
      <Thumbnail img={giveaway.thumbnail} platforms={giveaway.platforms} navigation={navigation} id={giveaway.id} />
      <View style={styles.bottomCard}>
        <Text style={styles.title}>{giveaway.title}</Text>
        <Text>{giveaway.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
  },
  bottomCard: {
    padding: 16,
  }
});
