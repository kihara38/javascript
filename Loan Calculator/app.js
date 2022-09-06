 //listen for  submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  //hide results
  document.getElementById('results').style.display='none';
  //show loading
  document.getElementById('loading').style.display='block';
  //settimeout
  setTimeout(calculateResults,2000);
  e.preventDefault()
});
//calculate result
function calculateResults(){
  //UI VARS
  const amount=document.getElementById('amount');
  const interest=document.getElementById('interest');
  const years=document.getElementById('years');
  const monthlypayment=document.getElementById('monthly-payment');
  const totalpayment=document.getElementById('total-payment');
  const totalinterest=document.getElementById('total-interest');

  const principal=parseFloat(amount.value);
  const calculatedinterest=parseFloat(interest.value)/100/12;
  const calculatedpayments=parseFloat(years.value)*12;
  //compute monthly payment
  const x=Math.pow(1+calculatedinterest,calculatedpayments);
  const monthly=(principal*x*calculatedinterest)/(x-1);

  if (isFinite(monthly)){
    monthlypayment.value=monthly.toFixed(2);
    totalpayment.value=(monthly*calculatedpayments).toFixed(2);
    totalinterest.value=((monthly*calculatedpayments)-principal).toFixed(2);
    //show results
  document.getElementById('results').style.display='block';
  //hide loading
  document.getElementById('loading').style.display='none';
  }else{
     showError('please check your numbers');
  }
}
//show Error
function showError(error){
   //hide results
   document.getElementById('results').style.display='none';
   //hide loading
   document.getElementById('loading').style.display='none';
  //create a div
  const errorDiv=document.createElement('div');
  //get elements
  const card=document.querySelector('.card')
  const heading=document.querySelector('.heading')
  //Add class
  errorDiv.className='alert alert-danger';
  //Create Text Node and append to div
  errorDiv.appendChild(document.createTextNode(error))
  //insert error above heading
  card.insertBefore(errorDiv,heading)
  //clear error after 3 secs
  setTimeout(clearError,3000);
}
//clear error
function clearError(){
  document.querySelector('.alert').remove();
}