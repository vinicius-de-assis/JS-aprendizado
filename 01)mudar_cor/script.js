const container = document.querySelector('.container'); // Seleciona o elemento com a classe "container"
const color = document.querySelector('input'); // Seleciona o elemento de entrada de cor

const defaultColor = '#fff'; // Define a cor padrão (branca)
container.style.backgroundColor = defaultColor; // Define a cor de fundo inicial do contêiner como a cor padrão

function onChangeBg() {// Função chamada quando a cor é alterada no seletor de cores
    container.style.backgroundColor = color.value; // Define a cor de fundo do contêiner como a cor selecionada
}
