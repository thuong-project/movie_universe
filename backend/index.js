import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

 class DBServices {

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyChVm5XTJWklhw3wxgS43dL0uZ8Lkp2Ts4",
      authDomain: "movie-eff9d.firebaseapp.com",
      databaseURL: "https://movie-eff9d.firebaseio.com",
      projectId: "movie-eff9d",
      storageBucket: "movie-eff9d.appspot.com",
      messagingSenderId: "298216772542",
      appId: "1:298216772542:web:9f8899092995b758e09fef",
      measurementId: "G-DZV875K4NZ"
    };
    firebase.initializeApp(firebaseConfig);
  }

  //load data
   async loadData(movieType){
    let db = firebase.firestore();
    let querySnapshot = await db.collection(movieType).get();
    let docs = querySnapshot.docs;
    let data = docs.map(doc => doc.data());
    return data;
  }
}

// test function 
let service = new DBServices();
export default service;





  


  

