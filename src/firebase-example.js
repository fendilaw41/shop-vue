import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBQnph6ameSMZxup0HtLYwzMvOGd0pr1yE",
    authDomain: "vue-shop-dc41f.firebaseapp.com",
    databaseURL: "https://vue-shop-dc41f-default-rtdb.firebaseio.com",
    projectId: "vue-shop-dc41f",
    storageBucket: "ygs://vue-shop-dc41f.appspot.com",
    messagingSenderId: "887191639749"
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export { fb, db }