document.addEventListener('DOMContentLoaded', () => {
    const arrayDeCartas = [
        // ______________________________ 
        // Cartas com o Polígno //
        {
            name: '1',
            img: './ImagensCartas/CUBO_DESENHO.png'
        },
        {
            name: '2',
            img: './ImagensCartas/PARALELEPIPEDO_DESENHO.png'
        },
        {
            name: '3',
            img: './ImagensCartas/CONE_DESENHO.png'
        },
        {
            name: '4',
            img: './ImagensCartas/CILINDRO_DESENHO.png'
        },
        {
            name: '5',
            img: src = './ImagensCartas/PRISMA_DESENHO.png'
        },
        {
            name: '6',
            img: './ImagensCartas/ESFERA_DESENHO.png'
        },
        {
            name: '7',
            img: './ImagensCartas/OCTAEDRO_DESENHO.png'
        },
        {
            name: '8',
            img: './ImagensCartas/PIRAMIDE_DESENHO.png'
        },
        // Finaliza Cartas com o Polígno //
        // ______________________________ 
        // Cartas com a Equação //
        {
            name: '1',
            img: './ImagensCartas/CUBO_EQUACAO.png'
        },
        {
            name: '2',
            img: './ImagensCartas/PARALELEPIPEDO_EQUACAO.png'
        },
        {
            name: '3',
            img: './ImagensCartas/CONE_EQUACAO.png'
        },
        {
            name: '4',
            img: './ImagensCartas/CILINDRO_EQUACAO.png'
        },
        {
            name: '5',
            img: src = './ImagensCartas/PRISMA_EQUACAO.png'
        },
        {
            name: '6',
            img: './ImagensCartas/ESFERA_EQUACAO.png'
        },
        {
            name: '7',
            img: './ImagensCartas/OCTAEDRO_EQUACAO.png'
        },
        {
            name: '8',
            img: './ImagensCartas/PIRAMIDE_EQUACAO.png'
        },
    ]
    // Finaliza Cartas com a Equação //
    // ______________________________ 
    // Criar as Constantes
    const tabuleiro = document.querySelector('.tabuleiro');
    const placeholder = './carta.png'; // Carta sem ser virada
    const acertou = './correto.png'; // Carta ao ser acertada
    arrayDeCartas.sort(() => 0.5 - Math.random());
    var cartasClicadas = [];
    var cartasClicadasId = [];
    var cartasCombinadas = [];
    var contErro = 0;
    var contPontuação = 0;
    function FazTabuleiro() {
        // Adicionar as cartas no tabuleiro
        for (var x = 0; x < arrayDeCartas.length; x++) {
            var carta = document.createElement('img'); // Cria uma nova carta/nova imagem
            carta.setAttribute('src', placeholder);  // Setta a imagem que ficará ao virar a carta/imagem criada
            carta.setAttribute('data-id', x); // Cria um ID para cada carta 
            carta.addEventListener('click', viraCarta); // Vai ser usada na função
            tabuleiro.appendChild(carta); // Adicionar carta ao tabuleiro
        }
    }
    function viraCarta() {
        var cartaId = this.getAttribute('data-id'); // Identifica o atributo
        cartasClicadas.push(arrayDeCartas[cartaId].name);
        cartasClicadasId.push(cartaId);
        this.setAttribute('src', arrayDeCartas[cartaId].img)
        if (cartasClicadas.length === 2) {
            // Limite de duas cartas por vez
            setTimeout(checarPorCombinacao, 550);
        }
    }
    function checarPorCombinacao() {
        var cartas = document.querySelectorAll('img')
        const primeiraCarta = cartasClicadasId[0]
        const segundaCarta = cartasClicadasId[1]
        if (primeiraCarta === segundaCarta) {
            cartas[primeiraCarta].setAttribute('src', placeholder); // Volta a ser a mesma carta
            cartas[segundaCarta].setAttribute('src', placeholder); // Volta a ser a mesma carta
            alert('Não pode apertar na mesma :)!');
        }
        else if (cartasClicadas[0] === cartasClicadas[1]) { // Se condiz ambas cartas
            cartas[primeiraCarta].setAttribute('src', acertou);
            cartas[segundaCarta].setAttribute('src', acertou);
            cartasCombinadas.push(cartasClicadas);
            cartas[primeiraCarta].removeEventListener('click', viraCarta);
            cartas[segundaCarta].removeEventListener('click', viraCarta);
            contPontuação = contPontuação + 125;
            document.getElementById('idpontuacao').innerHTML = (contPontuação + " Pontos"); // Pontuação
        }
        else {
            contErro = contErro + 1;
            cartas[primeiraCarta].setAttribute('src', placeholder);
            cartas[segundaCarta].setAttribute('src', placeholder);
        }
        cartasClicadas = [];
        cartasClicadasId = [];
        Final();
    }
    //Aqui vai o Reset
    function Final() {
        if (contPontuação == 1000) {
            alert('Parabéns! Você chegou ao final do jogo da memória ');
            alert('Você errou ' + contErro + ' vezes.');
            alert("Você será redirecionado para a Página Inicial!");
            window.location.href = '../index.html';
        }
    }
    FazTabuleiro();
})