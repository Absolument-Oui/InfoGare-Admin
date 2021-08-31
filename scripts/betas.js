var database = firebase.database().ref('users');

 function loadBetas() {
    var beta_lst = new Array();
    database.get().then((snapshot) => {
        snapshot.forEach((child) => {
            if (child.val().beta === true) {
                beta_lst.push(child.val().username);
            }
        });
        document.getElementById('betas_nbr').innerText = beta_lst.length;
        document.getElementById('betas').innerText = beta_lst.toString();
    });
 }