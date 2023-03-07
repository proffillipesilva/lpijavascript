import { login } from "../src/user";


test('Login tah bom', ()=> {
    // Email invaldo
    expect(login('ze',
    'admin123')).toBe(400);
    // Passwd invalido
    expect(login('ze@ze.com',
    'admin123')).toBe(400);
    // Usuario nao encontrado
    expect(login('ze@ze.com',
    'admin123#@')).toBe(404);
    // Usuario nao encontrado
    expect(login('raissa@mail.com',
    'admin123@@')).toBe(404);
    // Usuario encontrado
    expect(login('raissa@mail.com',
    'admin123@#')).toBe(200);
})