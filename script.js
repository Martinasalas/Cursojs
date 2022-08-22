
let ingreseAnioNacimiento = prompt ("Ingresa tu anio de nacimiento");
const anioActual = 2022;
let anioNacimiento = (anioActual - ingreseAnioNacimiento);
   
while (ingreseAnioNacimiento == "") {
   alert ("debes ingresar un anio para seguir")
   ingreseAnioNacimiento = prompt ("Ingresa tu anio de nacimiento")
} 
if  (anioNacimiento >= 18 ) {
   alert ("Felicitaciones! podes navegar en nuestro sitio");
}
   else{ 
      alert ("Lo sentimos! necesitas ser mayor de edad para navegar en nuestro sitio");
   }
