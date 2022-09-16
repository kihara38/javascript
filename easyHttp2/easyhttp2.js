/** 
*EasyHTTP library
*library for making HTTP requests

*@version 2.0.0
*@auther Kihara Nelson
*@license MIT
**/
class EasyHTTP{
  //make get http request
  get(url){
    return new Promise((resolve,reject)=>{
      fetch(url)
    .then(res=>res.json())
    .then(data=>resolve(data))
    .catch(err=>reject(err))
    })
    
  }

  //make post http request
  post(url,data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
    .then(res=>res.json())
    .then(data=>resolve(data))
    .catch(err=>reject(err))
    })
    
  }

  //make put http request
  put(url,data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
    .then(res=>res.json())
    .then(data=>resolve(data))
    .catch(err=>reject(err))
    })
    
  }

  //make delete http request
  delete(url){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        }, 
      })
    .then(res=>res.json())
    .then(data=>resolve('Resource Deleted....'))
    .catch(err=>reject(err))
    })
    
  }
}