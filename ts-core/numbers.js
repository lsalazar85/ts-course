var avengers = 5;
var badGuys;
var others = 2;
var isBattle = function () {
    //Typescript me puede avisar cuando una variable no tiene valor
    if (avengers > badGuys) {
        console.log('Averngers Win');
    }
    else {
        console.log('All dead');
    }
};
isBattle();
// especificar que solo recibe numeros
others = 123;
// Genera un error por ser un string
// others = 'hola'
