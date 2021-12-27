const service = require('./service')

async function main() {
  try {
    const result = await service.obterPessoas('a')
    const names = []

    // FOR LOOP (PADRÃO)
    console.time('for')
    for(let i = 0; i <= result.results.length - 1; i++) {
      const pessoas = result.results[i]
      names.push(pessoas.name)
    }
    console.timeEnd('for')

    // FOR-IN (JÁ CRIA O INCREMETADOR E O PONTO DE PARADA NO CASO O LENGTH) 
    console.time('for-in')
    for(let i in result.results) {
      const pessoa = result.results[i]
      names.push(pessoa.name)
    }
    console.timeEnd('for-in')

    // FOR-OF (JÁ CRIA AS VARIAVEIS COM OS INDICES)
    console.time('for-of')
    for(pessoa of result.results) {
      names.push(pessoa.name)
    }
    console.timeEnd('for-of')
    
    console.log('names', names);
  }
  catch {
    console.error(`error interno ${error}`)
  }
}

main()