var database = firebase.database().ref('users');

function loadNewsletter() {
    var emails = new Array();
    database.get().then((snapshot) => {
        snapshot.forEach((child) => {
            var email = child.val().email;
            if (child.val().newsletter) {
                emails.push(email);
            }
        });
        document.getElementById('newsletter_span').innerHTML = emails.toString();
    });
}

function modifyTemplate() {
    document.getElementById('template').contentWindow.document.getElementById('new_func').innerText = document.getElementById('new_func_edit').nodeValue;
}