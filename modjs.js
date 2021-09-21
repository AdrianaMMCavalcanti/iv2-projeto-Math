//1) Retorno de um número fracionado em inteiro mais próximo (Dica: Math.round(x))

function retornarInt() {
  var valor1 = document.getElementById('valor1').value
  var resultado = Math.round(valor1)
  document.getElementById('resultado').textContent = `Resultado: ${resultado}`
}

// Uso do addEventListener para mostrar exemplo: 

document.getElementById('valor1').addEventListener("mousemove", exibirExemplo)

function exibirExemplo() {
  var exibirEx = document.querySelector('#mostrarExemplo p')
  exibirEx.innerHTML = "Exemplo: 10.45  ,  86.42  ,  73.20";
}

// Uso do addEventListener para apagar o exemplo:
document.getElementById('mostrarExemplo').addEventListener("mousemove", apagarExemplo)

function apagarExemplo() {
  var apagarEx = document.querySelector('#mostrarExemplo p')
  apagarEx.innerHTML = " "
}

//>2) Potência do Número do primeiro Input pelo do segundo Input (Dica: Math.pow(x, y))

function retornarInteiro() {

  var valorPedido1 = document.getElementById('valor1Pedido').value
  var valorPedido2 = document.getElementById('valor2Pedido').value
  var resultado = Math.pow(valorPedido1, valorPedido2)

  document.getElementById('resultadoQ2').textContent = `Resultado: ${resultado}`
}

// 3) Cálculos referentes a medida de um Circulo:

function calcularCirculo() {

  document.getElementById('respostaRaio').textContent = `O Resultado da circunferencia do círculo é: ${calcularCircunferencia()}`
  document.getElementById('respostaArea').textContent = `O Resultado da Área do círculo é: ${calcularArea()}`
}

function calcularCircunferencia() {
  var raio = document.getElementById('valorRaio').value
  var circunferencia = 2 * Math.PI * raio
  return circunferencia
}

function calcularArea() {

  var raio = document.getElementById('valorRaio').value
  var area = Math.PI * Math.pow(raio, 2)
  return area
}

// 4)Calculos referentes a medida de um Cubo:

function calcularCubo() {

  document.getElementById('respostaAreaBase').textContent = `A Área da base é: ${calculoDaArea()}`
  document.getElementById('respostaAreaTotal').textContent = `A Área total é: ${calculoDaAreaTotal()}`
  document.getElementById('respostaVolumeCubo').textContent = `O volume do cubo é: ${calcularVolumeCubo()} `
}

function calculoDaArea() {
  var area1 = document.getElementById('valorArea').value
  var areaBase = Math.pow(area1, 2)
  return areaBase
}

function calculoDaAreaTotal() {
  var areaTotal = document.getElementById('valorArea').value
  var resAreaTotal = (Math.pow(areaTotal, 2)) * 6
  return resAreaTotal
}

function calcularVolumeCubo() {
  var volumeCubo = document.getElementById('valorArea').value
  var resVolumeCubo = Math.pow(volumeCubo, 3)
  return resVolumeCubo
}

//5) utilize o objeto Math para fazer algo sobre Matemática que você ache bacana

function retornarNumeroInteiro() {

  var numeroDecimal = document.getElementById('decimal').value
  var numeroInteiro = Math.floor(numeroDecimal)

  document.getElementById('respostaNumeroInteiro').textContent = `O valor inteiro do decimal informado é: ${numeroInteiro}`
}
