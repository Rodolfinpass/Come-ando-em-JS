function tabuada() {

    var numero = Number(document.getElementById('numer').value)
    var select = document.getElementById('seleto')

    select.innerText = ''

    if (numero === 0) {
        alert('Insira um número válido e tente novamente.')
    }

    var joel = 1
    var control = 1

    while (joel <= 10) {

        var opcao = document.createElement('option')
        select.appendChild(opcao)

        res = (numero * control).toFixed(2)

        opcao.innerHTML += ` <option>${numero} X ${control} = ${res}</option>`
        
        control++
        joel++
    }
} 