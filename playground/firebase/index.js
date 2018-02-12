import firebase from 'firebase';
// Initialize Firebase
  
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Udeep',
    age: 22,
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
})

todosRef.push({
  text: 'A new Todo'
})

todosRef.push({
  text: 'A second new Todo'
})

// var notesRef = firebaseRef.child('notes');
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!!!'
// })
//
// console.log('Todo id', newNoteRef.key);
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// })
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// })


//  to fetch database
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unabe to fetch value : Error', e);
// })

// var logData = (snapshot) => {
//   console.log('Got value ', snapshot.val());
// }
//
//  // to listen changes
// firebaseRef.on('value', logData);
//
// // to unhook listener
// firebaseRef.off(logData);
//
// firebaseRef.update({
//   isRunning: false
// })



// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name: null
// })

// firebaseRef.child('app/name').remove();


// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// })

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then( () => {
//   console.log('Update Worked');
// }, (e)=> {
//   console.log('Error ', e);
// })


// firebaseRef.update({
//    'app/name': 'Todo Application',
//    'user/name': 'Mike'
// })
