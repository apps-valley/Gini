import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyDJfnEC-4OUtTkz6fiXr3EkJgJkekHJz9A',
  authDomain: 'gini-website-and-blog.firebaseapp.com',
  projectId: 'gini-website-and-blog',
  storageBucket: 'gini-website-and-blog.appspot.com',
  messagingSenderId: '672719305287',
  appId: '1:672719305287:web:87ea86db2650f960b10f62',
  measurementId: 'G-8DWC2P9FG1'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const blogSubscribersCollection = db.collection('blogSubscribers')
const marketingTipsSubscribersCollection = db.collection('marketingTipsSubscribers')

// export utils/refs
export {
  db,
  auth,
  blogSubscribersCollection,
  marketingTipsSubscribersCollection
}
