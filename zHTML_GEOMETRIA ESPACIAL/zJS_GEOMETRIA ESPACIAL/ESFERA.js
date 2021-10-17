function Calcula() {
    var r = document.getElementById('Numr').value.replace(',', '.');
    var pi = 3.14;
    function volume() {
        var mostrarvolume = (parseFloat(r) ** 3 * parseFloat(pi) * (4 / 3));
        return mostrarvolume.toFixed(2);
    }
    if (r >= 1) {
        document.getElementById('ResultVolume').innerHTML = ("r³ × pi × 4/3 = " + volume().replace('.', ',') + " m³ ");
    }
    else if (r < 0) {
        document.getElementById('ResultVolume').innerHTML = ("Error (negativo)");
    }
    else {
        document.getElementById('ResultVolume').innerHTML = ("Não existe/não foi inserido!");
    }
}