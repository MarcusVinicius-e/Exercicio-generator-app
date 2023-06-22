const botao = document.getElementById("botao")


botao.addEventListener("click", async () => {
   
    document.getElementById("conteudo").innerHTML = await trocarFrase()
     
    document.getElementById("id").innerHTML = "A D I V I C E   #  " + await buscarID()
})

async function buscarFrase() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()

}

async function trocarFrase() {
    const frase = await buscarFrase()
    const fraseBuscada = frase.slip
    return await fraseBuscada.advice
}



async function buscarID() {
    const frase = await buscarFrase()
    const idBuscado = frase.slip.id
    return await idBuscado
}
buscarID()