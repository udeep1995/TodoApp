import firebase from 'firebase'


  var config = {
    apiKey: "AIzaSyDuOvT-HvzuHXgze0lTdiiAHwbh5W2-Ut0",
    authDomain: "todo-app-252f1.firebaseapp.com",
    databaseURL: "https://todo-app-252f1.firebaseio.com",
    projectId: "todo-app-252f1",
    storageBucket: "todo-app-252f1.appspot.com",
    messagingSenderId: "1030340219916"
  };
  firebase.initializeApp(config);
export var firebaseRef = firebase.database().ref();
export default firebase;
