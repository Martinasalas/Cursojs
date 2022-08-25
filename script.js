function calculoimc(){

let peso = prompt ("Ingresa tu peso actual en KG");
let altura = prompt ("Ingresa tu altura en METROS");
const altura2 = altura*altura 

const imcfinal = peso / altura2 
 if (imcfinal<18.5) {
 alert ('Tu IMC es de' + imcfinal + 'Tu peso esta por debajo de lo normal')
 } else if(imcfinal > 18.5 && imcfinal < 25) {
 alert ('Tu IMC es de' + imcfinal + 'Tu peso es normal')
 } else if(imcfinal > 24.9  && imcfinal < 30 ) {
 alert ('Tu IMC es de' + imcfinal + 'Tu peso esta por arriba de lo normal')
 } else  if (imcfinal > 29.9 ) {
 alert ('Tu IMC es de' + imcfinal + 'Tenes obesidad')
 }



}


calculoimc ()

