const util = require('util')
const GetAdressAsyc = util.promisify(GetAdress)
function GetUser(){
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'John',
        surname: 'Doe'
      });
    }, 1000);

  })
}

function GetPhone(userId){
  return new Promise(function resolvePromise(resolve, reject) { 
      setTimeout(() => {
        return resolve({
          telephone: '123456789',
          ddd: '11'
        })
      }, 2000);
  })
}


function GetAdress(userId, callback){
    setTimeout(() => {
      return callback(null, {
        rua: 'Joéo Silva',
        numero: 32
      })
    }, 2000)
}


main()
async function main() {
  try {
    const user = await GetUser()

    const resultado = await Promise.all([
      GetPhone(user.id),
      GetAdressAsyc(user.id)
    ])
    
    const adress = resultado[1]
    const telephone = resultado[0]

    console.log(`
        name: ${user.name} ${user.surname},
        telephone: (${telephone.ddd}) ${telephone.telephone},
        adress: ${adress.rua}, ${adress.numero}
    `);
  }
  catch(error) {
    console.log(error);
  }
}
