const database = firebase.database().ref();

function search(query, type) {
    database.child('users').get().then((snapshot) => {
        snapshot.forEach((child) => {
            var key = child.key;
            if (type == 'Utilisateur' || type == 'Tout') {
                if (key.includes(query)) {
                    console.log(key);
                    var tr = document.createElement('tr');
                    var result = document.createElement('td');
                    var result_div = document.createElement('div');
                    var type = document.createElement('tr');
                    var type_div = document.createElement('div');

                    result_div.setAttribute('class', 'cell-inner');
                    result_div.appendChild(document.createTextNode(key));
                    result.appendChild(result_div);

                    type_div.setAttribute('class', 'cell-inner');
                    type_div.appendChild(document.createTextNode('Utilisateur'));
                    type.appendChild(type_div);

                    tr.appendChild(result);
                    tr.appendChild(type);

                    document.getElementById('cellsresults').appendChild(tr);
                }
            }
        })
    })
}

function loadSearch() {
    var params = new URLSearchParams(window.location.search);
    var type = 'Tout';
    if (params.has('type')) {
        type = params.get('type');
    }
    search(params.get('query'), type);
}