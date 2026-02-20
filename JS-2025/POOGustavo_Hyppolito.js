 // const pessoa = {
// nome: "João",
 // idade: 30, 
//  falar: function() {
//    console.log(`Olá, meu nome é ${this.nome}`);
 //    }
 //  };
 
 //  pessoa.falar();

// class Pessoa {
// constructor(name, idade) {
// this.name = 'Gustavo';
// this.idade = 16;
// }
 
//  saudacao() {
// return `Olá, meu nome é ${this.name} e minha idade é ${this.idade}`
//  }}
//  const pessoa1 = new Pessoa("Gustavo", 16);
//     console.log(pessoa1.saudacao());




// class Produto {
// constructor(nome, preco, quantidade) {
// this.nome = "Coca";
// this.preco = 10.99;
// this.quantidade = 2;
// }
// total() {
// return `${this.preco * this.quantidade}`;
// }
// }

// const produto1 = new Produto("Coca", 10.99, 2);
// console.log(produto1.total());


// class Filme{
// constructor(titulo, diretor, ano){
// this.titulo = "Matrix";
// this.diretor = "Wachowski";
// this.ano = 1999;
// }
// descricao(){
// return `O filme ${this.titulo} foi lançado em ${this.ano} e dirigido por ${this.diretor}`;
// }
// }   
// const filme1 = new Filme("Matrix", "Wachowski", 1999);
// console.log(filme1.descricao());


// class Aluno {
// constructor(nome, nota1, nota2) {
// this.nome = "Gustavo";
// this.nota1 = 3;
// this.nota2 = 7;
// }

// calcularmedia() {
// let media1 = (this.nota1 + this.nota2) / 2;
// return media1
// }
// resultado() {
//     let media1 = this.calcularmedia()
// if (media1 >= 7) {
//     return `Aprovado com média ${media1}`;
// }
// return `Reprovado com média ${media1}`;   
// }}
// const aluno1 = new Aluno ("Gustavo", 8, 7);
// console.log(aluno1.resultado());


// class Retangulo {
// constructor(base, h){
// this.base = 5;
// this.h = 10;
// }
// area(){
// return this.base * this.h;
// }   
// perimetro(){
// return 2 * (this.base + this.h);
// }
// }
// const retangulo1 = new Retangulo(5, 10);
// console.log(retangulo1.area());
// console.log(retangulo1.perimetro());


// class Carro {
// constructor(marca, modelo, combustivel){
// this.marca = "mitsubishi";
// this.modelo = "eclipse";
// this.combustivel = 20 ;
// this.litros = 10;
// }
// Abastecer(litros){
   
// return this.combustivel + litros; 
// }
// Dirigir(km){
//     return this.combustivel - (km / 10);
// }
// }
// const carro1 = new Carro("mitsubishi", "eclipse", 20, 10);
// console.log(carro1.Abastecer(50));
// console.log(carro1.Dirigir(100));


// class ContaBancaria {
// #saldo 
// numeroConta
// constructor(saldo, numeroConta){
//     this.#saldo = saldo
//     this.numeroConta = numeroConta
//     }

// exibirSaldo(){
//     return this.#saldo;
// }}
// let conta1 = new ContaBancaria(100, 12345);
// console.log(conta1.exibirSaldo());


// class ContaBancaria {
// #saldo 
// numeroConta

// constructor({saldo, numeroConta}){
//     this.#saldo
//     this.numeroConta
// }

// set setSaldo(valeu){
//     return this.#saldo = valeu;
// }
// get getSaldo(){
//     return this.#saldo;
// }}

// let conta1 = new ContaBancaria(1250, "R2D2")
// console.log(conta1.numeroConta);
// console.log(conta1.getSaldo);
// conta1.#getsaldo = 150
// console.log(conta1.getSaldo);

