import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "galio-framework";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import TodoItem from "./TodoItem";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 1,
          task: "task 1",
          completed: false,
        },
      ],
    };
  }
  deleteItem = id => {
    var item = this.state.tasks.findIndex(item => {
      return item.id === id;
    });
    if (item != -1) {
      this.state.tasks.splice(item, 1);
      this.setState({ tasks: this.state.tasks });
    }
  };

  render() {
    if (this.props.route.params) {
      this.state.tasks.push({
        id: this.props.route.params.id,
        task: this.props.route.params.task,
        completed: this.props.route.params.completed,
      });
      this.props.route.params = null;
    }
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: "100%" }}>
          <Card containerStyle={{ padding: 0 }}>
            {this.state.tasks.map(key => {
              return (
                <TodoItem
                  key={key.id}
                  keyId={key.id}
                  task={key.task}
                  completed={key.completed}
                  delete={this.deleteItem}
                />
              );
            })}
          </Card>
        </ScrollView>
        <Button
          onPress={() => this.props.navigation.navigate("Add Task")}
          color="black"
          style={{ borderRadius: 100, width: 300 }}
        >
          Add New Task
        </Button>
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
