//log to console
// console.log('hello world');
// console.log(1233);
// console.log(true);
// var greeting='hello';
// console.log(greeting);
// console.log([1,2,3,4,5]);
// console.log({a:1, b:2 });
// console.table({a:1, b:2});
// console.error('this is some error');
// console.clear();
// console.warn('this is a warning');
// console.time('hello');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');;

// console.timeEnd('hello');

//Var, Let Const
// var name= 'john doe';
// console.log(name);
// name='steve smith';
// console.log(name);

// //int var
// var greating;
// console.log(greating)
// greating='hello';
// console.log(greating);

// //multi word vars
// var firstName='john'//camel case
// var first_name='sara'//underscore
// var firstname='tom'//pascal case

//Let
// let name;
// name='john doe'
// console.log(name);
// name='steve smith';
// console.log(name);


//PRIMITIVE DATA TYPE

// //STRING
// const name='john Doe';
// //number
// const age=45;
// //Boolean
// const hasKids=true;
// //null
// const car=null;
// //undefined
// let test;
// //symbol
// const syn=Symbol();

// //REFERENCE TYPES

// //ARRAY
// const hobbies=['movies', 'music'];
// //object literal
// const address={
//     city:'boston',
//     state:'ma'
// }
// const today= new Date();
// console.log(today)
// console.log(typeof today)

// //TYPE OF CONVERSION
// let val;
// //number to string
// val=String(555);
// val= String(4+4);
// //boolean to string
// val= String(true)
// //date to string
// val=String(new Date())
// //array to string
// val= String([1,2,23,5,4,5,4,])

// //tostring()
// val =(5).toString();
// val=(true).toString();
// // string too numbers
// val=Number('5')
// val=Number(true);
// val=Number(false);
// val=Number(null);
// val=Number('hello')
// val=Number([1,2,3,45,6])

// val=parseInt('100,30')
// val=parseFloat('100.30')
// //output
// // console.log(val);
// // console.log(typeof val);
// // // console.log(val.length);
// // console.log(val.toFixed(2));

// const val1=String (5);
// const val2=6;
// const sum=val1+val2;

// console.log(sum);
// console.log(typeof sum);

// const num1=100;
// const num2=50;
// let val; 

// //simple math with numbers
// val=num1+num2
// val=num1*num2
// val=num1-num2
// val=num1/num2
// val=num1%num2
// //math object
// val=Math.PI
// val=Math.E
// val=Math.round(2.4)
// val=Math.ceil(2.4)
// val=Math.floor(2.8)
// val=Math.sqrt(64)
// val=Math.abs(-6)
// val=Math.pow(8,2)
// val=Math.min(2,2,4,5,7,2323,2,3,35,33,-9)
// val=Math.max(2,2,4,5,7,2323,2,3,35,33,-9)
// val=Math.random()
// val=Math.floor(Math.random()*20+1)



// console.log(val)

// const firstName='william';
// const lastName='jonson';
// const age=26;
// const str='hello there my name is Brad'

// let val;

// val= firstName + lastName;

// //concatenation
// val=firstName+' '+lastName;

// //append
// val='brad ';
// val+='traversy'
// val='hello my name is '+firstName+' and i am '+age;
// //escaping
// val='that\'s awesome, i can\'t wait';
// //length
// val=firstName.length;
// //concat
// val=firstName.concat(' ', lastName);
// //change case
// val=firstName.toLowerCase();
// val=firstName.toUpperCase();

// val=firstName[0];
// //index of()
// val= firstName.indexOf('l');
// val=firstName.lastIndexOf('l');
// //get last char
// val=firstName.charAt(firstName.length - 1)
// //slice( )
// val= firstName.slice(0,4);
// val=firstName.slice(-3)
// //split()
// val=str.split(' ');
// //replace()
// val=str.replace('Brad','nelki');
// //inclides()
// val=str.includes('hello')
// val=str.includes('food')


// // console.log(val);

// const name='john';
// const age=35;
// const job='web Development';
// const city='kiambu';
// let html;
// //ithout template string (es5)
// html='<ul><li>Name: ' +name+ '</li><li>Age: ' +age+ ' </li><li>Job: ' +job+ ' </li><li>City: ' +city+ ' </li></ul>'
// html='<ul>' +
//     '<li>Name: ' +name+ ' </li>'+
//     '<li>Age: ' +age+ ' </li>'+
//     '<li>Job: ' +job+ ' </li>'+
//     '<li>City: ' +city+ ' </li>';
// function hello(){
//     return 'hello worlsd';
// }
// //with template string(es6)
// html=`
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${37+43} </li>
//         <li>${hello()} </li>
//         <li>${age > 30 ? 'over30' : 'under 30 '} </li>

//     </ul>
// `


// document.body.innerHTML=html

// //create some arrays
// const numbers=[ 32,42452,726,625,628,826,];
// const numbers2=new Array(56,62,334,4,5);
// const fruit=['apple','banana','orange','pear'];
// const mixed=[22,'hello',true, undefined, null,{a:1,b:3},new Date()];
// let val;
// //get array length
// val=numbers.length
// //check if its array
// val= Array.isArray(numbers)
// //get single value
// val=numbers[3]
// val=numbers[0]
// //insert into array
// numbers[2]=100;
// //find index of value
// val = numbers.indexOf(32);
// //mutating arrays
// //add on to end
// numbers.push(250);
// //add onto front
// numbers.unshift(120);
// //take off from front
// // numbers.shift()
// // // splice value
// // numbers.splice(1,3);
// //reverse
// numbers.reverse();
// //concatenate array
// val= numbers.concat(numbers2);
// //sorting array
// // val=fruit.sort();
// // val= numbers.sort(); 
// // //use the comparefunction
// // val= numbers.sort(function(x,y){
// //     return x-y;
// // });
// // //reverse sort
// // val= numbers.sort(function(x,y){
// //     return y-x;
// // });
// //find
// function under50(num){
//     return num <1000;
// }
// val= numbers.find(under50);

// console.log(numbers)
// console.log(val);


// const person= {
//     firstName:'steve',
//     lastName:'kihara',
//     age:28,
//     email:'kihara38@gmail.com',
//     hobbies:['music','coding'],
//     address:{
//         city:'nairobi',
//         state:'kiambu'
//     },
//     getBirthYear:function(){
//         return 2022-this.age;
//     }
// }
// let val;
// val=person;
// // get specific value
// val= person.firstName;
// val=person['lastName'];
// val=person.age;
// val=person.hobbies[0];
// val=person.address.state;
// val=person.address['city'];
// val=person.getBirthYear()

// console.log(val);
// const people=[
//     {name:'nelson',age:28},
//     {name:'kihara',age:58}
// ];
// for (let i=0; i<people.length; i++){
//     console.log(people[i].name)
// }

//  if (something){
//    do  something 
// }else{
//     do something else
// }
// const id =100;

// // //equal To
// // if (id==100){
// //     console.log('CORRECT')
// // }else{
// //     console.log('INCORRECT')
// // }
// // //NOT equal To
// // if (id==101){
// //     console.log('CORRECT')
// // }else{
// //     console.log('INCORRECT')
// // }
// // //equal To value and type
// // if (id===100){
// //     console.log('CORRECT')
// // }else{
// //     console.log('INCORRECT')
// // }
// // //equal To value and type
// // if (id!==100){
// //     console.log('CORRECT')
// // }else{
// //     console.log('INCORRECT')
// // } 

// //test if undefined
// // if(typeof id!== 'undefined'){
// //     console.log(`the ID is ${id}`);
// // }else{
// //     console.log('No ID');
// // }

// //greater or less than
// // if (id>=100){
// //     console.log('CORRECT');
// // }else{
// //     console.log('INCORRECT')
// // }
// //IF ELSE
// const color='yellow';
// // if(color==='red'){
// //     console.log('color is red');
// // }else if(color==='blue'){
// //     console.log('color is blue');
// // }else{
// //     console.log('color is not red or blue');
// // }

// //LOGICAL OPERATERS
// const name ='davis';
// const age =27;
// //AND && 
// if (age>0 && age< 12){
//  console.log(`${name} is a child`);
// }else if(age>=13 && age <=19){
//     console.log(`${name} is a teenager`);
// }else{
//     console.log(`${name} is an adult`)
// }
// // OR ||
// if(age<16 || age>65){
//     console.log(`${name} can not run inthe race`);
// }else{
//     console.log(`${name} is registered for the race`)
// }
// //ternary operator 
// console.log(id===100 ? 'correct' : 'incorrect'); 

// //withou braces
// if(id===100)
//     console.log('correct');
// else
//     console.log('incorrect')

//  //function declaration
//  function great(firstName='ann', lastName='njoki'){
//     // if (typeof firstName==='undefined'){firstName='kihara'}
//     // if (typeof lastName==='undefined'){lastName='Nelson'}
//     //console.log('hello');
//     return 'hello '+ firstName+' '+lastName;
//  }

// //  console.log(great()); 

// //FUNCTION EXPRESSION
// const square=function(x){
//     return x*x;
// };
// // console.log(square(9))

// //IMMIDIATELY INVORKABLE FUNCTION IIFEs
// // (function(){
// //     console.log('life ran...')
// // })();
// // (function(name){
// //     console.log('hello '+ name);
// // })('kihara');

// //PROPERTY METHODS
// const  todo={
//     add: function(){
//         console.log('add todo...');
//     },
//     edit:function(id){
//         console.log(`edit todo... ${id}`);
//     }
// }
// todo.delete=function(){
//     console.log('delete todo...')
// }
// todo.add()
// todo.edit(115)
// todo.delete()

 //FOR LOOP
//  for(let i=0; i<=10 ; i++){
    
//     if(i===2){
//         console.log('2 is my favarite number');
//         continue;
//     }
//     if(i===5){
//         console.log('stop the loop');
//         break;
//     }
//     console.log('number '+ i);
//  }

//WHILE LOOP
// let i=0;
// while(i<10){
//     console.log('number '+i);
//     i++;
// }

//Do While
// let i=0;
// do{
//     console.log('number '+i);
//     i++;
// }
// while(i<10);

// LOOP THROUGH ARRAY
// const  cars=['ford','chevy','honda','toyota'];
// for(i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }

//FOREACH 
// cars.forEach(function(car,index,array){
//     console.log(`${index} : ${car}`)
//     console.log(array)
// })

//MAP
// const users=[
//     {id:1, name:'luise'},
//     {id:2, name:'nick'},
//     {id:3, name:'jane'},
//     {id:4, name:'nelson'}
// ];
// const ids=users.map(function(user){
//     return user.id;
// });
// console.log(ids)

// const user={
//     firstName:'john',
//     lastName:'mburu',
//     age:33
// }
// for(let x in user){
//     console.log(`${x}: ${user[x]}`);
// }

//WINDOW METHODS /OBJECTS /PROPERTIES
//ALERT
// alert('hello nelson');
//prompt
// const input=prompt();
// alert(input);
//CONFIRM
// if (confirm('Are you sure')){
//     console.log('deleted');
// }else{
//     console.log('Not deleted')
// }

// //person construcroe
// function Person (name,dob){
//   this.name=name;
//   this.birthday= new Date(dob); 
//   this.caculateAge=function(){
//     const diff=Date.now()- this.birthday.getTime();
//     const ageDate=new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()-1970)
//   }
// }
// // const brad=new Person('nelson');
// // const john=new Person('kihara');
// const brad=new Person('brad', '1/3/1994');  
// console.log(brad.caculateAge())

// string
// const name1 ='jeff';
// const name2 =new String('jeff')
// // name2.foo='bar';

// // console.log(name1)
// console.log(typeof name2)
// if(name2==='jeff'){
//   console.log('yes')
// }else{
//   console.log('no')
// }
//object.prototype
//person.prototype
//person construcroe
// function Person (firstName,lastName,dob){
//   this.firstName=firstName;
//   this.lastName=lastName;

//   this.birthday= new Date(dob); 
//   // this.caculateAge=function(){
//   //   const diff=Date.now()- this.birthday.getTime();
//   //   const ageDate=new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear()-1970)
//   // }
// }
// //calculate age
// Person.prototype.caculateAge=function(){
//   const diff=Date.now()- this.birthday.getTime();
//   const ageDate=new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear()-1970)
// }
// //get new name
// Person.prototype.getNewName=function(newLastName){
//   this.lastName=newLastName;
// }
// //full full name
// Person.prototype.getFullName=function(){
//   return `${this.firstName} ${this.lastName}`
// }
// const nelki=new Person('kihara','nelson','1/3/1994');
// const luise=new Person('magicho','luispot','6/24/1994');

// console.log(nelki);
// console.log(nelki.caculateAge());
// console.log(nelki.getFullName());
// nelki.getNewName('mburu');
// console.log(nelki.getFullName())

// function Person(firstName,lastName){
//   this.firstName=firstName;
//   this.lastName=lastName;
// }
// //greeting
// Person.prototype.greeting=function(){
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }
// const person1=new Person('ann', 'njoki');
// // console.log(person1.greeting());

// //customer constructor
// function Customer(firstName,lastName,phone,membership){
//   Person.call(this,firstName,lastName)
//   this.phone=phone;
//   this.membership=membership;
// }
// //inherit the person prototype methods
// Customer.prototype=Object.create(Person.prototype);
// //make customer .prototype return customer()
// Customer.prototype.construtor=Customer;
// //create customer
// const customer1=new Customer('nelki', 'prof', '+2540700463335','premiem')
// console.log(customer1);
// //customer greeting
// Customer.prototype.greeting=function(){
//   return `hello there ${this.firstName} ${this.lastName} welcome to our company`
// }
// console.log(customer1.greeting());
// const personPrototype={
//  greeting:function(){
//   return `hello my guy ${this.firstName} ${this.lastName}`;
//  },
//  getsMarried:function(newLastName){
//   this.lastName=newLastName;
//  }
// }
// const mary=Object.create(personPrototype);
// mary.firstName='jennifer';
// mary.lastName='wangari';
// mary.age=30;
// mary.getsMarried('cherotich')

// console.log(mary.greeting())
// const nelki=Object.create(personPrototype,{
//   firstName:{value:'Nelson'},
//   lastName:{value:'kihara'},
//   age:{value:28}
// });
// console.log(nelki);
// console.log(nelki.greeting( ))
// class Person{
//   constructor(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.birthday=new Date(dob);
//   }
//   greeting(){
//     return `hello there ${this.firstName} ${this.lastName}`;
//   }
//   calculateAge(){
//     const diff=Date.now()-this.birthday.getTime();
//     const ageDate=new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()-1970);
//   }
// }
// const mary= new Person('mary','williams','11/13/1994');
// console.log(mary.calculateAge())