const LISTA = []
    for (let index = 0; index < 5; index++) {
        let elem = Math.floor((Math.random()*20+10))
        LISTA.push(elem)
    }
    console.log(LISTA)
    let txt = ""
    txt += "<ul>"
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<li>${LISTA[index]}</li>`
    }
    txt += "</ul>"


window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    
});

function elemekElerese1() {
   const SECTION = document.querySelector('section h2').textContent
   console.log(SECTION)
}
function elemekElerese2() {
    const IdIDE = document.getElementById("ide")
    IdIDE.innerHTML = `<p>Jó Reggelt!</p>`
}
function elemekElerese3() {
    const ClassIDE = document.querySelectorAll(".ide")[0]
    ClassIDE.innerHTML = `<p>Jó Reggelt!</p>`
}
function elemekElerese4(){
    
    const ELEM = document.querySelectorAll(".lista")[0]
    ELEM.innerHTML = txt
}
function elemekFormazasa1(){
    const ELEM = document.querySelector(".lista")
    ELEM.classList.add("formazott")
}
function esemenyKezeles1(){
    const ELEMEK = document.querySelectorAll(".lista ul li")
    console.log(ELEMEK)
    for (let index = 0; index < ELEMEK.length; index++) {
        let elem = ELEMEK[index]
        console.log(elem)
        elem.addEventListener("click", function(){
            var kattintasElement = document.querySelector(".kattintasutan")
            let divElement = document.querySelector(".lista")
            console.log(divElement)
            kattintasElement.innerHTML = divElement.innerHTML
            kattintasElement.classList.add("formazott")
        })
        
    }
}
