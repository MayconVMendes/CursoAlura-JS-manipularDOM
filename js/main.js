const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

somar.addEventListener("click", function(){
    braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener("click", function(){
    if(parseInt(braco.value) >= 1){
        braco.value = parseInt(braco.value) - 1
    }
})