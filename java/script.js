//Pre entrega

for (let i = 1; i <= 3; i++) {
    let usuario = prompt('Ingrese nombre de Usuario');
    let numero = parseInt(prompt('Ingrese contraseña'));
    if ((usuario == 'benja') && (numero == '123456')) {
        alert('Usuario y contraseña correcta');
        break;
    } else {
        alert('Usuario y/o contraseña incorrecta restan ' + (3 - i) + ' intentos');
    }
}




console.log('Estadisiticas de jugadores del futbol argentino')
let estadisticas = prompt('Ingrese el apellido del futbolista que desea buscar o la letra z para salir');

while (estadisticas != 'z') {
    switch (estadisticas) {
        case 'retegui':
            console.log('Mateo Retegui es el maximo anotador del futbol argentino con 15 goles en 22 partidos');
            break;

        case 'cristaldo':
            console.log('Cristaldo convirtio 11 goles en 21 aprtidos con un premedio de 0.52');
            break;

        case 'copetti':
            console.log('Copetti convirtio 8 tantos en 20 partidos');
            break;

        case 'benedetto':
            console.log('Benedetto marco 4 tantos en 12 partidos');
            break;

        case 'boselli':
            console.log('Mauro Boselli convirtio 6 tantos en 17 partidos');
            break;

        default:
            console.log('El futbolista que esta buscando no se encuentra en nuestra lista de datos');
            break;
    }
    estadisticas = prompt('Ingrese el apellido del futbolista que desea buscar o la letra z para salir');
}