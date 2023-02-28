const DB = require('./db')
const validations = require('./validations')

function login(email, password){
    if( validations.validateEmail(email) 
        && validations.validatePassword(password) ){

        const usuarioEncontrado =DB.find(usuario =>
            usuario.email == email && 
            usuario.password == password)
        
        if(usuarioEncontrado != null){
            return 200; // OK
        } else {
            return 404; // NOT FOUND
        }

    } else {
        return 400; // BAD REQUEST
    }
}

module.exports = { login }