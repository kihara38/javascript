const posts=[
  {title:'post one',body:'this is post one'},
  {title:'post two',body:'this is post two'}
];
// function createPost(post){
//   setTimeout(function(){
//     posts.push(post);
//   },2000)
// }
// function getPost(){
//   setTimeout(function(){
//     let output='';
//     posts.forEach(function(post){
//       output+=`<li>${post.title}</li>`;
//     })
//     document.body.innerHTML=output;
//   },1000);
// }
// createPost({title:'post Threee',body:'this is post three'});
// getPost()
function createPost(post,callBack){
  setTimeout(function(){
    posts.push(post);
    callBack()
  },2000)
}
function getPosts(){
  setTimeout(function(){
    let output='';
    posts.forEach(function(post){
      output+=`<li>${post.title}</li>`;
    })
    document.body.innerHTML=output;
  },1000);
}
createPost({title:'post Threee',body:'this is post three'},getPosts );