//  let num1 = 2;
// let num2 = 5;
// let resultado = (num1 + num2);
// console.log (resultado);


// let base = 36;
// let h = 99;
// let resultado = (base * h);
// console.log (resultado);



// let c = 15
// let f = ( c * 9/5) + 32.
// console.log(f)


// let n1= 12;
// let n2= 23;
// let n3= 56;
// let soma = n1 + n2 + n3;
// let resultado = soma/3
// console.log (resultado)


// let n1= 12;
// let n2= 23;
// let resultado = n1 * n2 
// console.log ("O resultado é", resultado);


// let num = 0;
// if (num == 0) {
//     console.log("É zero");
// } else if (num < 0 ) {
//     console.log ("É um número negativo");}
//   else {
//          console.log ("É um número positivo");}



// let idade = 17;
// if (idade >= 18) {
//     console.log("É de maior");
// } else {
//          console.log ("É menor de idade");}


// let num = 11;
// let divisão = num % 2; 
// if (divisão == 0) {
//     console.log("É par");
// } else {
//          console.log ("É impar");}


// let nota1 = 10
// let nota2 = 10
// let media = (nota1 + nota2) / 2

// if (media >= 7,  media == 10 ) {
//     console.log("Aprovado");
// } else if (media >= 11 ) {
//     console.log ("Error");}
//   else {
//          console.log ("Reprovado");}

// let num1 = 10
// let num2 = 2
// let num3 = 3

// if ( num1> num2, num1> num3 ) {
//     console.log("O maior é", num1);
// } else if (num2> num3 ) {
//     console.log ("O maior é", num2);}
//   else {
//         console.log ("O maior é ", num3);}


// let id = 60

// if ( id <=11  ) {
//      console.log("Criança");
//  } else if (id >=12, id <= 17) {
//     console.log ("Adolescente");}
//    else if (id >=18, id <= 59) {
//     console.log ("Adulto");}
//  else {
//         console.log ("Idoso");}


// let ano = 2025
// if (ano %4 == 0 && ano %100 != 0) {
//      console.log("É um ano bissexto")
//  } else if (ano %400 == 0) {
//      console.log("É um ano bissexto")
//  } else {
//      console.log("Não é um ano bissexto")
//  }


// let num1 = 2
// let num2 = 2
// let operacao = "*"
// let soma = num1 + num2
// let subtracao = num1 - num2
// let multiplicacao = num1 * num2
// let divisao = num1 / num2
// switch (true) {
//     case operacao == "+":
//         console.log(`${num1} ${operacao} ${num2} é igual a: ${soma}`)
//         break
//     case operacao == "-":
//         console.log(`${num1} ${operacao} ${num2} é igual a: ${subtracao}`)
//         break
//     case operacao == "*":
//         console.log(`${num1} ${operacao} ${num2} é igual a: ${multiplicacao}`)
//         break
//     case operacao == "/":
//         console.log(`${num1} ${operacao} ${num2} é igual a: ${divisao}`)
//         break
// }


//  let dia = 1
//  switch (dia) {
//      case 1:
//          console.log("Segunda-feira")
//          break;
//      case 2: 
//          console.log("Terça-feira")
//          break;
//      case 3:
//          console.log("Quarta-feira")
//          break;
//      case 4: 
//          console.log("Quinta-feira")
//          break;
//      case 5: 
//          console.log("Sexta-feira")
//          break;
//      case 6: 
//          console.log("Sábado")
//          break;
//      default: 
//          console.log("Domingo")
//  }

// let nota = 10
//  if (nota == 0){
//      console.log("F")
//  } else if (nota == 1 || nota == 2){
//      console.log ("E")
//  } else if (nota == 3 || nota == 4){
//      console.log("D")
//  } else if (nota == 5 || nota == 6){
//      console.log("C")
//  } else if (nota == 7 || nota == 8){
//      console.log("B")
//  } else {
//     console.log("A")
//  }


// for (let i = 1; i < 11; i++){
//     console.log(i);
//  }


// let soma = 0
// for (let i = 0; i < 101; i++) {
//     console.log(soma = soma +i);


//  let numero = 0
//   let limite = 10

//  for (let i = 1; i <= limite; i++) {
//       console.log(`${numero} X ${i} = ${numero * i}`);
//   }


//  let contador = 10;
//   while (contador  >= 1) {
//      console.log(contador);
//      contador--;
//  }

// for (let i = 2; i <51; i= i+2) 
//          console.log(i)
 
// let num = 3
// let fat = 1
//     for (let i = 1; i <= num; i++) {
//         fat *= i;
//     }
//     console.log(fat)

// let nomes = ['Gabriela', 'Lorena', 'Luana', 'Lucas', 'Maria'];
//   for (let i = 0;i <= 4; i++) {
//       console.log(nomes[i]);}

//let nums = [1, 2, 3, 4, 5, 6, 7, 8, 46, 98]
     //for (let i = 0; i <= nums.length; i++){
         //if (nums[i]%2 == 0) {
          //    console.log(nums[i])
        //}
     //}

// let nums = [27, 45, 10, 53]
//  let soma = 0
//      for(let i = 0; i < nums.length; i++) {
//      soma += nums[i]
//     }
// console.log(soma)


//  let nums = [1300, 300, 40, 5240, 140]
// let maiornum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//      if (nums[i] > maiornum) {
//             maiornum = nums[i];
//         }
//     }
//      console.log("O maior número é o:", maiornum);


// let nums = [20, 30, 22, 50]
// let num = 40
// console.log(nums.includes(num))

//      let lista = ['Gustavo', 'Abacaxi', 'Batata', 'Indios'];
// lista.push("Jurema");
// console.log(lista)
    

//  let lista = ['Gustavo', 'Abacaxi', 'Batata', 'Indios'];
// lista.pop()
// console.log(lista)