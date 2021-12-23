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

const userPromise = GetUser()

userPromise
  .then(function (user) {
    return GetPhone(user.id)
      .then(function resolverPhone(result) {
        return {
          user: {
            name: user.name,
            id: user.id
          },
          telephone: result
        }
      })
  })
  .then(function (resultado) {
    const adress = GetAdressAsyc(resultado.user.id)
      return adress.then(function resolverAdress(result) {
        return {
          user: resultado.user,
          telephone: resultado.telephone,
          adress: result
        }
      })
  })
  .then(function (resultado) {
    console.log('resultado', resultado);
  })
  .catch(function (error) {
    console.log('error', error);
  })


// GetUser(function resolverUser(error, user) {
//     if(error) {
//       console.error('error', error)
//       return;
//     }
//   GetPhone(user.id, function resolverPhone(error1, telephone) {
//     if(error1) {
//       console.log(error1);
//       return;
//     }
//   GetAdress(user.id, function resolverAdress(error2, adress) {
//     if(error2) {
//       console.log(error2);
//       return;
//     }

//     console.log(`
//       name: ${user.name},
//       telephone: (${telephone.ddd}) ${telephone.telephone},
//       adress: ${adress.rua}, ${adress.numero}
//     `)

//     })
//   })
// })
