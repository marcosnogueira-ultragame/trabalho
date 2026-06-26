const animais = [
   { nome: "Leão", imagem: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600" },
  { nome: "Elefante", imagem: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600" },
  { nome: "Girafa", imagem: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=600" },
 
  { nome: "Urso", imagem: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=600" },
  { nome: "raposa", imagem: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=600" },
  { nome: "Panda", imagem: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=600" },
  { nome: "Cachorro", imagem: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600" },
  { nome: "Gato", imagem: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600" },
  { nome: "Coelho", imagem: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600" },
  { nome: "Vaca", imagem: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=600" },
  { nome: "Porco", imagem: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600" },
];


const imagem = document.getElementById("imagemAnimal");
const resposta = document.getElementById("resposta");
const mensagem = document.getElementById("mensagem");
const pontos = document.getElementById("pontos");
const btnVerificar = document.getElementById("btnVerificar");
const btnNovo = document.getElementById("btnNovo");

let animalAtual;
let pontuacao = Number(localStorage.getItem("pontuacao")) || 0;

pontos.textContent = pontuacao;

buscarAnimal();

btnNovo.addEventListener("click", buscarAnimal);
btnVerificar.addEventListener("click", verificarResposta);

function buscarAnimal() {
    const indice = Math.floor(Math.random() * animais.length);
    animalAtual = animais[indice];

    imagem.src = animalAtual.imagem + "?t=" + Date.now();
    imagem.alt = animalAtual.nome;

    resposta.value = "";
    mensagem.textContent = "";
}

function verificarResposta() {
    const texto = resposta.value.trim().toLowerCase();

    if (texto === animalAtual.nome.toLowerCase()) {
        mensagem.textContent = " Acertou!";
        pontuacao++;
        pontos.textContent = pontuacao;
        localStorage.setItem("pontuacao", pontuacao);
    } else {
        mensagem.textContent = " Errou! Tente novamente.";
    }
}