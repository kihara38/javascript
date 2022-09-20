const data=[
  {
    name:'kihara nelson',
    age:28,
    gender:'male',
    lookingfor:'female',
    locaton:'Kiambu kenya',
    image:'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    name:'jennifer wangari',
    age:28,
    gender:'female',
    lookingfor:'male',
    locaton:'Nairobi kenya',
    image:'https://randomuser.me/api/portraits/female/8.jpg'
  },
  {
    name:'luise lombo',
    age:28,
    gender:'male',
    lookingfor:'female',
    locaton:'Homabay kenya',
    image:'https://randomuser.me/api/portraits/men/11.jpg'
  }
];
const profiles=profileIterator(data);

nextProfile();

//next Event
document.getElementById('next').addEventListener('click',nextProfile);

//net profile display
function nextProfile(){
    const currentProfile=profiles.next().value;
    if (currentProfile !== undefined) {
      document.getElementById('profileDisplay').innerHTML=`
      <ul class="list-group">
        <li class="list-group-item">Name:${currentProfile.name}</li>
        <li class="list-group-item">Age:${currentProfile.age}</li>
        <li class="list-group-item">Preference:${currentProfile.gender} lookingfor ${currentProfile.lookingfor}</li>
        <li class="list-group-item">Location:${currentProfile.locaton}</li>
      </ul>
    `;
    document.getElementById('imageDisplay').innerHTML=`
    <img src="${currentProfile.image}">
    `;
    } else {
      //No more profile
      window.location.reload();
    }
 

}

//profile iterator
function profileIterator(profiles){
  let nextIndex=0;
  return{
    next:function(){
       return nextIndex < profiles.length?
      {value: profiles[nextIndex++],done:false}:
      {done:true}
  }
 }
}