import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "galio-framework";
import data from "../../../data.json";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }
  submitForm = () => {
    for (const key in data) {
      if (data.hasOwnProperty.call(data, key)) {
        const element = data[key];
        if (
          element.email == this.state.email &&
          element.password == this.state.password
        ) {
          this.props.loggedIn(true);
          break;
        } else {
          this.setState({ error: "wrong email or password" });
        }
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h2>Todo - App</Text>
        <Text h5 style={{ color: "red" }}>
          {this.state.error}
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email Address"
            style={{ borderRadius: 100 }}
            placeholderTextColor="black"
            type="email-address"
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            placeholder="password"
            password
            viewPass
            style={{ borderRadius: 100 }}
            placeholderTextColor="black"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>

        <Button
          color="black"
          style={{ borderRadius: 100 }}
          onPress={this.submitForm}
        >
          Login
        </Button>
        <Button
          color="success"
          style={{ borderRadius: 100 }}
          onPress={() => {
            this.props.navigation.navigate("Register");
          }}
        >
          Register
        </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 350,
  },
});
