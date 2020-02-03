// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

// Add the Firebase services that you want to use
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyChVm5XTJWklhw3wxgS43dL0uZ8Lkp2Ts4',
  authDomain: 'movie-eff9d.firebaseapp.com',
  databaseURL: 'https://movie-eff9d.firebaseio.com',
  projectId: 'movie-eff9d',
  storageBucket: 'movie-eff9d.appspot.com',
  messagingSenderId: '298216772542',
  appId: '1:298216772542:web:9f8899092995b758e09fef',
  measurementId: 'G-DZV875K4NZ'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

const getAllMovie = async type => {
  const rs = await db
    .collection(type)
    .get()
    .then(function(querySnapshot) {
      return querySnapshot.docs.map((item, index, items) => item.data());
    });
  return rs;
};

const getNewMovie = async type => {
  const colRef = db.collection(type);
  const rs = await colRef
    .orderBy('created', 'desc')
    .limit(9)
    .get()
    .then(function(querySnapshot) {
      return querySnapshot.docs.map((item, index, items) => item.data());
    });
  return rs;
};

const getNewUpdateSeriesMovie = async () => {
  const colRef = db.collection('seriesMovie');
  const rs = await colRef
    .orderBy('updated', 'desc')
    .limit(9)
    .get()
    .then(function(querySnapshot) {
      return querySnapshot.docs.map((item, index, items) => item.data());
    });
  return rs;
};

var GetData = {
  getAllSingleMovie: () => getAllMovie('singleMovie'),
  getAllSeriesMovie: () => getAllMovie('seriesMovie'),
  getNewSingleMovie: () => getNewMovie('singleMovie'),
  getNewSeriesMovie: () => getNewMovie('seriesMovie'),
  getNewUpdateSeriesMovie: () => getNewUpdateSeriesMovie()
};

export default GetData;
