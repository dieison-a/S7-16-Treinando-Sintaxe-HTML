let tagHeader = document.querySelector("header")
tagHeader.id = "cabecalho"
let tagMain = document.querySelector("main")
tagMain.id = "conteudo"
let tagFooter = document.querySelector("footer")
tagFooter.id = "rodape"

let tagNav = document.createElement("nav")
tagHeader.appendChild(tagNav)

let tagUl = document.createElement("ul")
tagNav.appendChild(tagUl)

let menu = ["Home", "Quem Somos", "Produtos", "Fale Conosco"]
menu.forEach((list, i) => {
    let tagLi = document.createElement("li")
    tagLi.id = `item${i}Menu`
    tagLi.innerText = list
    tagUl.appendChild(tagLi)
})

//let tagH1 = document.createElement("h1")
let tagH1 = document.createTextNode ("Olá Mundo.")
tagMain.appendChild(tagH1)