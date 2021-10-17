$(".slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


const EscolheGeometria = document.querySelector(".elementos");
const botao = document.querySelector(".linhas");
const linhas = document.querySelectorAll(".span");

function alternar() {
    EscolheGeometria.classList.toggle("barra-lateral");
    linhas[0].classList.toggle("linha-0");
    linhas[1].classList.toggle("linha-1");
    linhas[2].classList.toggle("linha-2");
}

botao.addEventListener("click", alternar);