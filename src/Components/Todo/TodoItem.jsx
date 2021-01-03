import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { Icon } from "react-native-elements";

export default class TodoItem extends Component {
  state = {
    id: this.props.keyId,
    task: this.props.task,
    completed: this.props.completed,
    deleted: false,
  };

  completed = () => {
    this.setState({ completed: true });
  };

  unDo = () => {
    this.setState({ completed: false });
  };

  delete = () => {
    this.props.delete(this.state.id);
  };
  render() {
    return (
      <ListItem
        bottomDivider
        containerStyle={
          this.state.completed == true ? { backgroundColor: "lightgreen" } : ""
        }
        key={this.props.keyId}
      >
        {/* {this.state.completed == true ? "" : ""} */}
        <ListItem.Content>
          <ListItem.Title style={{ fontSize: 20 }}>
            {this.state.task}
          </ListItem.Title>
        </ListItem.Content>
        {this.state.completed == false ? (
          <Icon
            name="checkmark-done-outline"
            type="ionicon"
            color="green"
            size={35}
            onPress={this.completed}
          />
        ) : (
          <Icon
            name="arrow-undo-circle-outline"
            type="ionicon"
            color="green"
            size={35}
            onPress={this.unDo}
          />
        )}

        <Icon
          name="trash-outline"
          type="ionicon"
          color="red"
          size={35}
          onPress={this.delete}
        />
      </ListItem>
    );
  }
}
// export default function (props) {
//   const navigation = useNavigation();
//   return <TodoForm {...props} navigation={navigation} />;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ListItem: {
    backgroundColor: "lightgreen",
  },
});
