const DB = {
    logins: [
        { email: "joao@mail.com", password: "admin123@#" },
        { email: "raissa@mail.com", password: "admin123@#" },
        { email: "piloto@mail.com", password: "admin123@#" },
        { email: "mariana@mail.com", password: "admin123@#" }
    ],
    usuarios:  [
        {  email: "joao@mail.com", nome: "Joao", telefone: "19997865414", idade: 23    },
        {  email: "raissa@mail.com", nome: "Raissa", telefone: "19997865114", idade: 12    },
        {  email: "piloto@mail.com", nome: "Piloto", telefone: "19997123456", idade: 19    },
        {  email: "mariana@mail.com", nome: "Mariana", telefone: "19997865333", idade: 34    },
    ],
    produtos: [
        { nome: "Coca-Cola", preco: 2.99, estoque: 3, imagem: "coca.png"},
        { nome: "Pepsi", preco: 2.99, estoque: 5, imagem: "pepsi.png"},
        { nome: "Guaranazes", preco: 2.49, estoque: 5, imagem: "guaranazes.png"},
        { nome: "Dolly", preco: 2.19, estoque: 10, imagem: "dolly.png"},

    ]

}

export default DB;
