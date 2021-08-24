

//ASIDE MENU   ======*=======*=======
const selecionaMenu = document.querySelector(".closed-menu");
const abrirFecharAside = document.querySelector(".menu-aside");

selecionaMenu.addEventListener('click', function(){

    if(selecionaMenu.src.includes("closed")){
        selecionaMenu.src = "./assets/open-menu.svg";
        abrirFecharAside.classList.toggle("hidden");
        
    }else{
        selecionaMenu.src = "./assets/closed-menu.svg";
        abrirFecharAside.classList.toggle("hidden");
    }
});

//MODAL ======*=======*=======

const imgDaGaleria = document.querySelectorAll(".img > img");
const imgDoModal = document.querySelector(".modal__img");
const btnClose = document.querySelector(".btn-close img");
const modal = document.querySelector(".modal");
const heart = document.querySelectorAll(".heart-icon");
const previusSeta = document.querySelector(".btn-setas__one");
const nextSeta = document.querySelector(".btn-setas__two");
const mainSection = document.querySelector(".main-section");
const modalHeart = document.querySelector(".modal-heart-icon");

const favoritos = document.querySelector(".favoritos");
const divInteira = document.querySelector(".img")





let posicaoAtual = 0;

function abrirModal(indiceDaImg){
    vericandoCurtidas(indiceDaImg)
    modal.style.display = "flex";
    imgDoModal.src = imgDaGaleria[indiceDaImg].src;

    //setas
    if(posicaoAtual === 0){
        previusSeta.style.display = 'none';
    }else{
        previusSeta.style.display = 'block';
    }

    if(posicaoAtual === imgDaGaleria.length -1){
        nextSeta.style.display ='none';
    }else{
        
        nextSeta.style.display = 'block';
    }

    
}


function vericandoCurtidas(indexHeart){
    if(heart[indexHeart].style.display === 'flex'){
        modalHeart.style.display = 'flex';
    }else{
        
        modalHeart.style.display = 'none';
    }
}

imgDoModal.addEventListener('dblclick', () => {

    imgDaGaleria.forEach((img, index) => {
        if(img.src === imgDoModal.src){
            if(heart[index].style.display === 'flex'){
                heart[index].style.display = 'none'
            }else{
                heart[index].style.display = 'flex'
            }

            vericandoCurtidas(index);
        }    
    });
});

imgDaGaleria.forEach((imagem, indice) => {

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
    vericandoCurtidas(posicaoAtual);
    abrirModal(posicaoAtual);
    
});

nextSeta.addEventListener('click', function(){
    if(posicaoAtual < imgDaGaleria.length){
        posicaoAtual++

    }
    vericandoCurtidas(posicaoAtual);
    abrirModal(posicaoAtual);
});


