
document.addEventListener('DOMContentLoaded', () => {
    const arrayDeCartas = [
        {
            name: '1',
            img: './ImagensCartas/CÍRCULO\ DESENHO.png'
        },
        {
            name: '2',
            img: './ImagensCartas/HEXÁGONO\ DESENHO.png'
        },
        {
            name: '3',
            img: './ImagensCartas/LOSANGO\ DESENHO.png'
        },
        {
            name: '4',
            img: './ImagensCartas/OCTÓGONO\ DESENHO.png'
        },
        {
            name: '5',
            img: src = './ImagensCartas/PARALELOGRAMO\ DESENHO.png'
        },
        {
            name: '6',
            img: './ImagensCartas/QUADRADO\ DESENHO.png'
        },
        {
            name: '7',
            img: './ImagensCartas/RETÂNGULO\ DESENHO.png'
        },
        {
            name: '8',
            img: './ImagensCartas/TRAPÉZIO\ DESENHO.png'
        },
        {
            name: '9',
            img: './ImagensCartas/TRIÂNGULO\ DESENHO.png'
        },






        {
            name: '1',
            img: './ImagensCartas/CÍRCULO\ EQUAÇÃO.png'
        },
        {
            name: '2',
            img: './ImagensCartas/HEXÁGONO\ EQUAÇÃO.png'
        },
        {
            name: '3',
            img: './ImagensCartas/LOSANGO\ EQUAÇÃO.png'
        },
        {
            name: '4',
            img: './ImagensCartas/OCTÓGONO\ EQUAÇÃO.png'
        },
        {
            name: '5',
            img: src = './ImagensCartas/PARALELOGRAMO\ EQUAÇÃO.png'
        },
        {
            name: '6',
            img: './ImagensCartas/QUADRADO\ EQUAÇÃO.png'
        },
        {
            name: '7',
            img: './ImagensCartas/RETÂNGULO\ EQUAÇÃO.png'
        },
        {
            name: '8',
            img: './ImagensCartas/TRAPÉZIO\ EQUAÇÃO.png'
        },
        {
            name: '9',
            img: './ImagensCartas/TRIÂNGULO\ EQUAÇÃO.png'
        },


    ]
    arrayDeCartas.sort(() => 0.5 - Math.random())
    const tabuleiro = document.querySelector('.tabuleiro')
    const placeholder = './carta.png';
    const branco = './correto.png';

    var cartasClicadas = []
    var cartasClicadasId = []
    var cartasCombinadas = []

    function criarTabuleiro() {
        for (let i = 0; i < arrayDeCartas.length; i++) {
            var carta = document.createElement('img')
            carta.setAttribute('src', placeholder)
            carta.setAttribute('data-id', i)
            carta.addEventListener('click', viraCarta)
            tabuleiro.appendChild(carta)
        }
    }

    function viraCarta() {
        var cartaId = this.getAttribute('data-id')
        cartasClicadas.push(arrayDeCartas[cartaId].name)
        cartasClicadasId.push(cartaId)
        this.setAttribute('src', arrayDeCartas[cartaId].img)
        if (cartasClicadas.length === 2) {
            setTimeout(checarPorCombinacao, 500)
        }
    }
    function checarPorCombinacao() {
        var cartas = document.querySelectorAll('img')
        const primeiraCarta = cartasClicadasId[0]
        const segundaCarta = cartasClicadasId[1]
        if (primeiraCarta === segundaCarta) {
            cartas[primeiraCarta].setAttribute('src', placeholder)
            cartas[segundaCarta].setAttribute('src', placeholder)
            alert('Você clicou na mesma carta!')
        }
        else if (cartasClicadas[0] === cartasClicadas[1]) {
            cartas[primeiraCarta].setAttribute('src', branco)
            cartas[segundaCarta].setAttribute('src', branco)
            cartasCombinadas.push(cartasClicadas)
            cartas[primeiraCarta].removeEventListener('click', viraCarta)
            cartas[segundaCarta].removeEventListener('click', viraCarta)
        }
        else {
            cartas[primeiraCarta].setAttribute('src', placeholder)
            cartas[segundaCarta].setAttribute('src', placeholder)
        }
        cartasClicadas = []
        cartasClicadasId = []
    }
    criarTabuleiro()
})
