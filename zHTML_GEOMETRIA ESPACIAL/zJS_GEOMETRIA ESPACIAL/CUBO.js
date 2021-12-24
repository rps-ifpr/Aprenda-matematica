document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        const btn = document.querySelector("#botaoCalcular");
        btn.click();
    }
});
function Calcula() {
    var lado = document.getElementById('NumLado').value.replace(',', '.');
    function volume() {
        var mostrarvolume = (parseFloat(lado) * parseFloat(lado) * parseFloat(lado));
        return mostrarvolume.toFixed(2);
    }
    if (lado >= 1) {
        document.getElementById('ResultVolume').innerHTML = ("L³ " + " ou L × L × L" + "=   " + volume().replace('.', ',') + " m³ ");
    }
    else if (lado < 0) {
        document.getElementById('ResultVolume').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultVolume').innerHTML = ("Não existe/não foi inserido!");
    }
}