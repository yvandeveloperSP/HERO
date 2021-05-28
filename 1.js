import {heroess}  from './datos.js'



window.addEventListener("load",function(){


init();


function init(){

const botonesheroes=document.querySelectorAll(".a");
//Para cada boton configuramos la accion que tendra que hacer cuando el usuario le de click
botonesheroes.forEach(
function(button){button.addEventListener("click",cambioheroe)}



)


//Configuar los checkbox de magia


const listacheckboxmagia=document.querySelectorAll(".checkmagia");
listacheckboxmagia.forEach(
(elemento)=>{

if(
    //Ha marcado un nuevo elemento y se pondra en el array de magia del heroess
    elemento.checked){heroess.amagia.push(elemento.name)}

else{
    //Quitamos el elemento que acaba de desenmarcarse
    heroess.amagia=heroess.amagia.filter(item=> item !==elemento.name)


}
 const actu=document.getElementById("actu");
 actu.addEventListener("click",function(){


    const botonelemento=document.querySelectorAll(".aaa");
    botonelemento.forEach(
    function(button){button.addEventListener("click",cambioelemento)})


 })
}

)



function cambioheroe(){

let nombreheroe=this.id;//This hace referencia al objeto que le llama en este caso button
heroess.nombre=nombreheroe;
const imgheroe=document.getElementById("imagenpr");
imgheroe.src= `img/${nombreheroe}.jpg`;

//Boton activo anterior deberia pasar a ser un boton normal , perder la clase a-on


const botonanterior=document.querySelector(".a-on");
botonanterior.classList.toggle("a-on")



//Boton actual

this.classList.toggle("a-on")






}

console.log(heroess)

}






function cambioheroe(){

    let nombreheroe=this.id;//This hace referencia al objeto que le llama en este caso button
    heroess.nombre=nombreheroe;
    const imgheroe=document.getElementById("imagenpr");
    imgheroe.src= `img/${nombreheroe}.jpg`;
    
    //Boton activo anterior deberia pasar a ser un boton normal , perder la clase a-on
    
    
    const botonanterior=document.querySelector(".a-on");
    botonanterior.classList.toggle("a-on")
    
    
    
    //Boton actual
    
    this.classList.toggle("a-on")
    
    
    
    
    
    
    }
    




function listamagia(){
let listamagia1=document.querySelectorAll(".magia")

listamagia1.forEach((elemento)=>{
 
 
    elemento.addEventListener("click",function(){
refrescarmagia(this.name,this.checked)

    })
})

}

function refrescarmagia(pmagia,pactiva){


if(pactiva){heroess.amagia.push(pmagia)}

else{heroess.amagia=heroess.amagia.filter(element=> element !==pmagia)


}


}

const actu =document.getElementById("actu");
actu.addEventListener("click",magiaheroe)

    
function magiaheroe(){

magia.forEach(
function(itemmagic){
const magiaencontrada=heroess.amagia.find((magichero)=>magichero==itemmagic);
let emagic=document.getElementById(itemmagic);
emagic.classList.remove("item-off","item-on");//Borramos las clases que tenga
emagic.classList.add(magiaencontrada?"item-on":"item-off");//añadimos la clase correspondiente


}




)









}

})