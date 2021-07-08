const originalObject1 = {
  name: 'nome do object',
  id: '1',
  icon: 'test icon'
}

const originalObject2 = {
  name: 'nome do object',
  id: '2',
  icon: 'test icon'
}


let obj = originalObject1;
obj = {
  ...obj,
  quizIds: []
}




let obj2 = originalObject2;
obj2.quizIds = [];

console.log(obj);
console.log('teste')
console.log(obj2);
