
function sum (){
    let a = +document.getElementsByName("a")[0].value   
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = a+b 
    result.innerHTML= "resultat: " + c   
}
function minus (){
    let a = +document.getElementsByName("a")[0].value   
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = a-b 
    result.innerHTML= "resultat: " + c   
}
function multiply (){
    let a = +document.getElementsByName("a")[0].value   
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = a*b 
    result.innerHTML= "resultat: " + c   
}
function division (){
    let a = +document.getElementsByName("a")[0].value   
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = a/b 
    result.innerHTML= "resultat: " + c   
}
function degree (){
    let a=+document.getElementsByName("a")[0].value
    let b=+document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
    let c = a**b
    result.innerHTML="resultat: " + c
}

