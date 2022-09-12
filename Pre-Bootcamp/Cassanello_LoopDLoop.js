//Necesitaremos 2 variables, caramelos y kilometros.
var caramelos = 0;
var kilometros = 0;

//El punto de partida de el bucle es *while (kilometros <  10 )* con kilometros = 0
//Necesitaremos un bucle, ya que la funcion se repite cada 3km, mientras kilometros sea < 10
while (kilometros <  10 ) {
    //El condicional evalua si kilometros es divisible entre 3
    //Y no permite que con 0kn te de un caramelo (ya que 0 modulo 3 = 0)
    if(kilometros % 3 == 0 && kilometros != 0){
        caramelos++;//El incremento es en 1 para los caramelos.
    }
    kilometros++;              //Se incrementan los kilometros que esta realizando
}
//El bucle debe detenerse cuando la condicion (kilometros < 10) se convierta en falsa.

console.log(kilometros + 'km = ' + caramelos + ' caramelos');

// * Stretch 1 *
//se agrega la variable kmph para representar los kilometros por hora
var kmph = 20;
caramelos = 0; //reseteo variables
kilometros = 0;

//Si corre a mas de 9 km/h entonces ejecuta la funcion, de ir sumando kilometros
//Y recibir un caramelo cada 3km, hasta que deja de cumplir la condicion.
while (kmph > 9) {
    //El condicional evalua si kilometros es divisible entre 3
    //Y no permite que con 0kn te de un caramelo (ya que 0 modulo 3 = 0)
    if(kilometros % 3 == 0 && kilometros != 0){
        caramelos++;//El incremento es en 1 para los caramelos.
    }
    kilometros++;              //Se incrementan los kilometros que esta realizando
    // creo condicional para que cumpla la condicion y no quede en loop infinito.
    if(kilometros > 5){
        kmph--;
    }
}
console.log('\nStretch 1: ');
console.log(kilometros + 'km = ' + caramelos + ' caramelos');
