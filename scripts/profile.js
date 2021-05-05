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

function checkProfileAuthorization(user) {
    firebase.database().ref().child('users').child(user.uid).get().then((snapshot) => {
        if (snapshot.val().admin != true) {
            alert('Vous n\'avez pas l\'autorisation de vous connecter ici !');
            logout();
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