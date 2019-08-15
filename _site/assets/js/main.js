function registerServiceWorker() {

    if (!navigator.serviceWorker) {
        return;
    }

    navigator.serviceWorker.register('/sw.js').then(() => {
        console.log('Service Worker: registered'); // eslint-disable-line no-console
    }).catch(err => {
        console.log('Service Worker: registration failed ', err); // eslint-disable-line no-console
    });


    navigator.serviceWorker.register('/firebase-messaging-sw.js').then(() => {
      console.log('Service Worker: registered'); // eslint-disable-line no-console
    }).catch(err => {
        console.log('Service Worker: registration failed ', err); // eslint-disable-line no-console
    });
}

registerServiceWorker();

var firebaseConfig = {
    apiKey: "AIzaSyAwokRB3Ze3zgBU6QqyT9Hlg0G3w0AEREk",
    authDomain: "jekyall.firebaseapp.com",
    databaseURL: "https://jekyall.firebaseio.com",
    projectId: "jekyall",
    storageBucket: "",
    messagingSenderId: "399884529588",
    appId: "1:399884529588:web:73c7e13d083f4835"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  var messaging = firebase.messaging();

  messaging.requestPermission()
    .then( function(){
      console.log("Have Permision")
      return messaging.getToken();
  })
  .then (function (token){
    console.log(token);
  })
  .catch (function(err){
    console.log(err)
  })

  messaging.onMessage(function(payload){
      console.log(payload);
  })

