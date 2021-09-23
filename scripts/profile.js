firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('username').innerText = user.displayName;
        document.getElementById('login').hidden = true;
    } else {
        document.getElementById('username').innerText = 'Se connecter';
        document.getElementById('pref').hidden = true;
        document.getElementById('logout').hidden = true;
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.reload();
    })
}

document.getElementById('login').onclick = function() {
    location.href = 'https://auth.infogare.fr/login.htm?returnurl=' + encodeURIComponent(location.href)+'&service=infogare&version=admin';
  }