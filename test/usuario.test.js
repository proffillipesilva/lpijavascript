const usuario = require('../src/usuario')

test('Login tah bom', ()=> {
    // Email invaldo
    expect(usuario.login('ze',
    'admin123')).toBe(400);
    // Passwd invalido
    expect(usuario.login('ze@ze.com',
    'admin123')).toBe(400);
    // Usuario nao encontrado
    expect(usuario.login('ze@ze.com',
    'admin123#@')).toBe(404);
    // Usuario nao encontrado
    expect(usuario.login('raissa@mail.com',
    'admin123@@')).toBe(404);
    // Usuario encontrado
    expect(usuario.login('raissa@mail.com',
    'admin123@#')).toBe(200);
})