const http=new EasyHTTP;

//get users
// http.get('http://jsonplaceholder.typicode.com/users')
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//user data
const data={
  name:'Kihara Nelson',
  username:'Nelki',
  email:'nelki@gmail.com'
}

// //create post
// http.post('http://jsonplaceholder.typicode.com/users',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
 
// //update post
// http.put('http://jsonplaceholder.typicode.com/users/2',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
 
//delete post
http.delete('http://jsonplaceholder.typicode.com/users/2')
.then(data=>console.log(data))
.catch(err=>console.log(err))