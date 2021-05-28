window.addEventListener("load",function(){

init();



function init(){cambioheroe()}




function cambioheroe(){    let witcher=document.getElementById("witcher")
let aragon=document.getElementById("aragon")
let vampire=document.getElementById("vampire")
let sirocou=document.getElementById("sirocou")

witcher.addEventListener("click",function(){

let imagen=document.getElementById("imagenpr").src="img/witcher.jpg"


})
vampire.addEventListener("click",function(){

let imagen=document.getElementById("imagenpr").src="img/vampiro.jpg"

})
aragon.addEventListener("click",function(){
    let imagen=document.getElementById("imagenpr").src="img/aragon.jpg"

})
sirocou.addEventListener("click",function(){
    let imagen=document.getElementById("imagenpr").src="img/sirocou.jpg"

})

}


})