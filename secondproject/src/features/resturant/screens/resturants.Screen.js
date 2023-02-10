import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
export const ResturantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <View
          style={{
            padding: 16,
            backgroundColor: "yellow",
            alignItems: "center",
          }}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ width: "50%" }}
          />
          <Text>Search</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: "red",
          alignItems: "center",
        }}
      >
        <Text>Resturant list</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

    // backgroundColor: "#fff",
    // alignItems: "center",
    // // justifyContent: "center",
  },
});
