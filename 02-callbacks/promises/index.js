function GetUser(callback){
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: 'John',
      surname: 'Doe'
    });
  }, 1000);

}

function GetPhone(userId, callback){
  setTimeout(() => {
    return callback(null, {
      telephone: '123456789',
      ddd: '11'
    })
  }, 2000);
}

function GetAdress(userId, callback){
    setTimeout(() => {
      return callback(null, {
        rua: 'Joéo Silva',
        numero: 32
      })
    }, 2000)
}


GetUser(function resolverUser(error, user) {
    if(error) {
      console.error('error', error)
      return;
    }
  GetPhone(user.id, function resolverPhone(error1, telephone) {
    if(error1) {
      console.log(error1);
      return;
    }
  GetAdress(user.id, function resolverAdress(error2, adress) {
    if(error2) {
      console.log(error2);
      return;
    }

    console.log(`
      name: ${user.name},
      telephone: (${telephone.ddd}) ${telephone.telephone},
      adress: ${adress.rua}, ${adress.numero}
    `)

    })
  })
})
