const { obterPessoas } = require('./service')

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


async function main() {
  try {
    const { results } = await obterPessoas('a')

    // const familiaLars = results.filter((item) => {
    //   const result = item.name.toLowerCase().indexOf('lars') !== -1
    //   return result
    // })
    const familiaLars = results.meuFilter((item) => {
      const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result
    })
    const nomes = familiaLars.map((pessoa) => pessoa.name)

    console.log(nomes);
  } catch (error) {
    console.error('deu ruim', error)
  }
}

main()