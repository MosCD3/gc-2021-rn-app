import React from "react";
import { View, Text, StyleSheet, FlatList, SectionList } from "react-native";
import GenericListItem from "../components/rows/GenericListItem";
import CarInventoryItem from "../types/CarInventoryItem";

const InventoryPage = () => {
  const inventory: CarInventoryItem[] = [
    {
      id: "1",
      make: "BMW",
      model: "BMW X7",
      data: ["Mary", "Omar", "Singh", "David"],
    },
    {
      id: "2",
      make: "Toyota",
      model: "Rav 4",
      data: ["Singh", "Ahmed", "Aliyah", "David"],
    },
    {
      id: "3",
      make: "GMC",
      model: "Acadia",
      data: ["Mary", "Omar", "Singh", "David"],
    },
    {
      id: "4",
      make: "Subaru",
      model: "Accent",
      data: ["Mary", "Omar", "Singh", "David"],
    },
    {
      id: "5",
      make: "Subaru",
      model: "Forster",
      data: ["Mary", "Omar", "Singh", "David"],
    },
    {
      id: "6",
      make: "BMW",
      model: "BMW X5",
      data: ["Mary", "Omar", "Singh", "David"],
    },
  ];
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={inventory}
        keyExtractor={(item) => item.id}
        renderItem={({ index, item }) => {
          return <GenericListItem model={item} />;
        }}
      />
      {/* <SectionList
        sections={inventory}
        keyExtractor={(item, index) => `${index}`}
        renderSectionHeader={(element) => {
          return (
            <View style={styles.sectionHeader}>
              <Text>{element.section.model}</Text>
            </View>
          );
        }}
        renderItem={(element) => {
          return (
            <View style={styles.cellWrapperGroup}>
              <Text>
                {element.index} - {element.item}
              </Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
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
export default InventoryPage;
