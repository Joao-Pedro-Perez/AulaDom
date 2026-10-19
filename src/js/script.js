const multiplicarcarValor=(num1,num2)=>{
    return num1 * num2;

}
console.log(multiplicarcarValor(3,5))

let herois =["Arqueiro", "Thor","Viuva"];
console.log(herois[4])

herois.push("Capitao")
console.log(herois)

herois.pop()
console.log(herois)

document.getElementById("titulo").innerText="Dev";

function mudar(){
    let novo = document.getElementById("nome");
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = novo.value;
}

function inserir(){
    let numero = document.getElementById("posicao").value -1;
    let novoTime = document.getElementById("novo").value;
    document.getElementsByClassName ("time")[numero].innerHTML = novoTime;
}

let botao = document.querySelector("#btnImagem");
let container = document.querySelector("#containerImagem");

//Adcionar Evento de Clique
botao.addEventListener("click", function () {

    if (document.getElementById("minhaImagem")) {
        alert("Imagem ja foi criada")
        return;
    }
    let novaImg = document.createElement("img")

    novaImg.id = "minhaImagem";
    novaImg.src = "/src/assets/imagem games.jpg";
    novaImg.alt = "Imagem games"

    //Estilizacao
    novaImg.style.width = "400px";
    novaImg.style.borderRadius = "10px";
    novaImg.style.marginTop = "15px";
    novaImg.style.display = "block";

    container.appendChild(novaImg)
})