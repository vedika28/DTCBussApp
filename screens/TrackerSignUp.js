import React, { Component } from 'react';
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
} from 'react-native';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';
import firebase from firebase

export default class TrackerScreen extends Component {
  constructor() {
    super();
    this.state = {
        userName: "",
        contact: '',
        password: '',
        confirmPassword:'',
        email: '',
        log: false,
    };
  }

  static navigationOptions = { header: null };

  signIn(){
   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
   .then(data => {  
      console.log("User ID :- ", data.user.uid);
   })
   .catch(error => {
      console.log(error);
   });
  }

  logIn(){
    if(this.state.password==firebase.users.this.state.userName("password")){
      this.setState({
        log: true,
      })
    }
  }

  render() {
    return (
      <SafeAreaProvider>
        <KeyboardAvoidingView>
          <MyHeader title="TrackerScreen" navigation={this.props.navigation} />
          <View>
            <View>
              <TouchableOpacity
                style={styles.headButtons}
                onPress={() => {
                  this.props.navigation.navigate('TrackerSignUp');
                }}>
                <Text style={styles.buttonText}>login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.headButtons,
                  { marginLeft: '57%', marginTop: '-12.5%' },
                ]}
                onPress={() => {
                  this.props.navigation.navigate('TrackerLogin');
                }}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.input, { marginBottom: "130%" }]}
              >
                <TextInput
                  placeholder="Username"
                  onChangeText={(text) => {
                    this.setState({
                      userName: text,
                    });
                  }}
                  value={this.state.userName}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.input, { marginBottom: "130%" }]}
              >
                <TextInput
                  placeholder="password"
                  onChangeText={(text) => {
                    this.setState({
                      password: text,
                    });
                  }}
                  value={this.state.password}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.input, { marginBottom: "130%" }]}
              >
                <TextInput
                  placeholder="confrim password"
                  onChangeText={(text) => {
                    this.setState({
                      password: text,
                    });
                  }}
                  value={this.state.confirmPassword}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.input, { marginBottom: "130%" }]}
              >
                <TextInput
                  placeholder="contact no."
                  onChangeText={(text) => {
                    this.setState({
                      contact: text,
                    });
                  }}
                  value={this.state.contact}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.footButtons, { marginLeft: '10%' }]}
                onPress={() => {
                  this.props.navigation.navigate('Tracker');
                }}>
                <Text style={styles.buttonText}>Tracker</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.footButtons,
                  { marginLeft: '60%', marginTop: '-15%' },
                ]}
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}>
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
  footButtons: {
    width: '30%',
    height: 50,
    borderRadius: 20,
    backgroundColor: 'black',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowColor: 'grey',
    alignItems: 'center',
    marginTop: '100%',
  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
    marginTop: '15%',
    fontWeight: 'bold',
  },
  headButtons: {
    width: '20%',
    height: 40,
    borderRadius: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    marginLeft: '80%',
  },
});
