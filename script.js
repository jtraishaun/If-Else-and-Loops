var wrapperEle = document.body.querySelector(".wrapper");
var animals = [ "dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<animals.length; i++){
 checkAnimal(animals[i]);
}

function checkAnimal(str){
   var ele = document.createElement("div");
  if(str==="dog"){
    ele.innerHTML="borf borf";
  }else if (str === "cat"){
    ele.innerHTML="I am a cat";
  }else{
    ele.innerHTML="I am an animal";
  }
  
  wrapperEle.appendChild(ele);
}