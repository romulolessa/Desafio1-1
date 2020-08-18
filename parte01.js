//Calculo de IMC
const nome = "Carlos";
const peso = 70;
const altura = 1.70;

const imc = peso / (altura * altura);

if( imc >= 30 ){
  console.log(`imc = ${imc} Carlos você está acima do peso`)
} else{
  console.log(`imc = ${imc}  Carlos você não está acima do peso`)
}