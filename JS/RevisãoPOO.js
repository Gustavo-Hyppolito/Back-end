//Exercicio 1 - Classe simples crie uma classe chamada pessoa que possua: -nome e -idade. Depois exiba

//class Pessoa {
//constructor(name, idade) {
//this.name = name;
//this.idade = idade;
//}

//saudacao() {
//return `Olá, meu nome é ${this.name} e minha idade é ${this.idade}`
// }}
//const pessoa1 = new Pessoa("Gustavo", 16);
//console.log(pessoa1.saudacao());

// Exercicio 2 - classe Produto com nome e preco e monstrarPreco().

// class Produto {
//   constructor(name, preco) {
//     this.name = name;
//     this.preco = preco;
//   }

//   classificacao() {
//     return `Olá,o nome é ${this.name} e o preco é ${this.preco}`;
//   }
// }
// const produto1 = new Produto("Monopoli", 1650);
// console.log(produto1.classificacao());


//Exercico 3 - classe funcionario que tenha nome e depois faça classe gerente que herda de funcionario e possui setor.Exibir etor e cliente. 


// class Funcionario {
//    constructor(nome){
//    this.nome = nome
// }}

// class Gerente extends Funcionario {
//    constructor(nome, setor){
//       super(nome)
//       this.setor = setor
//    }
//    mostrar_dados() { return `Olá,o nome é ${this.nome} e o setor é ${this.setor}`; }
// }

// let funcionario1 = new Gerente ("Heitor", "Bar")
// console.log(funcionario1.mostrar_dados());

// Exercicio 4 Crie uma classe veiculo(marca) depois carro (modelo) crie um método exibir marca e modelo de carro.

// class Veiculo {
//      constructor(marca, ano, portas){
//          this.marca = marca
//         this.ano = ano
//         this.portas = portas
//  }
//  }

// class Carro extends Veiculo {
//      constructor (marca, ano, portas){
//          super(marca, ano, portas )
//          this.portas = portas
//      }
//  }
// let carro1 = new Carro ("mitshubichi", 2015, 4)
//  console.log(`O carro Lancer da marca ${carro1.marca} do ano de ${carro1.ano} com ${carro1.portas} portas`)


// Exercicio 5 encapsulamento clase conta o saldo atribuido privado; método depositar(valor) e método mostrarSaldo.

// class Conta{
//    #saldo
//    constructor(){
//       this.#saldo = 0 
//    }
//    depositar(valor){
//       if(valor > 0){
//          this.#saldo += valor
//       }else{
//          console.log("valor errado")
//       }
//    }
//    mostrarsaldo(){
//       console.log(`Saldo atual: ${this.#saldo}`)
//    }
// }

// const conta1 = new Conta()
// conta1.depositar(1000)
// conta1.mostrarsaldo()


// Exercicio 6 - encapsulamento (aluno) crie classe aluno onde nota é atributo privado e existe um método definirNota(nota) e um método mostrarNota()

//  class Aluno{
//    #nota
//    constructor(){
//       this.#nota = 0 
//    }
//    definirNota(nota){
//       if(valor >= 0){
//          this.#nota += nota
//       }else{
//          console.log("nota errado")
//       }
//    }
//    mostrarNota(){
//       console.log(`Nota atual: ${this.#nota}`)
//    }
// }

// const aluno1 = new Aluno();
// aluno1.definirNota(10)
// aluno1.mostrarNota()
