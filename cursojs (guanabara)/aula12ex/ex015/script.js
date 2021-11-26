function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'homem'
            if (idade >=0 && idade < 15) {
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }
        } else {
            gen = 'mulher'
            if (idade >=0 && idade < 15) {
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${gen} com ${idade} anos!`)
        res.appendChild(img)
    }
}