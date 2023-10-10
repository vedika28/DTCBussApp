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
import db from "../config";
import firebase from "firebase";
import MyHeader from "../components/MyHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapView from "react-native-maps";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      userName: "",
      emailId: "",
      initialLocation: {
        latitude: "",
        longitude: "",
        latitudeDelta: "",
        longitudeDelta: "",
      },
      locationChosen: false,
    };
  }

  static navigationOptions = { header: null };

  UNSAFE_componentWillMount() {
    this.setState({
      initialLocation: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      locationChosen: false,
    });
  }

  render() {
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView>
          <MyHeader title="HomeScreen" navigation={this.props.navigation} />
          <View>
            <View>
              <TouchableOpacity
                style={[styles.input, { marginBottom: "130%" }]}
              >
                <TextInput
                  placeholder="Search for you destination"
                  onChangeText={(text) => {
                    this.setState({
                      search: text,
                    });
                  }}
                  value={this.state.search}
                />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={[styles.footButtons, { marginLeft: "10%" }]}
                onPress={() => {
                  this.props.navigation.navigate("Home");
                }}
              >
                <Text style={styles.buttonText}>Passenger</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.footButtons,
                  { marginLeft: "60%", marginTop: "-15%" },
                ]}
                onPress={() => {
                  this.props.navigation.navigate("Tracker");
                }}
              >
                <Text style={styles.buttonText}>Tracker</Text>
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
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    marginTop: "15%",
    fontWeight: "bold",
  },
});
