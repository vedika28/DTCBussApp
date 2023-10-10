import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import MyHeader from "../components/MyHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PickImage from "../components/camera";

export default class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      contact: "",
      reliability: "",
    };
  }

  static navigationOptions = { header: null };

  reliability = (r) => {
    if (r == 1) {
      <View style={styles.square} />;
    } else if (r == 2) {
      <View style={styles.square} />;
      <View style={styles.square} />;
    } else if (r == 3) {
      <View style={styles.square} />;
      <View style={styles.square} />;
      <View style={styles.square} />;
    } else if (r == 4) {
      <View style={styles.square} />;
      <View style={styles.square} />;
      <View style={styles.square} />;
      <View style={styles.square} />;
    } else if (r == 5) {
      <View style={styles.square} />;
      <View style={styles.square} />;
      <View style={styles.square} />;
      <View style={styles.square} />;
      <View style={styles.square} />;
    }
  };

  render() {
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView>
          <MyHeader title="Profile" navigation={this.props.navigation} />
          <View>
            <View>
              <PickImage />
              <Text>Name: {this.state.username}</Text>
              <Text>Contact info: {this.state.contact}</Text>
              <Text>Your reliability: {this.reliability(this.state.reliability)}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.footButtons, { marginLeft: "10%" }]}
                onPress={() => {
                  this.props.navigation.navigate("Tracker");
                }}
              >
                <Text style={styles.buttonText}>Tracker</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.footButtons,
                  { marginLeft: "60%", marginTop: "-15%" },
                ]}
                onPress={() => {
                  this.props.navigation.navigate("Home");
                }}
              >
                <Text style={styles.buttonText}>Passenger</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingBottom: 10,
    marginLeft: 20,
    marginTop: "5%",
  },
  footButtons: {
    width: "30%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "black",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowColor: "grey",
    alignItems: "center",
    marginTop: "100%",
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    marginTop: "15%",
    fontWeight: "bold",
  },
  headButtons: {
    width: "20%",
    height: 40,
    borderRadius: 3,
    backgroundColor: "black",
    alignItems: "center",
    marginLeft: "80%",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
