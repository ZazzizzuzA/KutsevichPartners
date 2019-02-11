import { initializeApp, firebase } from 'firebase';

const environment = initializeApp({
        apiKey: "AIzaSyC_7fYz_IHAPS4sUtLCfXk9PT0BAEI6hic",
        authDomain: "kutsevichpartners.firebaseapp.com",
        databaseURL: "https://kutsevichpartners.firebaseio.com",
        projectId: "kutsevichpartners",
        storageBucket: "kutsevichpartners.appspot.com",
        messagingSenderId: "836350721144"
});

// const db = environment.firestore();
// const teammates = db.collection('kutsevych.com').doc("team");
// const projects = db.collection('kutsevych.com').doc("projects");
export default environment;
