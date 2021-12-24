document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        const btn = document.querySelector("#botaoCalcular");
        btn.click();
    }
});
function Calcula() {
    var r = document.getElementById('Numr').value.replace(',', '.');
    var h = document.getElementById('Numh').value.replace(',', '.');
    var pi = 3.14;
    function AreaBaseCilindro() {
        ab = (pi * (parseFloat(r) ** 2));
        return ab.toFixed(2);
    }
    function volume() {
        var mostrarvolume = 2 * (parseFloat(AreaBaseCilindro()) * parseFloat(h));
        return mostrarvolume.toFixed(2);
    }
    if (r >= 1 && h >= 1) {
        document.getElementById('ResultVolume').innerHTML = (" 2 × AbCilindro × h = " + volume().replace('.', ',') + " m³ ");
        document.getElementById('ResultAreaBase').innerHTML = ("pi × r² = " + AreaBaseCilindro().replace('.', ',') + " m² ");
    }
    else if (r >= 1) {
        document.getElementById('ResultAreaBase').innerHTML = ("pi × r² = " + AreaBaseCilindro().replace('.', ',') + " m² ");
    }
    else if (r < 0 || h < 0) {
        document.getElementById('ResultVolume').innerHTML = ("Error(negativo)");
        document.getElementById('ResultAreaBase').innerHTML = ("Error(negativo)");
    }
    else {
        document.getElementById('ResultVolume').innerHTML = ("Não existe/não foi inserido!");
        document.getElementById('ResultAreaBase').innerHTML = ("Não existe/não foi inserido!");
    }
}