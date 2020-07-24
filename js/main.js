var nome = "Adryanno Majoros";
var idade = 49;
var idade2 = 10;
var frase = "Japão é o melhor time do Mundo";

var lista = ["maça", "Pera", "Banana", "Laranja"]
lista.push("UVA");

alert(nome + " tem" + idade + "anos");
// alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"))
console.log(frase.toUpperCase() );
console.log(frase.toLowerCase() );

//exemplo matemático
console.log(idade * idade2);

console.log(lista[1]);
alert(lista[2]);

console.log(lista);
lista.pop();
console.log(lista);

console.log(lista.length);

console.log(lista.reverse());

console.log(lista.toString());

console.log(lista.join("!"));

var fruta = {nome:"Limão", cor:"VERDE"};
console.log(fruta.nome);
console.log(fruta);
//alert(fruta.cor);

var frutas = [{nome:"tomate", cor:"VERDE"} , {nome:"ABACATE", cor:"Amarelo"} ];
console.log(frutas[1].nome);
console.log(frutas);

var idadess = prompt("Qual sua idade");

// var idadess = 18;
if (idadess >= 18){
    console.log("Maior de idade");
}else{
    console.log("MENORRR de idade");
};

var count = 0;
while (count < 5){
    console.log(count);
    //count = count + 1;
    count++
};

var contador;
for(contador=1; contador <=5; contador++){
    console.log(contador);
};

var D = new Date();
console.log(D);
console.log(D.getDay());
console.log(D.getMinutes());




