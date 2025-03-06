
let alunos = JSON.parse(localStorage.getItem("alunos")) || [];

function addaluno(){
let aluno = document.getElementById("aluno").value;
let nota = parseFloat(document.getElementById("nota").value);
//let msg = document.getElementById("msg"); VARIAVEL DESCARTADA
let listaalunos = document.getElementById("listaalunos");

if (aluno === "" || isNaN(nota)) {
    alert("Preencha os campos vazios");
    return;  //RETURN É PARA PARAR A FUNÇÃO NO IF
}    
if (nota < 0 || nota > 10) {
   alert("A Nota deve estar entre 0 e 10");
   return;  //RETURN É PARA PARAR A FUNÇÃO NO IF
}

let status = nota < 7 ? "Reprovado" : ( nota >= 7 && nota < 8 ? "Recuperação" :"Aprovado");

alunos.push({aluno, nota, status});

//API DE ARMAZENAMENTO DE INFORMAÇÕES
localStorage.setItem("alunos", JSON.stringify(alunos));




alert("Aluno adicionado!");

attlista();
}
function attlista(){
    let listaalunos = document.getElementById("listaalunos");
    listaalunos.innerHTML = "";

    alunos.forEach(aluno =>{
    let item = document.createElement("li");
    item.innerText = `Nome: ${aluno.aluno} - Nota: ${aluno.nota} - Situação: ${aluno.status}`;
    listaalunos.appendChild(item);

   

    });
  
    };
    //REMOVENDO OS ITEMS DA LISTA, LIMPA A API LOCALSTORAGE
    function limpaalunos(){
        localStorage.removeItem("alunos");
        alunos = [];
        document.getElementById("aluno").value = "";
        document.getElementById("nota").value = "";
        attlista();

    }

   
    window.onload = attlista;
    
     //ANIMAÇÃO NO PLACEHOLDER
    const input = document.getElementById("aluno");
    const input2 = document.getElementById("nota");
    const phrase = "Digite o nome do aluno...";
    const phrase2 = "Digite a nota do aluno....";
    let index = 0;
    
    function typeEffect() {
        if (index < phrase.length) {
        input.setAttribute("placeholder", phrase.substring(0, index + 1));
        index++;
        if (index < phrase2.length) {
            input2.setAttribute("placeholder", phrase2.substring(0, index + 1));
            index++;
        }
        setTimeout(typeEffect, 150);
        }else{
          setTimeout(() => {
            index = 0;
            typeEffect();
          }, 1000)
        
        
    }}
    typeEffect();



            





   