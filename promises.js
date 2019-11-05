const request = require('request');
const taco_api = 'http://taco-randomizer.herokuapp.com/random/';
// request.get(taco_api, (err, res, body) => {
//     res.statusCode === 200
//         ? console.log(JSON.parse(body))
//         : console.log('🤠', res.statusCode, body);
// });
​
// Estructura de una Promesa
const promise = new Promise((resolve, reject) => {
    resolve(5);
    reject(10);
});
​
promise
    .then((numero) => {
        console.log('Aqui esta el numero', numero)
    })
    .catch((err) => {console.log('hubo un REJECT', err)});
​
// 1) Versión vanilla
// request.get(taco_api, (err, res, taco) => {
//     res.statusCode === 200
//         ? console.log(JSON.parse(taco).mixin.name)
//         : console.log(err, taco);
// });
​
// 2) En Función
const getTaco = () => {
    return request.get(taco_api, (err, res, taco) => {
        res.statusCode === 200
            ? console.log(JSON.parse(taco).mixin.name)
            : console.log(err, taco);
    });
}
​
// getTaco();
​
// 3) En Promesa
const getPromisedTaco = () => {
    return new Promise((resolve, reject) => {
        request.get(taco_api, (err, res, body) => {
            res.statusCode === 200
                ? resolve(JSON.parse(body))
                : reject({err, body});
        });
    });
}
​
getPromisedTaco()
    .then(taco => {
        console.log('🌮 Taco recibido:');
        console.log(taco.mixin.name);
        console.log('Siguiente taco:');
        return getPromisedTaco();
    })
    .then(anotherTaco => {
        console.log('Último taco: 🔥');
        console.log(anotherTaco);
    })
    .catch(err => console.log(err));
​
/*
    1) Ejecutar la creación de un Autor y mostarlo en consola
    2) Luego modificar el nombre de ese autor (sin mostrarlo en consola)
    3) Hacer una peticion al autor que acaban de modificar y mostrarlo en consola
    4) Hacer una petición de tipo DELETE a ese autor y mostrar en consola un mensaje que diga que 'El autor fue eliminado exitosamente';
​
    NOTA: Todo ejecutando promesas que vienen dentro de funciones
 */
Contraer



