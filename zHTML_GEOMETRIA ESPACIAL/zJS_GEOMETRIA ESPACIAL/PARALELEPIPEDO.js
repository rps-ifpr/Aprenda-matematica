document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        const btn = document.querySelector("#botaoCalcular");
        btn.click();
    }
});
function Calcula() {
    var A = document.getElementById('NumA').value.replace(',', '.');
    var B = document.getElementById('NumB').value.replace(',', '.');
    var C = document.getElementById('NumC').value.replace(',', '.');
    function volume() {
        var mostrarvolume = parseFloat(A) * parseFloat(B) * parseFloat(C);
        return mostrarvolume.toFixed(2);
    }
    if (A >= 1 && B >= 1 && C >= 1) {
        document.getElementById('ResultVolume').innerHTML = ("A × B × C = " + volume().replace('.', ',') + " m³ ");
    }
    else if (A < 0 || B < 0 || C < 0) {
        document.getElementById('ResultVolume').innerHTML = ("Error(negativo)");
    }
    else {
        document.getElementById('ResultVolume').innerHTML = ("Não existe/não foi inserido!");
    }
}