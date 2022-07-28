const dadoUm = () => {
    return Math.floor(Math.random() * 6) + 1;
}
const dadoDois = () => {
    return Math.floor(Math.random() * 6) + 1;
}

function girarDado() {
    const dado1 = dadoUm();
    const dado2 = dadoDois();
    const soma = dado1 + dado2;
    return soma;
}

const botao = document.querySelector('.button');
const constructor = document.querySelector('#constructor')

let lista = [];

function construir(event) {
    const btnCriar = event.target;


    if (btnCriar == botao) {

        for (let i = 0; i < 1001; i++) {
            lista.push(girarDado());

        }
        for (let i = 1; i < lista.length; i++) {
            let giro = lista[i]

            document.querySelector('#constructor').insertAdjacentHTML('beforeend', `<li class="dado"><section class= "barra-fixa"><p>${i}&deg; jogada &rarr;</p><p class="soma-dados">soma dos dados ${giro}</p></section></li>`);
        }

    }

}



function alterarBarras() {

    const soma = document.querySelectorAll('.soma-dados');


    for (let i = 0; i < soma.length; i++) {
        let outerText = soma[i].innerHTML;

        //console.log(outerText);

        if (outerText === 'soma dos dados 2') {
            barras.style.background = `red`;
        } else if (outerText === 'soma dos dados 3') {
            barras.style.background = '#836FFF';
        } else if (outerText === 'soma dos dados 4') {
            barras.style.backgroundr = '#6959CD';
        } else if (outerText === 'soma dos dados 5') {
            barras.style.background = '#483D8B';
        } else if (outerText === 'soma dos dados 6') {
            barras.style.background = '	#191970';
        } else if (outerText === 'soma dos dados 7') {
            barras.style.background = '#000080';
        } else if (outerText === 'soma dos dados 8') {
            barras.style.background = '	#00008B';
        } else if (outerText === 'soma dos dados 9') {
            barras.style.background = '#0000CD';
        } else if (outerText === 'soma dos dados 10') {
            barras.style.background = '#0000FF';
        } else if (outerText === 'soma dos dados 11') {
            barras.style.background = '#6495ED';
        } else if (outerText === 'soma dos dados 12') {
            barras.style.background = '#4169E1';
        }



    }


}

document.querySelector(".button").addEventListener("click", construir);
document.querySelector(".button").addEventListener("click", alterarBarras);

