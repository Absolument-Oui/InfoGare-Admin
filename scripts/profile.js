firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('username').innerText = user.displayName;
        document.getElementById('login').hidden = true;
        checkProfileAuthorization(user);
    } else {
        document.getElementById('username').innerText = 'Se connecter';
        document.getElementById('pref').hidden = true;
        document.getElementById('logout').hidden = true;
    }
});

function checkAdmin(userid) {
    firebase.database().ref('users/'+userid).get().then((snapshot) => {
      if (!snapshot.val().admin) {
        window.location.replace('admin_access_refused.htm');
      }
    })
  }

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.reload();
    })
}

function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        window.location.reload();
    })
}