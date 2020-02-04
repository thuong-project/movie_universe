var firebase = require('firebase/app');
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

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// for test
const single = {
  localName: 'Biệt đội siêu anh hùng - hồi kết',
  globalName: 'Avenger - Endgame',
  movieType: 'single',
  trailer:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FsingleMovie%2Favenger_endgame_2019%2Ftrailer.mp4?alt=media&token=e464f46f-083c-462a-92dd-bdd545d836d2',
  poster:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FsingleMovie%2Favenger_endgame_2019%2FverticalPoster.jpg?alt=media&token=67cbbee8-523b-4e8a-b66e-4548f0b7300e',
  movieUrl:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FsingleMovie%2Favenger_endgame_2019%2Ftrailer.mp4?alt=media&token=e464f46f-083c-462a-92dd-bdd545d836d2',
  director: ['Anthony Russo', 'Joe Russo'],
  actor: [
    'Robert Downey Jr',
    'Chris Evans',
    'Mark Ruffalo',
    'Chris Hemsworth',
    'Scarlett Johansson',
    'Jeremy Renner'
  ],
  category: ['science-fiction'],
  release: '2019-4-26',
  country: 'United States',
  tag: ['Biệt đội siêu anh hùng 4', 'avenger 4', 'avenger endgame'],
  content:
    'Twenty-three days after Thanos used the Infinity Gauntlet to disintegrate half of all life in the universe,[N 1] Carol Danvers rescues Tony Stark and Nebula from deep space and returns them to Earth, where they reunite with the remaining Avengers—Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket. Locating Thanos on an otherwise uninhabited planet, they plan to retake and use the Infinity Stones to reverse "the Snap", but Thanos reveals he destroyed the Stones to prevent their further use. Enraged, Thor decapitates Thanos.',
  posterHorizontal:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FsingleMovie%2Favenger_endgame_2019%2FhorizontalPoster.jpeg?alt=media&token=e05694e1-ad38-47be-9426-aec1e8bf7603',
  Time: 181
};

const series = {
  localName: 'Sherlock phần 4',
  globalName: 'sherlock season 4',
  movieType: 'series',
  episode: '1/3',
  poster:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FseriesMovie%2Fsherlock_4%2FverticalPoster.jpg?alt=media&token=a6649dfa-9bf1-4a09-b291-128dce4357f8',
  posterHorizontal:
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FseriesMovie%2Fsherlock_4%2FhorizontalPoster.jpg?alt=media&token=9dfc0577-8bab-441d-aab6-acc2bd84af99',
  movieUrl: [
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FseriesMovie%2FTWD_S1%2Fep1.mp4?alt=media&token=7ae155dc-a572-41a2-88d1-185801e236b5',
    'https://firebasestorage.googleapis.com/v0/b/movie-eff9d.appspot.com/o/movie%2FseriesMovie%2FTWD_S1%2Fep2.mp4?alt=media&token=50e7770d-06c1-44b3-bfaa-ccbc1ba85f6b'
  ],
  director: ['Toby Haynes', 'Euros Lyn', 'Paul McGuigan'],
  actor: [
    'Benedict Cumberbatch',
    'Martin Freeman',
    'Mark Gatiss',
    'Andrew Scott'
  ],
  category: ['detective'],
  release: '2017',
  content: 'The Six Thatchers, The Lying Detective, The Final Problem',
  country: 'England',
  tag: ['Sherlock season 4', 'phim sherlock holmes phần 4']
};

function add() {
  db.collection('seriesMovie')
    .doc('sherlock_4')
    .set(series)
    .then(function() {
      console.log('Document successfully written!');
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
}

function update() {
  var docRef = db.collection('seriesMovie').doc('sherlock_4');
  var updateTimestamp = docRef
    .update({
      created: firebase.firestore.FieldValue.serverTimestamp(),
      updated: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(function() {
      console.log('Document successfully updated!');
    })
    .catch(function(error) {
      console.error('Error updating document: ', error);
    });
}

// db services
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

var DBServices = {
  getAllSingleMovie: () => getAllMovie('singleMovie'),
  getAllSeriesMovie: () => getAllMovie('seriesMovie'),
  getNewSingleMovie: () => getNewMovie('singleMovie'),
  getNewSeriesMovie: () => getNewMovie('seriesMovie'),
  getNewUpdateSeriesMovie: () => getNewUpdateSeriesMovie()
};

export default DBServices;
