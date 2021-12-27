// Map
Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []
  for(let i = 0; i <= this.length - 1 ; i++) {
    const resultado = callback(this[i], i) 
    novoArrayMapeado.push(resultado)
  }
  return novoArrayMapeado
}

// Filter
Array.prototype.meuFilter = function (calback) {
  const meuNovoArrayFiltrado = []
  for(i in this) {
    const item = this[i]
    const resultado = calback(item, i, this)

    if (!resultado) continue;
    meuNovoArrayFiltrado.push(item)
    
  }
  return meuNovoArrayFiltrado
}

// Reduce
Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for(let i = 0; i <= this.length - 1; i++) {
    valorFinal = callback(valorFinal, this[i], this)
  }
  return valorFinal
}
