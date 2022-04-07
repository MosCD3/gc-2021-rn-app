import React, { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CarInventoryItem from "../../types/CarInventoryItem";

const GenericListItem = ({ model }: { model: CarInventoryItem }) => {
  return (
    <View style={styles.cellWrapper}>
      <Text>
        {model.id} {model.make}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cellWrapper: {
    backgroundColor: "grey",
    padding: 20,
    marginTop: 2,
    height: 250,
  },
  sectionHeader: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 15,
  },
  cellWrapperGroup: {
    backgroundColor: "grey",
    padding: 20,
    marginTop: 2,
    height: 100,
  },
});

export default GenericListItem;
