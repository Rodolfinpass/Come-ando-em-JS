var agr = new Date()
var hora = agr.getHours()  
if (hora < 2 && hora > 0) {
    console.log(`Agora são exatamente ${hora} hora.`)
}else{
console.log (`Agora são exatamente ${hora} horas.`)
}if (hora < 6) {
    console.log('Boa madrugada!')
}if (hora < 12 && hora > 6) {
    console.log('Bom dia!')
}else if (hora < 18 && hora > 12) {
    console.log('Boa tarde!')
}else if (hora < 24 && hora > 18){
    console.log('Boa noite!')
}