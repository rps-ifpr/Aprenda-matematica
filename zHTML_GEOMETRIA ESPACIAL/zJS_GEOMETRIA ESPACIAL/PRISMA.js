document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        const btn = document.querySelector("#botaoCalcular");
        btn.click();
    }
});
function Calcula() {
    var lado = document.getElementById('NumLado').value.replace(',', '.');
    var h = document.getElementById('NumAltura').value.replace(',', '.');
    function AreaBasePrisma() {
        ab = ((parseFloat(lado) ** 2) * 1.7) / 4;
        return ab.toFixed(2);
    }
    function volume() {
        var mostrarvolume = parseFloat(AreaBasePrisma()) * parseFloat(h);
        return mostrarvolume.toFixed(2);
    }
    if (lado >= 1 && h >= 1) {
        document.getElementById('ResultVolume').innerHTML = (" AbPrisma × h = " + volume().replace('.', ',') + " m³ ");
        document.getElementById('ResultAreaBase').innerHTML = (" (L² × √3) / 4 = " + AreaBasePrisma().replace('.', ',') + " m² ");
    }
    else if (lado >= 1) {
        document.getElementById('ResultAreaBase').innerHTML = (" (L² × √3) / 4 = " + AreaBasePrisma().replace('.', ',') + " m² ");
    }
    else if (lado < 0 || h < 0) {
        document.getElementById('ResultVolume').innerHTML = ("Error(negativo)");
        document.getElementById('ResultAreaBase').innerHTML = ("Error(negativo)");
    }
    else {
        document.getElementById('ResultVolume').innerHTML = ("Não existe/não foi inserido!");
        document.getElementById('ResultAreaBase').innerHTML = ("Não existe/não foi inserido!");
    }
}