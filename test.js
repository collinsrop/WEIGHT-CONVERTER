"use strict";//activates modern js rules 
//styles
document.querySelector("body").style.backgroundImage="url('../background pics/background pic 10.jpg')";
document.querySelector("body").style.backgroundSize="cover";
document.querySelector("body").style.fontFamily="cursive";
//h1
document.querySelector("h1").style.textDecoration="underline";
document.querySelector("h1").style.color="white";
document.querySelector("h1").style.textAlign="center";
//input area
document.querySelector("#input").style.position="absolute";
document.querySelector("#input").style.top="30%";
document.querySelector("#input").style.left="40%";
document.querySelector("#input").style.width="200px";
document.querySelector("#input").style.height="40px";
document.querySelector("#input").style.borderRadius="10px 50px";
document.querySelector("#input").style.backgroundColor="black";
document.querySelector("#input").style.color="white";
document.querySelector("#input").style.textAlign="center";
document.querySelector("#input").style.fontSize="20px";
//button area
document.querySelector("button").style.position="absolute";
document.querySelector("button").style.top="40%";
document.querySelector("button").style.left="40%";
document.querySelector("button").style.borderRadius="50%";
document.querySelector("button").style.width="100px";
document.querySelector("button").style.height="50px";
//OUTPUT SECTION
document.querySelector("#output").style.position="absolute";
document.querySelector("#output").style.top="50%";
document.querySelector("#output").style.left="40%";
document.querySelector("#output").style.color="#FFFFFF";
document.querySelector("#output").style.fontSize="60px";
//conclide
document.querySelector("#conclude").style.color="red";
document.querySelector("#conclude").style.position="absolute";
document.querySelector("#conclude").style.top="70%";
document.querySelector("#conclude").style.left="30%";
document.querySelector("#conclude").style.fontSize="30px";
//functionality
document.addEventListener("DOMContentLoaded",allFunctions);
function allFunctions(){
  document.querySelector("button").addEventListener("click", convert);
  function convert(){
    let x =document.querySelector("#input").value;
    let y = document.querySelector("#output");
    let z=document.querySelector("#conclude");
    y.innerHTML=(x*2.2).toFixed(2)+"Ib";
    z.innerHTML=`Therefore ${y.innerHTML} are there in ${x} kgs`;
  }
  convert();
}
allFunctions();
