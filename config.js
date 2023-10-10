import firebase from 'firebase';

require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAzTfRtxCWMGkrkfuylJkYvlYy0nuXR19A',
  authDomain: 'dtcbusapp-e5357.firebaseapp.com',
  projectId: 'dtcbusapp-e5357',
  storageBucket: 'dtcbusapp-e5357.appspot.com',
  messagingSenderId: '972671794485',
  appId: '1:972671794485:web:06bcf388b9f9fde00be07c',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
