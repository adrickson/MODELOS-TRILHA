
// ANIMAÇÃO SHADOW



document.addEventListener("DOMContentLoaded", () => {

    var caixasSes1 = document.querySelectorAll(".caixasSes1")

    if(caixasSes1.length > 0){

        setTimeout(() =>{

            caixasSes1.forEach(caixa => {
                caixa.classList.add("shadow")

                console.log(caixa)
            })

        }, 2000)    
        
        setTimeout(() => {
            caixasSes1.forEach(caixa => {
                caixa.classList.remove("shadow")
            })
        }, 3000)

    } else {
        console.log('nenhum elemento encontrado')
    }

})