
let sessao_passo = document.getElementById('sessao_passo')

window.addEventListener('scroll', function(){

    // CALCULA A ALTURA DO CONTAINER    

    let container_altura = sessao_passo.offsetHeight

    // Calcula a altura visivel da janela do navegador

    let altura_janela = window.innerHeight

    //Calcula a posição vertical do topo do contêiner em relação ao topo da janela do navegador

    let containerTop = sessao_passo.getBoundingClientRect().top

    if((container_altura - containerTop) / altura_janela >= 0.37) {

        sessao_passo.classList.add('fundo-animado-entrada')
        sessao_passo.classList.remove('fundo-animado-saida')

    } else {
        sessao_passo.classList.remove('fundo-animado-entrada')
        sessao_passo.classList.add('fundo-animado-saida')
    }

})