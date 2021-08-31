var database = firebase.database().ref('users');

 function loadBetas() {
    var beta_lst = new Array();
    var uid_lst = new Array();
    database.get().then((snapshot) => {
        snapshot.forEach((child) => {
            if (child.val().beta === true) {
                beta_lst.push(child.val().username);
                uid_lst.push(child.key);
            }
        });
        document.getElementById('betas_nbr').innerText = beta_lst.length;
        
        beta_lst.forEach((value, index, array) => {
            var tr = document.createElement('tr');
            var result = document.createElement('td');
            var result_div = document.createElement('div');
            var uid = document.createElement('td');
            var uid_div = document.createElement('div');

            result_div.setAttribute('class', 'cell-inner');
            result_div.appendChild(document.createTextNode(value));
            result.appendChild(result_div);

            uid_div.setAttribute('class', 'cell-inner');
            uid_div.append(document.createTextNode(uid_lst[index]));
            uid.appendChild(uid_div);

            tr.appendChild(result);
            tr.appendChild(uid);

            document.getElementById('table').appendChild(tr);
        })

    });
 }