//AUTOR : KEVIN PILLAJO 
//DESCRIPCION: ESTE PROGRMA MOSTRARA  EL CABALLO GANADOR Y CON QUE PUNTAJE PASO LA LINEA DE META 


// ARCHIVO JS
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



// estructura del html 




<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<head>
    <style>
        #caballo1{
            position: relative;
            cursor: pointer;
        }
        #caballo2{
            position: relative;
            cursor: pointer;
        }
    
    
    </style>
</head>
    <p><button onclick="myMove()" id="jugador1">jugador1</button></p>
    <p><button onclick="myMove1()" id="jugador2">jugador2</button></p>
    <input type="button" value="ganador" id="btnganador">
    <h1>Cada vez que le da clic a un boton de jugador el caballo empezara a correr desde el inicio</h1>
    
    <div id="position">
        <div id="animate"></div>
    </div>
    <img id="caballo1" src="caballo.gif" width="120" height="80">
    <div id="position">
            <div id="animate"></div>
        </div>
    <img id="caballo2" src="caballo.gif" width="120" height="80"> 
</body>

<script src="caballo.js"></script>
<script>
var potro=new Caballo ("Rosinante", "Quiteño")
var robot= new Caballo("Tiro al blanco","Robot")
document.getElementById("jugador1").addEventListener("click",function(){
        //no llamo a la funcion avanzar porque repite la funcion dos veces lo cual era un error
        
              
        console.log(potro.nombre+ " esta avanzando "+ potro.avanzar())
    })
document.getElementById("jugador2").addEventListener("click",function(){
      
           
        console.log(robot.nombre+ " esta avanzando "+ robot.avanzar())
    })
document.getElementById("btnganador").addEventListener("click",function(){
    if(potro.totalRecorrido()===robot.totalRecorrido()){
        console.log("empate")
        
    }else{
    if(potro.totalRecorrido()>robot.totalRecorrido()){
        console.log(potro.nombre+ " es ganador")
        
    }else{
        console.log(robot.nombre+" es ganador")
        
    }
    }
    console.log("_______________")
    console.log(potro.nombre+" recorre "+ potro.totalRecorrido())
    console.log(robot.nombre+" recorre "+ robot.totalRecorrido())
})
function myMove(){
        var elem= document.getElementById("caballo1");
        var pos=0;
        var sumaPosiciones=0;
        var maximo=10* x();
        var id=setInterval(frame, 50)
        function frame(){
            if(sumaPosiciones > 2000){
                clearInterval(id)
            }else{
                pos+=maximo
                sumaPosiciones+=pos
                elem.style.left=pos + "px";
            }
        }
    }
    function myMove1(){
        var elem= document.getElementById("caballo2");
        var pos=0;
        var sumaPosiciones=0;
        var maximo=10* x();
        var id=setInterval(frame, 50)
        function frame(){
            if(sumaPosiciones > 2000){
                clearInterval(id)
            }else{
                pos+=maximo
                sumaPosiciones+=pos
                elem.style.left=pos + "px";
            }
        }
    }
</script>
</html>
