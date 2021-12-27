const service = require('./service')

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []
  for(let i = 0; i <= this.length - 1 ; i++) {
    const resultado = callback(this[i], i) 
    novoArrayMapeado.push(resultado)
  }
  return novoArrayMapeado
}


async function main() {
  try {
    const result = await service.obterPessoas('a')
    // const names = []

    // console.time('for-each')
    // result.results.forEach((item) => {
    //   names.push(item.name)
    // })
    // console.timeEnd('for-each')

    // console.time('map')
    // const namesNew = result.results.map((pessoa) => pessoa.name)
    // console.timeEnd('map')


    const names = result.results.meuMap((pessoa) => pessoa.name )
    
    console.log('names ', names);
    // console.log('names ', namesNew);
    
  } catch (error) {
    console.error(error)
  }
}

main()