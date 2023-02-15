import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { useQuery } from "react-query";
import { listGiveaways } from "../api/axios";
import { GiveawayCard } from "../components/GiveawayCard";

export default function GamesList() {
  const { data, error, isError, isLoading } = useQuery(
    "giveaways",
    listGiveaways
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    console.log(error);
    return <Text>Error !</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <GiveawayCard giveaway={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
