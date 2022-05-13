let campo = document.querySelector("#pergunta")
let resposta = document.querySelector(".perguntas-e-respostas")
let resposta2;
let resposta3;
let palavraCompleta = ""

/*function verifica(){
    resposta.innerHTML = ""
    if(campo.value === ""){
        resposta.innerHTML = ""
    }else{
        for(let i = 0; i < perguntas.length; i++){
            if(perguntas[i][0].includes(campo.value)){
                //resposta2 = perguntas[i][1]? resposta2 = "V":resposta2 = "X"
                let pergunta = () => {
                    if(perguntas[i][1]){
                        resposta2 = "V"
                        resposta3 = "certo"
                    }else{
                        resposta2 = "X"
                        resposta3 = "errado"
                    }
                }
                pergunta()
                resposta.innerHTML += `<div class="resposta">${perguntas[i][0]}<span class="${resposta3}">${resposta2}</span></div>`
            }
        }
    } 
}
campo.addEventListener("keyup", verifica)*/


function verifica(e){
    if(e.keyCode == 13 ){
        resposta.innerHTML = ""
        if(campo.value === ""){
            resposta.innerHTML = ""
        }else{
            for(let i = 0; i < perguntas.length; i++){
                if(perguntas[i][0].toLowerCase().includes(campo.value)){
                    //resposta2 = perguntas[i][1]? resposta2 = "V":resposta2 = "X"
                    let pergunta = () => {
                        if(perguntas[i][1]){
                            resposta2 = "V"
                            resposta3 = "certo"
                        }else{
                            resposta2 = "X"
                            resposta3 = "errado"
                        }
                    }
                    pergunta()
                    resposta.innerHTML += `<div class="resposta">${perguntas[i][0]}<span class="${resposta3}">${resposta2}</span></div>`
                }
            }
        } 
    }
    
}
campo.addEventListener("keyup", verifica)



