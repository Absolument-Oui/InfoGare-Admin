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

function loginWithToken(token) {
  firebase.auth().signInWithCustomToken(token).then((user) => {
    console.log(user.user.displayName);
    window.location.href = location.pathname;
  })
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.reload();
    })
}

document.getElementById('login').onclick = function() {
    location.href = 'https://auth.infogare.fr/redirect.htm?returnurl=' + encodeURIComponent(location.href)+'&service=infogare&version=admin';
  }

  function checkLogin() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById('login').hidden = true;
        document.getElementById('username').innerText = user.displayName;
        document.getElementById('logout').hidden = false;
        if (user.photoURL !== undefined) {
          document.getElementById('mnu_user_photo').src = user.photoURL;
          document.getElementById('mnu_user_photo').style.display = 'block';
          document.getElementById('mnu_user_no_photo').style.display = 'none';
        }
        this.user = user;
      } else {
        document.getElementById('login').hidden = false;
        document.getElementById('username').innerText = 'Non connecté';
        document.getElementById('logout').hidden = true;
      }
    });
}