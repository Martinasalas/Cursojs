
let ingreseAnioNacimiento = prompt ("Ingresa tu anio de nacimiento");
const anioActual = 2022;
let anioNacimiento = (anioActual - ingreseAnioNacimiento);


do {(alert ("Debes ingresar tu anio de nacimiento para seguir"));
   ingreseAnioNacimiento = prompt ("Ingresa tu anio de nacimiento")}

while  (ingreseAnioNacimiento == "");
do {alert ("debes ingresar un numero");
   ingreseAnioNacimiento = prompt ("Ingresa tu anio de nacimiento")}
while (isNaN(ingreseAnioNacimiento))
   

if  (anioNacimiento >= 18 ) {
   alert ("Felicitaciones! podes navegar en nuestro sitio");
}
   else{ 
      alert ("Lo sentimos! necesitas ser mayor de edad para navegar en nuestro sitio");
   }