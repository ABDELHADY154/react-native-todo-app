import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from "galio-framework";
import data from "../../../data.json";

export default class Register extends Component {
  state = {
    id: 0,
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  };
  submitForm = () => {
    if (
      this.state.fullName &&
      this.state.email &&
      this.state.password &&
      this.state.confirmPassword
    ) {
      if (
        !(re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.state.email,
        ))
      ) {
        this.setState({ error: "please enter a valid email address" });
      } else if (this.state.password !== this.state.confirmPassword) {
        this.setState({ error: "please re-confirm your password" });
      } else {
        var userData = {
          userID: data.length + 1,
          fullName: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
        };
        data.push(userData);
        this.props.isRegistered(true);
      }
    } else {
      this.setState({ error: "please make sure you filled all fields" });
    }
  };
  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <Text h2>Todo - App</Text>
        <Text h6 style={{ color: "red" }}>
          {this.state.error}
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Full Name"
            style={{ borderRadius: 100 }}
            placeholderTextColor="black"
            onChangeText={text => this.setState({ fullName: text })}
          />
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
          <Input
            placeholder="Confirm Password"
            password
            viewPass
            style={{ borderRadius: 100 }}
            placeholderTextColor="black"
            onChangeText={text => this.setState({ confirmPassword: text })}
          />
        </View>
        <Button
          color="black"
          style={{ borderRadius: 100 }}
          onPress={this.submitForm}
        >
          Register
        </Button>
        <Button
          color="success"
          style={{ borderRadius: 100 }}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          Login
        </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 350,
  },
});
