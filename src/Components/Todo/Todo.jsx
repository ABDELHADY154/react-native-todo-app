import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from "galio-framework";
import { ScrollView } from "react-native-gesture-handler";

class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: "100%" }}></ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  }
}
export default function (props) {
  const navigation = useNavigation();

  return <Todo {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
