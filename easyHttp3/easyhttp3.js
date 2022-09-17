/** 
*EasyHTTP library
*library for making HTTP requests

*@version 3.0.0
*@auther Kihara Nelson
*@license MIT
**/
class EasyHTTP{
  //make get http request
 async get(url){
  const response=await fetch(url);
  const resData=await response.json();
  return resData;
  }

  //make post http request
  async post(url,data){
    const response=await fetch(url,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      const resData=await response.json();
      return resData;
    
    
  }

  //make put http request
  async put(url,data){
    const response=await fetch(url,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      const resData=await response.json();
      return resData;
   
    
  }

  //make delete http request
  async delete(url){
    const response=await fetch(url,{
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        }, 
      })
      const resData=await 'Resource Deleted...';
      return resData;
    
  }
}