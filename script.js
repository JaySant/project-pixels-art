
 // Selected default --- Aqui implementa a cor preta com o selected por padrão assim que a pagina é iniciada 
 
 window.onload = function(){
 document.getElementById('black').classList.add('selected')
 }

// Clicar --- Aqui diz qual cor foi clicada e remove o que já foi selecionado
// Obrigada PatriciaDivi por ter explicado o target na monitoria e me dado uma luz ao meu problema com escutador

    let colorPalette = document.querySelector('#color-palette')
    colorPalette.addEventListener('click', event => {
        let colorClicked = event.target 
        let colorSelected = document.querySelector('.selected')
            if(colorClicked !== colorSelected){
                colorClicked.classList.add('selected')
                colorSelected.classList.remove('selected')
                
                
            }
        
    })

 // Adiciona a classe selected


function apagar(){
    let pixel = document.getElementsByClassName('pixel')
    for(i = 0; i < pixel.length; i += 1){
        pixel[i].style.background = 'white'
     }
}



                                        
    

