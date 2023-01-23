/* 
    objetivo 1 - quando o usuario clicar no botao de trailer, devemos abrir a modal com o video do trailer
    -passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js

    objetivo 2 - quando clicar no x fechar a modal
    passo 2- dar um jeito de identificar quando o usuario clicar no botao

    passo 3 - dar um jeito de pegar o elemento na modal js
    passo 4 - abrir a modal na tela
    
*/


    const botaoTrailer = document.querySelector(".botao-trailer");
    const video = document.getElementById("video");
    const modal = document.querySelector(".modal");
    const linkDoVideo = video.src;

    function alternarModal(){
        modal.classList.toggle("aberto");
    }

    botaoTrailer.addEventListener("click",() => {
        alternarModal();
        video.setAttribute("src", linkDoVideo);
});
    const botaoFecharModal = document.querySelector(".fechar-modal");

    botaoFecharModal.addEventListener("click", () =>{
       alternarModal();
        video.setAttribute("src", "");
    });

  

   



