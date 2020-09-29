// JavaScript Document

if ( screen.width >= 1024 )
{
	//Aqui cargara una hoja de estilos para las resoluciones mayores a 1024
document.write('<link rel="stylesheet" type="text/css" href="css/estilos1.css" />'); 
}
else if ( screen.width < 1024)
{
	//Aqui cargara una hoja de estilos para las resoluciones menores a 1024
document.write('<link rel="stylesheet" type="text/css" href="css/menor1024.css" />'); 
}
