
 // Location
window.onload = function(){
 document.getElementById('black').classList.add('selected')
 }

// Aqui diz qual cor foi clicada 
let colorPalette = document.querySelector('#color-palette')
colorPalette.addEventListener('click', event => {
    let colorClicked = event.target 
    let colorSelected = document.querySelector('.selected')
        if(colorClicked !== colorSelected){
            colorClicked.classList.add('selected')
            colorSelected.classList.remove('selected')
        }
        
        
    })
// Obrigada PatriciaDivi por ter explicado o target na monitoria e me dado uma luz ao meu problema com escutador
 
