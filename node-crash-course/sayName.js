const sayName = () => {
  console.log('Hello there Ed !');
}

const sayAdress = () => {
  console.log('Jhonson Street');
}

// 모듈화를 시키기 위해서는 일단 밖으로 내보내야 한다. export
module.exports.sayName = sayName;
module.exports.sayAdress = sayAdress;