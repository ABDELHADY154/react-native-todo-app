import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from "galio-framework";
import nextId from "react-id-generator";

class TodoForm extends Component {
  state = {
    id: nextId(),
    task: "",
    completed: false,
    error: "",
  };

  addNewTask = () => {
    if (this.state.task) {
      this.props.navigation.navigate("Todo - App", {
        id: this.state.id,
        task: this.state.task,
        completed: false,
      });
      this.setState({ task: "" });
    } else {
      this.setState({ error: "please fill the field" });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text h5 style={{ color: "red" }}>
          {this.state.error}
        </Text>
        <Input
          placeholder="Task"
          placeholderTextColor="black"
          style={{ width: 350, borderRadius: 200 }}
          onChangeText={text => this.setState({ task: text })}
          value={this.state.task}
        />
        <Button
          onPress={this.addNewTask}
          color="black"
          style={{ borderRadius: 100, width: 300 }}
        >
          Add Task
        </Button>
        <StatusBar style="auto" />
      </View>
    );
  }
}
export default function (props) {
  const navigation = useNavigation();
  return <TodoForm {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
