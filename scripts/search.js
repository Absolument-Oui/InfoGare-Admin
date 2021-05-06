const database = firebase.database().ref();

function search(query, type) {
    database.child('users').get().then((snapshot) => {
        var key = snapshot.key
        if (key.includes(query)) {
            console.log(key);
        }
    })
}

function loadSearch() {
    var params = new URLSearchParams(window.location.search);
    search(params.get('query'));
}