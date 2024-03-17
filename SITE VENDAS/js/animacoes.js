
// ANIMAÇÃO DE ESCALA

document.addEventListener("DOMContentLoaded", () => {

    var caixaSes1 = document.querySelectorAll('.caixasSes12')

    if(caixaSes1.length > 0){
        removeAdicionaClass(caixaSes1)
        console.log(caixaSes1)
    } else {
        console.log('Nenhum elemento encontrado!')
    }

})

function removeAdicionaClass(caixas){

    caixas.forEach(caixa => {

        caixa.classList.add('animScale')

    })

    setTimeout(() => {
        
        caixas.forEach(caixa => {

            caixa.classList.remove('animScale')

        })

        setTimeout(() => {
            removeAdicionaClass(caixas) // Chamada recursiva para ser repetida a função 
        }, 7000) // aguarda 7s  para começar novamente

    }, 3500) //Remove a classe após 3 segundos

}

// FIM DA ANIMAÇÃO DE ESCALA