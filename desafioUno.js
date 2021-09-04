var alturaPared = parseFloat (prompt ("que altura posee la pared a realizar?"))
var anchoPared = parseFloat (prompt ("cual es el ancho de la pared a realizar?"))
var costoPorMetro = parseInt (5000)
var superficieTotal = (alturaPared * anchoPared)
var presupuestoTotal = (superficieTotal *  costoPorMetro)

alert ("el costo total de la obra a realizar es de : $ " + presupuestoTotal)








