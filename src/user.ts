import DB from "./db";
import { validateEmail, validatePassword } from "./validations";

function login(email: string, password: string) : number {
    if( validateEmail(email) && validatePassword(password) ){
        const usuarioEncontrado = DB.find(usuario => 
            usuario.email === email &&
            usuario.password === password
        );
        if(usuarioEncontrado) {  // if eh verdade se --> true, != 0, nao for nulo
            return 200;
        } else {
            return 404;
        }
    } else {
        return 400;
    }
}

export { login }