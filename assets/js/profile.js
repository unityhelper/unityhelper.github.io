var firebaseConfig = {
    apiKey: "AIzaSyChyNVbI7JrZyAhb5OnkWjme1YssiMst0Y",
    authDomain: "unityhelper-c6e6e.firebaseapp.com",
    databaseURL: "https://unityhelper-c6e6e.firebaseio.com",
    projectId: "unityhelper-c6e6e",
    storageBucket: "unityhelper-c6e6e.appspot.com",
    messagingSenderId: "263622566191",
    appId: "1:263622566191:web:564dc413a1063fb4ab81da",
    measurementId: "G-G1SS17T3HG"
};

// Initialize Firebase
var defaultProject = firebase.initializeApp(firebaseConfig);

var str = window.location.href;
var url = new URL(str);
var id = url.searchParams.get("id");

var db = firebase.firestore();
var docRef = db.collection("users").doc(id);

docRef.get().then(function(doc) {
    if (doc.exists) {
        document.getElementById("json").innerHTML = JSON.stringify(doc.data());
    } else {
        // doc.data() will be undefined in this case
        document.getElementById("json").innerHTML = '{Error: "dont found"}';
    }
}).catch(function(error) {
    document.getElementById("json").innerHTML = '{Error: "' + error + '"}';
});