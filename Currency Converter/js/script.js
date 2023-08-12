// var select = document.querySelectorAll('.currency'),
// input_currency = document.getElementById('input_currency'),
// output_currency = document.getElementById('output_currency');

// const host = 'api.frankfurter.app';
// fetch(`https://${host}/currencies`)
//   .then(response => response.json())
//   .then((data) => {
//     const entries = Object.entries(data);
    
// for(i = 0; i < entries.length; i++){
//   select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
//   select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
// }

//   });

// function converter(){
//    var input_currency_val = input_currency.Value;
//    if(select[0].value !== select[1].value){
//     //    alert("Right")
//     const host = 'api.frankfurter.app';
//     fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].Value}&to=${ select[1].Value}`)
//       .then(response => response.json())
//       .then((data) => {
//         output_currency.value = Object.values(data.rates)[0]
//       });

//    }else{
//        alert('Please select two different Currency')
//    }


// }













var select = document.querySelectorAll('.currency'),
    input_currency = document.getElementById('input_currency'),
    output_currency = document.getElementById('output_currency');

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(response => response.json()) 
  .then(data => {
    const entries = Object.entries(data);

    for (let i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`; 
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`; 
    }
  });

function converter() {
   var input_currency_val = input_currency.value; 
   if (select[0].value !== select[1].value) { 
    // alert("Right")
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
      .then(response => response.json())
      .then(data => {
        output_currency.value = Object.values(data.rates)[0];
      });
   } else {
       alert('Please select two different currencies'); 
   }
}

























