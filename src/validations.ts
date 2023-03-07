function validateEmail(email: string) : boolean {
    const pattern = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/g
    return email.match(pattern) != null;
}

function validatePassword(password: string) : boolean {
     // no mínimo 6 caracteres + no mínimo 2 caracteres !@#
     const pattern = /^[a-zA-Z0-9.]{6,}[!@#]{2,}/g
     return password.match(pattern) != null;
}




export { validateEmail, validatePassword };