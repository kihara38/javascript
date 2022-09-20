//basic structure
// (function(){
//   //declare privare vars and functions

//   return{
//     //declare public var and functions 
//   }
// })();

//STANDARD MODULE PATTERN
// const UICtrl=(function(){
//   let text='hello world';

//   const changeText=function(){
//     const element=document.querySelector('h1');
//     element.textContent=text;
//   }
//   return{
//     callChangeText:function(){
//       changeText();
//       console.log(text)
//     }
//   }
// })()
// UICtrl.callChangeText();

// //REVEALING MODULE PATTERN
// const ItemCtrl=(function(){
//   let data=[];
//   function add(item){
//     data.push(item); 
//     console.log('Item Added....')
//   }
//   function get(id){
//     return data.find(item=>{
//       return item.id===id;
//     });
//   }
//   return{
//     add,
//     get
//   }
// })();
// ItemCtrl.add({id:1,name:'nelki'});
// console.log(ItemCtrl.get(1))

// //SINGLETON PATTERN
// const singleton=(function(){
//   let instance;
  
//   function createInstance(){
//     const object=new Object('Object instance!!!');
//     return object;
//   }
//   return{
//     getInstance: function(){
//       if(!instance){
//         instance=createInstance();
//       }
//       return instance;
//     }
//   }
// })();
// const instanceA=singleton.getInstance();

// console.log(instanceA)

//FACTORY MODULE 
// function MemberFactory(){
//   this.createMember=function(name,type){
//     let member;

//     if(type==='simple'){
//       member=new simpleMembership(name);
//     }else if (type==='standard') {
//       member=new standardMembership(name);
//     }else if (type==='super') {
//       member=new superMembership(name);
//     }
//     member.type=type;

//     member.define=function(){
//       console.log(`${this.name} (${this.type}):${this.cost}`);
//     }
//     return member;  
//   }
// }
// const simpleMembership=function(name){
//   this.name=name;
//   this.cost='ksh 1500'
// }
// const standardMembership=function(name){
//   this.name=name;
//   this.cost='ksh 2500'
// }
// const superMembership=function(name){
//   this.name=name;
//   this.cost='ksh 3500'
// }

// const members=[];
// const factory=new MemberFactory();

// members.push(factory.createMember('Kihara Nelson' , 'super'));
// // console.log(members)
// members.forEach(function(member){  
//  member.define();
// })

//OBSERVER PATTERN
// function EventObserver(){
//   this.observers=[];
// }
// EventObserver.prototype={
//   subscribe:function(fn){
//     this.observers.push(fn);
//     console.log(`You are subscribed to ${fn.name}`)
//   },
//   unsubscribe:function(fn){
//     this.observers=this.observers.filter(function(item){
//       if(item !=fn){
//         return item;
//       }
//     });
//     console.log(`You are now unsubscribed from ${fn.name}`)
//   },
//   fire:function(){
//     this.observers.forEach(function(item){
//       item.call();
//     })
//   }
// }
// const click=new EventObserver()

// //Event Listener
// document.querySelector('.sub-ms').addEventListener('click',function(){
//   click.subscribe(getCurMilliseconds);
// })

// document.querySelector('.unsub-ms').addEventListener('click',function(){
//   click.unsubscribe(getCurMilliseconds);
// })
// document.querySelector('.fire').addEventListener('click',function(){
//   click.fire();
// })

// //click handler
// const getCurMilliseconds=function(){
//   console.log(`current Milliseconds:${new Date().getMilliseconds()}`)
// }

//Mediator pattern

const User =function(name){
  this.name=name;
  this.chatroom=null;
}
User.prototype={
  send:function(message,to){
    this.chatroom.send(message,this,to)
  },
  recieve:function(message,from){
    console.log(`${from.name} to ${this.name}: ${message}` )
  }
}
const Chatroom=function(){
  let users={};//list of users 

  return{
    register:function(user){
      users[user.name]=user;
      user.chatroom=this;
    },
    send: function(message,from,to){
      if (to) {
        //single user message
        to.recieve(message, from)
      } else {
        //mass message
        for(key in users){
          if(users[key] != from){
            users[key].recieve(message,from)
          }
        }
      }
    }
  }
}
const kihara=new User('Kihara');
const Nelson=new User('Nelson');
const Nelki=new User('Nelki');

const chatroom=new Chatroom();

chatroom.register(kihara);
chatroom.register(Nelson);
chatroom.register(Nelki);

kihara.send('hello nelki', Nelki)