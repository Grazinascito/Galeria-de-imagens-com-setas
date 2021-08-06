

//ASIDE MENU   ======*=======*=======
const selecionaMenu = document.querySelector(".closed-menu");
const abrirFecharAside = document.querySelector(".menu-aside");
console.log(selecionaMenu)
selecionaMenu.addEventListener('click', function(event){
    console.log('clicou');

    if(selecionaMenu.src.includes("closed")){
        selecionaMenu.src = "./assets/open-menu.svg";
        abrirFecharAside.classList.toggle("hidden");
        
    }else{
        selecionaMenu.src = "./assets/closed-menu.svg";
        abrirFecharAside.classList.toggle("hidden");
    }
});

//MODAL ======*=======*=======

const clicouNaImg = document.querySelectorAll(".img img");
const imgDoModal = document.querySelector(".modal__img");
const btnClose = document.querySelector(".btn-close img");
const modal = document.querySelector(".modal");
const heart = document.querySelector(".heart-icon img");
const previusSeta = document.querySelector(".btn-setas__one");
const nextSeta = document.querySelector(".btn-setas__two");

function abrirModal(indiceDaImg){
    modal.style.display = "flex";
    imgDoModal.src = clicouNaImg[indiceDaImg].src;

    console.log(clicouNaImg)

    
    if(posicaoAtual === 0){
        previusSeta.style.display = 'none';
    }else{
        previusSeta.style.display = 'block';
    }

    if(posicaoAtual === clicouNaImg.length -1){
        nextSeta.style.display ='none';
    }else{
        
        nextSeta.style.display = 'block';
    }

}

let posicaoAtual = 0;

clicouNaImg.forEach((imagem, indice) => {
    imagem.addEventListener('click', event => {
        
        posicaoAtual = indice;
        abrirModal(posicaoAtual);
    });
});



btnClose.addEventListener('click', () => {
    modal.style.display = "none";
});

previusSeta.addEventListener('click', function(){
    
    if(posicaoAtual > 0){
        posicaoAtual--
    }

    abrirModal(posicaoAtual)
    console.log(posicaoAtual)
})
nextSeta.addEventListener('click', function(){
    if(posicaoAtual < clicouNaImg.length){
        posicaoAtual++

    }
    abrirModal(posicaoAtual)
})


// imgDoModal.addEventListener('dblclick', () => {
//     console.log("kd o coração?")
//     heart.src = "./assets/like.svg"
// });