import React, { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CellItem = ({ index, name }) => {
  useEffect(() => {
    console.log(`Am component:${index}, ${name}`);
  }, []);
  return (
    <View style={styles.cell}>
      <Text>
        {index} {name}
      </Text>
    </View>
  );
};

const HomeTab2 = () => {
  const pageItems = [
    { id: 1, name: "BMW" },
    { id: 2, name: "BMW" },
    { id: 3, name: "BMW" },
    { id: 4, name: "BMW" },
    { id: 5, name: "BMW" },
    { id: 6, name: "BMW" },
    { id: 7, name: "BMW" },
  ];

  const pageItemsSections = [
    { id: 1, name: "BMW", data: ["Car1", "Car2", "Car5"] },
    { id: 2, name: "BMW", data: ["Car1", "Car2"] },
    { id: 3, name: "BMW", data: ["Car1", "Car2"] },
    { id: 4, name: "BMW", data: ["Car1", "Car2"] },
    { id: 5, name: "BMW", data: ["Car1", "Car2"] },
    { id: 6, name: "BMW", data: ["Car1", "Car2"] },
    { id: 7, name: "BMW", data: ["Car1", "Car2"] },
  ];
  return (
    <View style={styles.wrapper}>
      {/* <FlatList
        data={pageItems}
        keyExtractor={(item, index) => `${index}`}
        renderItem={(element) => {
          return <CellItem index={element.index} name={element.item.name} />;
        }}
      /> */}
      {/* <ScrollView>
        <CellItem index={1} name="BMW" />
        <CellItem index={2} name="Ferrari" />
        <CellItem index={3} name="Nissan" />
        <CellItem index={4} name="Audi" />
        <CellItem index={5} name="GMC" />
      </ScrollView> */}
      <SectionList
        sections={pageItemsSections}
        keyExtractor={(item, index) => `${index}`}
        renderSectionHeader={(element) => {
          return (
            <View>
              <Text>{element.section.name}</Text>
            </View>
          );
        }}
        renderItem={(element) => {
          return (
            <Text>
              {element.index} - {element.item}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  cell: {
    height: 250,
    backgroundColor: "grey",
    marginTop: 1,
  },
});
export default HomeTab2;
