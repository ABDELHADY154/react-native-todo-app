import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/Components/Auth/login";
import RegisterScreen from "./src/Components/Auth/register";
import TodoScreen from "./src/Components/Todo/Todo";
import TodoForm from "./src/Components/Todo/TodoForm";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    const Login = props => {
      const navigation = useNavigation();
      const isLoggedIn = val => {
        this.setState({ isLoggedIn: val });
      };
      return (
        <LoginScreen {...props} navigation={navigation} loggedIn={isLoggedIn} />
      );
    };
    const Register = props => {
      const navigation = useNavigation();
      const registered = val => {
        this.setState({ isLoggedIn: val });
      };
      return (
        <RegisterScreen
          {...props}
          navigation={navigation}
          isRegistered={registered}
        />
      );
    };

    return (
      <NavigationContainer>
        {this.state.isLoggedIn == false ? (
          <>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  header: () => {
                    "none";
                  },
                }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{
                  header: () => {
                    "none";
                  },
                }}
              />
            </Stack.Navigator>
          </>
        ) : (
          <>
            <Stack.Navigator initialRouteName="">
              <Stack.Screen
                name="Todo - App"
                component={TodoScreen}
                options={{
                  headerTitleAlign: "center",
                  headerRight: () => (
                    <Icon
                      name="log-out-outline"
                      type="ionicon"
                      iconStyle={{ backgroundColor: "transparent" }}
                      containerStyle={{
                        marginRight: 20,
                      }}
                      size={35}
                      onPress={() => {
                        this.setState({ isLoggedIn: false });
                      }}
                    />
                  ),
                  headerStyle: {
                    height: 120,
                  },
                }}
              />
              <Stack.Screen
                name="Add Task"
                component={TodoForm}
                options={{
                  headerTitleAlign: "center",
                }}
              />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
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
});
