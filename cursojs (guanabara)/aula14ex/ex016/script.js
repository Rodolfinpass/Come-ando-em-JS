function exec() {

    var inicio = Number(document.getElementById('iniciacao').value)
    var fim = Number(document.getElementById('final').value)
    var passo = Number(document.getElementById('espaco').value)

    var txt = document.getElementById('obj')

    if (inicio === 0) {
        window.alert('Insira um valor de início válido e tente novamente.')
    }
    if (fim === 0) {
        window.alert('Insira um valor de fim válido e tente novamente.')
    } else {
        if (passo === 0 || passo < 0) {
            alert('Valor de passo inválido, o passo será considerado como 1.')
            var passo = 1
        }
        if (inicio < fim) {
            while (inicio <= fim) {

                var t = document.createTextNode(`👉 ${inicio}`);
                txt.appendChild(t);
                inicio = inicio + passo
            }
        } else if (inicio > fim) {
            while (fim <= inicio) {
                var t = document.createTextNode(`👉 ${inicio}`);
                txt.appendChild(t);
                inicio = inicio - passo
            }
            
        }
        var t = document.createTextNode('🏴');
        txt.appendChild(t);
    }
}