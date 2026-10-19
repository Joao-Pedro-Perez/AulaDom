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