import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAcBkreWQPLD6eGhcGN2tTNTHD7vLWxlag",
  authDomain: "zmapp-a45ed.firebaseapp.com",
  databaseURL: "https://zmapp-a45ed-default-rtdb.firebaseio.com/"
/*   
  apiKey: "AIzaSyAvE8yZMbjt6Y799fAHFOOJ-WhjdwGfK6A",
  authDomain: "vuejs-shopping-cart.firebaseapp.com",
  databaseURL: "https://vuejs-shopping-cart.firebaseio.com/"
 */
}


firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
