import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TrackerScreen from './screens/TrackerScreen';
import TrackerLogin from './screens/TrackerLogin';
import TrackerSignUp from './screens/TrackerSignUp';
//import map from './screens/map'
import ProfileScreen from './screens/ProfileScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


export default function App(){
  return(
    <View style={styles.container}>
      <AppContainer />
    </View>
  )
}

const navigator = createSwitchNavigator({
  Home: {screen: HomeScreen},
  Tracker : {screen : TrackerScreen},
  Profile: {screen: ProfileScreen},
  TrackerSignUp : {screen : TrackerSignUp},
  TrackerLogin : {screen : TrackerLogin},
})

const AppContainer=createAppContainer(navigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

