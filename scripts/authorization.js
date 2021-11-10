function checkPerms() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref('/users/').child(user.uid).get().then((snapshot) => {
                if (snapshot.val().admin == true) {
                    return;
                } else {
                    location.href = "admin_access_refused.htm";
                }
            })
        } else {
            location.href = "admin_access_refused.htm";
        }
    })
}