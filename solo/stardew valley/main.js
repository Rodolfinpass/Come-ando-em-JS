const campo1 = document.getElementById('campo1')
const PRIMAVERA = document.getElementById('PRIMAVERA')
const VERÃO = document.getElementById('VERÃO')
const OUTONO = document.getElementById('OUTONO')

function primeiro() {

    campo1.removeAttribute("hidden")

}
function cultivaNAO() {

    const station = (document.getElementById('seasons')).value

    if (station === 'Primavera') {

        PRIMAVERA.removeAttribute("hidden")

        var SUBMIT = document.getElementById('submit1')
        SUBMIT.onclick = function () {

            var slot1 = (document.getElementById('slots1').value)
            var cultivo = (document.getElementById('primavera').value)
            if (slot1 === '' && cultivo === '') {
                window.alert('PEGO1')
            } else {
                // EXECUTA OS CALCULOS

                var slot1 = Number(document.getElementById('slots1').value)
                var ARITMETICA = (document.getElementById('primavera').value)
                var SEMENTE = 0
                var MADURO = 0
                switch (ARITMETICA) {
                    case 'Chirivia':
                        SEMENTE = 20
                        MADURO = 35
                        break;
                    case 'Alho':
                        SEMENTE = 40
                        MADURO = 60
                        break;
                    case 'Batata':
                        SEMENTE = 50
                        MADURO = 80
                        break;
                    case 'Tulipa':
                        SEMENTE = 20
                        MADURO = 30
                        break;
                    case 'Couve':
                        SEMENTE = 70
                        MADURO = 110
                        break;
                    case 'Jasmin-Azul':
                        SEMENTE = 30
                        MADURO = 50
                        break;
                    case 'Couve-Flor':
                        SEMENTE = 80
                        MADURO = 175
                        break;
                    case 'Ruibarbo':
                        SEMENTE = 100
                        MADURO = 220
                        break;
                    default:
                        break;
                }

                var PC = slot1 * SEMENTE
                var PV = slot1 * MADURO
                var LU = PV - PC

                document.getElementById('pc1').innerHTML += ` ${PC}`
                document.getElementById('pv1').innerHTML += ` ${PV}`
                document.getElementById('lu1').innerHTML += ` ${LU}`
            }
        }

    } else {

    }

    if (station === 'Verão') {

        VERÃO.removeAttribute("hidden")

        var SUBMIT = document.getElementById('submit2')
        SUBMIT.onclick = function () {

            var slot2 = (document.getElementById('slots2').value)
            var cultivo = (document.getElementById('verao').value)
            if (slot2 === '' && cultivo === '') {
                window.alert('PEGO2')
            } else {
                // EXECUTA OS CALCULOS

                var slot2 = Number(document.getElementById('slots2').value)
                var ARITMETICA = (document.getElementById('verao').value)
                var SEMENTE = 0
                var MADURO = 0
                switch (ARITMETICA) {
                    case 'Melão':
                        SEMENTE = 80
                        MADURO = 260
                        break;
                    case 'Papoula':
                        SEMENTE = 100
                        MADURO = 140
                        break;
                    case 'Rabanete':
                        SEMENTE = 40
                        MADURO = 90
                        break;
                    case 'Repolho roxo':
                        SEMENTE = 100
                        MADURO = 260
                        break;
                    case 'Carambola':
                        SEMENTE = 400
                        MADURO = 750
                        break;
                    case 'Flor-Miçanga':
                        SEMENTE = 50
                        MADURO = 90
                        break;
                    case 'Trigo':
                        SEMENTE = 10
                        MADURO = 25
                        break;
                    default:
                        break;
                }

                var PC = slot2 * SEMENTE
                var PV = slot2 * MADURO
                var LU = PV - PC

                var subPC2 = document.getElementById('pc2').innerHTML += ` ${PC}`
                var subPV2 = document.getElementById('pv2').innerHTML += ` ${PV}`
                var subLU2 = document.getElementById('lu2').innerHTML += ` ${LU}`
            }
        }
    } else {

    }

    if (station === 'Outono') {

        OUTONO.removeAttribute("hidden")

        var SUBMIT = document.getElementById('submit3')
        SUBMIT.onclick = function () {

            var slot3 = (document.getElementById('slots3').value)
            var cultivo = (document.getElementById('outono').value)
            if (slot3 === '' && cultivo === '') {
                window.alert('PEGO3')
            } else {
                // EXECUTA OS CALCULOS

                var slot4 = Number(document.getElementById('slots3').value)
                var ARITMETICA = (document.getElementById('outono').value)
                var SEMENTE = 0
                var MADURO = 0
                switch (ARITMETICA) {
                    case 'Amaranto':
                        SEMENTE = 70
                        MADURO = 150
                        break;
                    case 'Alcachofra':
                        SEMENTE = 30
                        MADURO = 160
                        break;
                    case 'Beterraba':
                        SEMENTE = 20
                        MADURO = 100
                        break;
                    case 'Couve Chinesa':
                        SEMENTE = 50
                        MADURO = 80
                        break;
                    case 'Rosa-de-Fada':
                        SEMENTE = 200
                        MADURO = 290
                        break;
                    case 'Abóbora':
                        SEMENTE = 100
                        MADURO = 320
                        break;
                    case 'Cereja de Joia Doce':
                        SEMENTE = 1000
                        MADURO = 3000
                        break;
                    case 'Trigo':
                        SEMENTE = 10
                        MADURO = 25
                        break;
                    case 'Inhame':
                        SEMENTE = 60
                        MADURO = 160
                        break;
                    default:
                        break;
                }

                var PC = slot3 * SEMENTE
                var PV = slot3 * MADURO
                var LU = PV - PC

                var subPC3 = document.getElementById('pc3').innerHTML += ` ${PC}`
                var subPV3 = document.getElementById('pv3').innerHTML += ` ${PV}`
                var subLU3 = document.getElementById('lu3').innerHTML += ` ${LU}`
            }
        }

    }
}

function cultivaSIM() {

    const station = (document.getElementById('seasons')).value

    if (station === 'Primavera') {

        PRIMAVERA.removeAttribute("hidden")

        var SUBMIT = document.getElementById('submit1')
        SUBMIT.onclick = function () {

            var slot1 = (document.getElementById('slots1').value)
            var cultivo = (document.getElementById('primavera').value)
            if (slot1 === '' && cultivo === '') {
                window.alert('PEGO1')
            } else {
                // EXECUTA OS CALCULOS

                var slot1 = Number(document.getElementById('slots1').value)
                var ARITMETICA = (document.getElementById('primavera').value)
                var SEMENTE = 0
                var MADURO = 0
                switch (ARITMETICA) {
                    case 'Chirivia':
                        SEMENTE = 20
                        MADURO = 35
                        break;
                    case 'Alho':
                        SEMENTE = 40
                        MADURO = 60
                        break;
                    case 'Batata':
                        SEMENTE = 50
                        MADURO = 80
                        break;
                    case 'Tulipa':
                        SEMENTE = 20
                        MADURO = 30
                        break;
                    case 'Couve':
                        SEMENTE = 70
                        MADURO = 110
                        break;
                    case 'Jasmin-Azul':
                        SEMENTE = 30
                        MADURO = 50
                        break;
                    case 'Couve-Flor':
                        SEMENTE = 80
                        MADURO = 175
                        break;
                    case 'Ruibarbo':
                        SEMENTE = 100
                        MADURO = 220
                        break;
                    default:
                        break;
                }

                var PC = slot1 * SEMENTE
                var escada = slot1 * MADURO
                var PV = escada + escada / 10
                var LU = PV - PC

                document.getElementById('pc1').innerHTML += ` ${PC}`
                document.getElementById('pv1').innerHTML += ` ${PV}`
                document.getElementById('lu1').innerHTML += ` ${LU}`
            }
        }

    } else {

    }

    if (station === 'Verão') {

        VERÃO.removeAttribute("hidden")

        var SUBMIT = document.getElementById('submit2')
        SUBMIT.onclick = function () {

            var slot2 = (document.getElementById('slots2').value)
            var cultivo = (document.getElementById('verao').value)
            if (slot2 === '' && cultivo === '') {
                window.alert('PEGO2')
            } else {
                // EXECUTA OS CALCULOS

                var slot2 = Number(document.getElementById('slots2').value)
                var ARITMETICA = (document.getElementById('verao').value)
                var SEMENTE = 0
                var MADURO = 0
                switch (ARITMETICA) {
                    case 'Melão':
                        SEMENTE = 80
                        MADURO = 260
                        break;
                    case 'Papoula':
                        SEMENTE = 100
                        MADURO = 140
                        break;
                    case 'Rabanete':
                        SEMENTE = 40
                        MADURO = 90
                        break;
                    case 'Repolho roxo':
                        SEMENTE = 100
                        MADURO = 260
                        break;
                    case 'Carambola':
                        SEMENTE = 400
                        MADURO = 750
                        break;
                    case 'Flor-Miçanga':
                        SEMENTE = 50
                        MADURO = 90
                        break;
                    case 'Trigo':
                        SEMENTE = 10
                        MADURO = 25
                        break;
                    default:
                        break;
                }

                var PC = slot2 * SEMENTE
                var escada = slot2 * MADURO
                var PV = escada + escada / 10
                var LU = PV - PC

                var subPC2 = document.getElementById('pc2').innerHTML += ` ${PC}`
                var subPV2 = document.getElementById('pv2').innerHTML += ` ${PV}`
                var subLU2 = document.getElementById('lu2').innerHTML += ` ${LU}`
            }
        }
    } else {

    }

    if (station === 'Outono') {

        OUTONO.removeAttribute("hidden")

        var SUBMIT = document.getElementById('submit3')
        SUBMIT.onclick = function () {

            var slot3 = (document.getElementById('slots3').value)
            var cultivo = (document.getElementById('outono').value)
            if (slot3 === '' && cultivo === '') {
                window.alert('PEGO3')
            } else {
                // EXECUTA OS CALCULOS

                var slot4 = Number(document.getElementById('slots3').value)
                var ARITMETICA = (document.getElementById('outono').value)
                var SEMENTE = 0
                var MADURO = 0
                switch (ARITMETICA) {
                    case 'Amaranto':
                        SEMENTE = 70
                        MADURO = 150
                        break;
                    case 'Alcachofra':
                        SEMENTE = 30
                        MADURO = 160
                        break;
                    case 'Beterraba':
                        SEMENTE = 20
                        MADURO = 100
                        break;
                    case 'Couve Chinesa':
                        SEMENTE = 50
                        MADURO = 80
                        break;
                    case 'Rosa-de-Fada':
                        SEMENTE = 200
                        MADURO = 290
                        break;
                    case 'Abóbora':
                        SEMENTE = 100
                        MADURO = 320
                        break;
                    case 'Cereja de Joia Doce':
                        SEMENTE = 1000
                        MADURO = 3000
                        break;
                    case 'Trigo':
                        SEMENTE = 10
                        MADURO = 25
                        break;
                    case 'Inhame':
                        SEMENTE = 60
                        MADURO = 160
                        break;
                    default:
                        break;
                }

                var PC = slot3 * SEMENTE
                var escada = slot3 * MADURO
                var PV = escada + escada / 10
                var LU = PV - PC

                var subPC3 = document.getElementById('pc3').innerHTML += ` ${PC}`
                var subPV3 = document.getElementById('pv3').innerHTML += ` ${PV}`
                var subLU3 = document.getElementById('lu3').innerHTML += ` ${LU}`
            }
        }

    }
}
