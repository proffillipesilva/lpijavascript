class Produto {
    nome: string;
    preco: number;
    estoque: number;
    imagem: string;

    constructor(nome: string, preco: number, estoque: number, imagem: string ){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        this.imagem = imagem;
    }
}