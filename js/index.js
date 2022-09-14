//criando os carts
function addCart(){
let element = document.getElementsByClassName("vitrineProduto")[0]
let contagemItens = 0
let contagemValorTotal = 0

//valor total
let element4 = document.getElementsByClassName("totalDaCompra")[0]
let h6 = document.createElement("h6")
let h7 = document.createElement("h7")

element4.appendChild(h6)
element4.appendChild(h7)

if(contagemItens == 0){
    let compras = document.getElementsByClassName("comprasNoCarrinho")[0]
    compras.appendChild(h6)
    compras.appendChild(h7)
    h6.innerText = "CARRINHO VAZIO"
    h7.innerText = "ADICIONAR ITENS"
}

for(let i = 0; i , i < data.length; i++){
    //criando carts
    let li = document.createElement("li")
    let div3 = document.createElement("div")
    div3.classList.add("listadeprodutos")
    let img = document.createElement ("img")
    let h1 = document.createElement ("h1")
    h1.classList.add("tag")
    let h2 = document.createElement ("h2")
    h2.classList.add("nomeDoProduto")
    let h3 = document.createElement ("h3")
    h3.classList.add("descricaoDoProduto")
    let p = document.createElement("p")

    //criando imagens
    img.src = data[i].img
    img.alt = data[i].nameItem

    //criando descrição
    h1.innerText = data[i].tag[0]
    h2.innerText = data[i].nameItem
    h3.innerText = data[i].description
    p.innerText = `R$ ${data[i].value}`

    //criando botão
    let button = document.createElement("button")
    button.classList.add("button")
    button.type = "submit"
    button.innerText = data[i].addCart

    //referenciando
    element.appendChild(li)
    li.appendChild(img)
    li.appendChild(div3)
    div3.appendChild(h1)
    div3.appendChild(h2)
    div3.appendChild(h3)
    div3.appendChild(p)
    li.appendChild(button)

    //adicionar ao carrinho de compras
    button.addEventListener("click", function(){
        let element2 = document.getElementsByClassName("comprasNoCarrinho")[0]
        let div = document.createElement("div")
        div.classList.add("imagemNoCarrinho")
        let div2 = document.createElement("div")
        div2.classList.add("dadosDoProduto")
        let li2 = document.createElement("li")
        let img2 = document.createElement("img") //imagem do produto
        let h4 = document.createElement("h1") //nome do produto
        let h5 = document.createElement("h2") //preço
        let button2 = document.createElement("button") //botão remover
    
        img2.src = data[i].img
        img2.alt = data[i].nameItem
    
        h4.innerText = data[i].nameItem
        h5.innerText = `R$ ${data[i].value}`
    
        button2.classList.add("button2")
        button2.type = "submit"
        button2.innerText = "Remover Produto"
    
        element2.appendChild(li2)
        li2.appendChild(div)
        li2.appendChild(div2)
        div.appendChild(img2)
        div2.appendChild(h4)
        div2.appendChild(h5)
        div2.appendChild(button2)

        contagemItens = contagemItens + 1
        contagemValorTotal = contagemValorTotal + data[i].value

        //adicionar os totais
        function valorTotal(){
            
            let total2 = document.getElementsByClassName("totalDaCompra")[0]
            total2.appendChild(h6)
            total2.appendChild(h7)
        
            h6.innerText = "Total Itens: " + `${contagemItens}`
            h7.innerText = "Valor Total: R$" + `${contagemValorTotal}`
        }
        valorTotal()


        //remover do carrinho de compras
            button2.addEventListener("click", function(){
             let element3 = document.getElementsByClassName("comprasNoCarrinho")[0]
             element3.removeChild(li2)

            //removendo contagem
            contagemItens = contagemItens - 1
            contagemValorTotal = contagemValorTotal - data[i].value
            h6.innerText = "Total Itens: " + `${contagemItens}`
            h7.innerText = "Valor Total: R$" + `${contagemValorTotal}`
            
            //mostrar carrinho vazio
            if(contagemItens == 0){
                let compras = document.getElementsByClassName("comprasNoCarrinho")[0]
                compras.appendChild(h6)
                compras.appendChild(h7)
                h6.innerText = "CARRINHO VAZIO"
                h7.innerText = "ADICIONAR ITENS"
            }
        });

    });

    } 

}
addCart()

//função para pesquisa
let button5 = document.getElementsByClassName("button1")[0]
button5.addEventListener("click", function(event){
    event.preventDefault()
    let nomeDaPesquisa = document.querySelector("#pesquisa")
    let texto = nomeDaPesquisa.value

    let ul = document.getElementsByClassName("vitrineProduto")[0]
    ul.innerHTML = ""
   

    let li = document.createElement("li")
    let div3 = document.createElement("div")
    div3.classList.add("listadeprodutos")
    let img = document.createElement ("img")
    let h1 = document.createElement ("h1")
    h1.classList.add("tag")
    let h2 = document.createElement ("h2")
    h2.classList.add("nomeDoProduto")
    let h3 = document.createElement ("h3")
    h3.classList.add("descricaoDoProduto")
    let p = document.createElement("p")  
  

    ul.appendChild(li)
    li.appendChild(img)
    li.appendChild(div3)
    div3.appendChild(h1)
    div3.appendChild(h2)
    div3.appendChild(h3)
    div3.appendChild(p)

    for(let i = 0; i < data.length; i++){
      if(texto.trim() === data[i].nameItem){
        img.src = data[i].img
        img.alt = data[i].nameItem
    
        //criando descrição
        h1.innerText = data[i].tag[0]
        h2.innerText = data[i].nameItem
        h3.innerText = data[i].description
        p.innerText = `R$ ${data[i].value}`
      }
        
    }
        
});

//função para secão todos
let li1Menu = document.getElementsByClassName("todos")[0]
li1Menu.addEventListener("click", function(event){
    let tag1 = document.getElementsByClassName("container2")[0]
    let tag2 = document.getElementsByClassName("vitrineProduto")[0]
    tag1.removeChild(tag2)

    let ul = document.createElement("ul")
    ul.classList.add("vitrineProduto")
    tag1.appendChild(ul)

    for(let i = 0; i , i < data.length; i++){
        let ul = document.getElementsByClassName("vitrineProduto")[0]
        let li = document.createElement("li")
        let div3 = document.createElement("div")
        div3.classList.add("listadeprodutos")
        let img = document.createElement ("img")
        let h1 = document.createElement ("h1")
        h1.classList.add("tag")
        let h2 = document.createElement ("h2")
        h2.classList.add("nomeDoProduto")
        let h3 = document.createElement ("h3")
        h3.classList.add("descricaoDoProduto")
        let p = document.createElement("p")
    
        //criando imagens
        img.src = data[i].img
        img.alt = data[i].nameItem
    
        //criando descrição
        h1.innerText = data[i].tag[0]
        h2.innerText = data[i].nameItem
        h3.innerText = data[i].description
        p.innerText = `R$ ${data[i].value}`
    
        //criando botão
        let button = document.createElement("button")
        button.classList.add("button")
        button.type = "submit"
        button.innerText = data[i].addCart
    
        //referenciando
        ul.appendChild(li)
        li.appendChild(img)
        li.appendChild(div3)
        div3.appendChild(h1)
        div3.appendChild(h2)
        div3.appendChild(h3)
        div3.appendChild(p)
        li.appendChild(button)
    }    
});


//função para seção alianças de casamento
let li2Menu = document.getElementsByClassName("aliancasDeCasamento")[0]
li2Menu.addEventListener("click", function(event){
    event.preventDefault()
    let tag1 = document.getElementsByClassName("container2")[0]
    let tag2 = document.getElementsByClassName("vitrineProduto")[0]
    tag1.removeChild(tag2)

    let ul = document.createElement("ul")
    ul.classList.add("vitrineProduto")
    tag1.appendChild(ul)

    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Aliança de Casamento"){
            let ul = document.getElementsByClassName("vitrineProduto")[0]
            let li = document.createElement("li")
            let div3 = document.createElement("div")
            div3.classList.add("listadeprodutos")
            let img = document.createElement ("img")
            let h1 = document.createElement ("h1")
            h1.classList.add("tag")
            let h2 = document.createElement ("h2")
            h2.classList.add("nomeDoProduto")
            let h3 = document.createElement ("h3")
            h3.classList.add("descricaoDoProduto")
            let p = document.createElement("p")
        
            //criando imagens
            img.src = data[i].img
            img.alt = data[i].nameItem
        
            //criando descrição
            h1.innerText = data[i].tag[0]
            h2.innerText = data[i].nameItem
            h3.innerText = data[i].description
            p.innerText = `R$ ${data[i].value}`
        
            //referenciando
            ul.appendChild(li)
            li.appendChild(img)
            li.appendChild(div3)
            div3.appendChild(h1)
            div3.appendChild(h2)
            div3.appendChild(h3)
            div3.appendChild(p)
            
        }    
    }
});

//função para seção alianças de namoro
let li3Menu = document.getElementsByClassName("aliancasDeNamoro")[0]
li3Menu.addEventListener("click", function(event){
    event.preventDefault()
    let tag1 = document.getElementsByClassName("container2")[0]
    let tag2 = document.getElementsByClassName("vitrineProduto")[0]
    tag1.removeChild(tag2)


    let ul = document.createElement("ul")
    ul.classList.add("vitrineProduto")
    tag1.appendChild(ul)

    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Aliança de Namoro"){
            let ul = document.getElementsByClassName("vitrineProduto")[0]
            let li = document.createElement("li")
            let div3 = document.createElement("div")
            div3.classList.add("listadeprodutos")
            let img = document.createElement ("img")
            let h1 = document.createElement ("h1")
            h1.classList.add("tag")
            let h2 = document.createElement ("h2")
            h2.classList.add("nomeDoProduto")
            let h3 = document.createElement ("h3")
            h3.classList.add("descricaoDoProduto")
            let p = document.createElement("p")
        
            //criando imagens
            img.src = data[i].img
            img.alt = data[i].nameItem
        
            //criando descrição
            h1.innerText = data[i].tag[0]
            h2.innerText = data[i].nameItem
            h3.innerText = data[i].description
            p.innerText = `R$ ${data[i].value}`
  
            //referenciando
            
            ul.appendChild(li)
            li.appendChild(img)
            li.appendChild(div3)
            div3.appendChild(h1)
            div3.appendChild(h2)
            div3.appendChild(h3)
            div3.appendChild(p)
        }    
    }
});

//função para seção alianças de anéis
let li4Menu = document.getElementsByClassName("aneis")[0]
li4Menu.addEventListener("click", function(event){
    event.preventDefault()
    let tag1 = document.getElementsByClassName("container2")[0]
    let tag2 = document.getElementsByClassName("vitrineProduto")[0]
    tag1.removeChild(tag2)

    let ul = document.createElement("ul")
    ul.classList.add("vitrineProduto")
    tag1.appendChild(ul)

    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Anéis"){
            let ul = document.getElementsByClassName("vitrineProduto")[0]
            let li = document.createElement("li")
            let div3 = document.createElement("div")
            div3.classList.add("listadeprodutos")
            let img = document.createElement ("img")
            let h1 = document.createElement ("h1")
            h1.classList.add("tag")
            let h2 = document.createElement ("h2")
            h2.classList.add("nomeDoProduto")
            let h3 = document.createElement ("h3")
            h3.classList.add("descricaoDoProduto")
            let p = document.createElement("p")
        
            //criando imagens
            img.src = data[i].img
            img.alt = data[i].nameItem
        
            //criando descrição
            h1.innerText = data[i].tag[0]
            h2.innerText = data[i].nameItem
            h3.innerText = data[i].description
            p.innerText = `R$ ${data[i].value}`

            //referenciando
            ul.appendChild(li)
            li.appendChild(img)
            li.appendChild(div3)
            div3.appendChild(h1)
            div3.appendChild(h2)
            div3.appendChild(h3)
            div3.appendChild(p)
        }    
    }
});




    







