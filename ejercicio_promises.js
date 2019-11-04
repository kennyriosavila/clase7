//Create

const request = require('request');
const url = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/` ;

const json = {
    "name": "Camila",
    "last_name": "Valdez",
    "nacionalidad": "MX",
    "biography": "Peluquera",
    "gender": "F",
    "age": 27,
    "is_alive": true
}

const postPromisedAuthor = () =>{
    return new Promise((resolve, reject) => {
        request.post(url, {form: json}, (err, res, body) => {
            res.statusCode === 201
            ? resolve(JSON.parse(body))
            : reject({err, body});
        });
    }); 
}

const readPromisedAuthor = () =>{
    return new Promise((resolve, reject) => {
        request.get(url, (err, res, body) => {
            res.statusCode === 200
            ? resolve(JSON.parse(body))
            : reject({err, body});
        });
    }); 
}

postPromisedAuthor()
    .then(author =>{
        console.log('👨🏻‍🦱 Autor Creado');
        console.log(author.name);
        console.log('Ahora actualizar autor');
        return readPromisedAuthor(author.id);
    })
    .then(leerAuthor =>{
        console.log('👨🏻‍🦱 Autor Leido');
        return console.log(leerAuthor.name);
    })
    .catch(err => console.log(err));
       



    


