let colorPalette = document.querySelector('#color-palette')

// Selected default --- Aqui implementa a cor preta com o selected por padrão assim que a pagina é iniciada 
 
window.onload = function(){
    let cor = document.getElementsByClassName('color')
    cor[0].style.backgroundColor = 'black'
    cor[1].style.backgroundColor = 'red'
    cor[2].style.backgroundColor = 'blue'
    cor[3].style.backgroundColor = 'yellow'
    cor[0].classList.add('selected')
 }

// Clicar --- Aqui diz qual cor foi clicada e remove o que já foi selecionado
// Obrigada PatriciaDivi por ter explicado o target na monitoria e me dado uma luz ao meu problema com escutador

    
    colorPalette.addEventListener('click', event => {
        let colorClicked = event.target 
        let colorSelected = document.querySelector('.selected')
        if(colorClicked !== colorSelected){
                colorClicked.classList.add('selected')
                colorSelected.classList.remove('selected')
            }
    })


    function apagar(){
        let pixel = document.getElementsByClassName('pixel')
        for(i = 0; i < pixel.length; i += 1){
            pixel[i].style.background = 'white'
         }
    }
    
 let pixelBoard = document.querySelector('#pixel-board')
 pixelBoard.addEventListener('click', event => {
       let seleColor = document.querySelector('.selected').style.backgroundColor;
       let colorClick = event.target
        if(colorClick.classList.contains('pixel')){
            colorClick.style.backgroundColor = seleColor 
        } 
     })
    
    

for(let index = 1; index <= 5; index += 1){
    let divName = document.createElement('div')
    divName.id = `line${index}`
    pixelBoard.appendChild(divName)
    const lineBoard = document.getElementById(`line${index}`) 
    for(let index = 1; index <= 5; index += 1){
        let divName = document.createElement('div')
        divName.className = `column${index} pixel`
        divName.style.display = 'inline-block'
        divName.style.width = '40px'
        divName.style.height = '40px'
        divName.style.backgroundColor = 'white'
        divName.style.border = '1px solid black'
        lineBoard.appendChild(divName)

    }
}
     


                                        
    

