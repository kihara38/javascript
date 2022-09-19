// //iterator Example
// function nameIterator(names){
//   let nextIndex=0;
//   return {
//     next:function(){
//       return nextIndex < names.length ?
//       {value:names[nextIndex++],done:false}:
//       {done:true}
//     }
//   }
// }

// //create an array of names
// const namesArr=['jack','lily','ben'];
// //init iterator and pass in the names array
// const names=nameIterator(namesArr);

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

//generator Example
// function* sayNames(){
//   yield 'jack';
//   yield 'jill';
//   yield 'john';
// }

// const name=sayNames();
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

function* createId(){
  let index=1;
  while (true) {
    yield index++;
  }
}
const gen=createId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)