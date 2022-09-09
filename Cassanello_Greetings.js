var hora = new Date();

function greet (name, actualHora) {
        if (name == 'Count Dooku') {
        console.log('¡Voy por ti, Dooku! Por cierto, son las ' + actualHora + 'hs');
    } else {
        console.log('¡Buen día, ' + name +'! Son las ' + actualHora + 'hs');
    }
}

var actualHora = hora.getHours() + ':' + hora.getMinutes();
greet("Count Dooku", actualHora);