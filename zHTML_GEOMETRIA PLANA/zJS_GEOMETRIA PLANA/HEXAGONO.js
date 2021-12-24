document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        const btn = document.querySelector("#botaoCalcular");
        btn.click();
    }
});
function Calcula() {
    var lado = document.getElementById('NumLado').value;
    lado = parseFloat(lado.replace(',', '.'));
    function area() {
        var mostrararea = 6 * ((parseFloat(lado) ** 2 * 1.7) / 4);
        return mostrararea.toFixed(2);
    }
    function Soma() {
        sum = 0;
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        sum += parseFloat(lado);
        return sum.toFixed(2);
    }
    if (lado >= 1) {
        document.getElementById('ResultArea').innerHTML = ("6 × (L²√ 3)/4 =  " + area().replace('.', ',') + " m² ");
        document.getElementById('ResultPerimetro').innerHTML = ("L + L + L + L + L + L  =   " + Soma().replace('.', ',') + " m ");
    }
    else if (lado < 0) {
        document.getElementById('ResultArea').innerHTML = ("Error(negativo)");
        document.getElementById('ResultPerimetro').innerHTML = ("Error(negativo)");
    }
    else {
        document.getElementById('ResultArea').innerHTML = ("Não existe/não foi inserido!");
        document.getElementById('ResultPerimetro').innerHTML = ("Não existe/não foi inserido!");
    }
}