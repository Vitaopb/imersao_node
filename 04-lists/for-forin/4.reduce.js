const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
  for(let i = 0; i <= this.length - 1; i++) {
    valorFinal = callback(valorFinal, this[i], this)
  }
  return valorFinal
}

async function main() {
  try {
    const { results } = await obterPessoas('a')

    const pesos = results.map((item) => Number(item.height))

    // const totalDosPesos = pesos.meuReduce((prev, next) => prev + next , 0)

    const minhaLista = [
      ['Victor', 'Gabriel'],
      ['NodeBR', 'Brabozãum']
    ]

    const total = minhaLista.meuReduce((prev, curr) => {
      return prev.concat(curr)
    }, [])
      .join(' ')

    console.log('total ', total);

  } catch (error) {
    console.error('Deu ruim ', error)
  }
}

main()