const database = firebase.database().ref();

function loadUsers() {
    database.child('users').get().then((snapshot) => {
        snapshot.forEach((child) => {
            var tr = document.createElement('tr');
            var result = document.createElement('td');
            var result_div = document.createElement('div');
            var type = document.createElement('tr');
            var type_div = document.createElement('div');

            result_div.setAttribute('class', 'cell-inner');
            result_div.appendChild(document.createTextNode(child.val().username));
            result.appendChild(result_div);

            type_div.setAttribute('class', 'cell-inner');
            type_div.appendChild(document.createTextNode(child.key));
            type.appendChild(type_div);

            tr.appendChild(result);
            tr.appendChild(type);

            tr.setAttribute('cursor', 'pointer');
            tr.setAttribute('onclick', 'location.href="user.htm?userid='+child.key+'";');

            document.getElementById('users').appendChild(tr);    
        })
    })
}