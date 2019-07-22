//AUTOR : KEVIN PILLAJO 
//DESCRIPCION: ESTE PROGRMA MOSTRARA  EL CABALLO GANADOR Y CON QUE PUNTAJE PASO LA LINEA DE META 
function Caballo(nombre,raza){
    //atributos
    this.nombre=nombre;
    this.raza=raza;
    this.avance=[];
    //metodos
    this.avanzar=avanzar;
    this.totalRecorrido=totalRecorrido;
}

function avanzar(){
    //console.log(Caballo.nombre+ " esta corriendo");
    var metrosRecorridos=Math.floor(Math.random()*6)+1;
    this.avance.push(metrosRecorridos);
    return metrosRecorridos
}

function totalRecorrido(){
    return this.avance.reduce(sumar);
}
function sumar(numeroTotal, numeroActual){
    return numeroTotal+numeroActual;
}
function x(){
    var y = Math.floor(Math.random()*6)+1;
    return y
}
