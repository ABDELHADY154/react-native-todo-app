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
      tasks: [],
      id: 0,
    };

    this.tasks = [];
  }
  componentDidMount() {
    this.setState({ tasks: this.tasks });
  }

  deleteItem = id => {
    this.tasks.map(item => {
      if (item.id == id) {
        var index = this.tasks.indexOf(item);
        this.tasks.splice(index, 1);
        console.log("del");
        this.forceUpdate();
      }
    });
  };

  render() {
    if (this.props.route.params) {
      this.tasks.push({
        id: this.state.id++,
        task: this.props.route.params.task,
        completed: this.props.route.params.completed,
      });
    }

    return (
      <View style={styles.container}>
        <ScrollView style={{ width: "100%" }}>
          <Card containerStyle={{ padding: 0 }}>
            {this.state.tasks.map(key => {
              return (
                <TodoItem
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
