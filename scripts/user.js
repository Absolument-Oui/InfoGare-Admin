const database = firebase.database().ref('users');

function getUser(user) {
    database.child(user).get().then((snapshot) => {
        if (snapshot.val().photo !== undefined) {
            document.getElementById('photo').src = snapshot.val().photo;
            document.getElementById('photo').style.display = 'block';
            document.getElementById('no_photo').style.display = 'none';
        }
        document.getElementById('email').innerText = snapshot.val().email;
        document.getElementById('user_name').innerText = snapshot.val().username;
        document.getElementById('beta').value = snapshot.val().beta;
    });
}

function getUserGares(user) {
    database.child(user).child('gares').get().then((snapshot) => {
        snapshot.forEach((childsnapshot) => {
            var id = childsnapshot.key;
            var name = childsnapshot.val().name;
            var trains = childsnapshot.child('trains').numChildren();
            var type = childsnapshot.val().type;
            var listgroupitem = document.createElement('li');
            var managmentitemcontent = document.createElement('div');
            var managmentitemsymbol = document.createElement('div');
            var icon = document.createElement('i');
            var managmentitemmain = document.createElement('div');
            var title = document.createElement('h2');
            var metalist = document.createElement('ul');
            var trains_div = document.createElement('li');
            var type_div = document.createElement('li');
            
            title.appendChild(document.createTextNode(name));
            trains_div.appendChild(document.createTextNode(trains+' trains'));
            if (type === 'neutral') {
                type_div.appendChild(document.createTextNode('Gare normale'));
            } else {
                type_div.appendChild(document.createTextNode('Gare RER'));
            }
            
            trains_div.setAttribute('class', 'meta-list-item');
            type_div.setAttribute('class', 'meta-list-item separator separator');
            
            metalist.setAttribute('class', 'meta-list font-weight-medium');
            metalist.appendChild(trains_div);
            metalist.appendChild(type_div);
            
            managmentitemmain.setAttribute('class', 'management-item-main');
            managmentitemmain.setAttribute('style', 'cursor: pointer;');
            if (type === 'neutral') {
                managmentitemmain.setAttribute('onclick', 'window.location.href="gare.htm?id='+childsnapshot.key+'&uid='+id+'"');
            } else {
                managmentitemmain.setAttribute('onclick', 'window.location.href="gare_rer.htm?id='+childsnapshot.key+'&uid='+id+'"');
            }
            managmentitemmain.appendChild(title);
            managmentitemmain.appendChild(metalist);
            
            icon.setAttribute('class', 'icons-itinerary-train-station icons-size-1x25');
            icon.setAttribute('aria-hidden', 'true');
            
            managmentitemsymbol.setAttribute('class', 'management-item-symbol');
            managmentitemsymbol.appendChild(icon);
                        
            managmentitemcontent.setAttribute('class', 'management-item-content');
            managmentitemcontent.appendChild(managmentitemsymbol);
            managmentitemcontent.appendChild(managmentitemmain);
            
            listgroupitem.setAttribute('class', 'list-group-item management-item');
            listgroupitem.appendChild(managmentitemcontent);
            
            document.getElementById('gares').appendChild(listgroupitem);
        })
    })
}

function loginAsUser() {
    var params = new URLSearchParams(location.search);
    var uid = params.get('userid');
    window.open(`https://auth.infogare.fr/signin_uid.htm?uid=${uid}&returnurl=https%3A%2F%2Finfogare.fr`);
}

function modifyBeta() {
    var params = new URLSearchParams(location.search);
    var uid = params.get('userid');
    database.child(uid).update({
        beta: document.getElementById('beta').value
    }).then(() => {
        alert('Statut beta modifié !');
    });
}