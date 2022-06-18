let buttonB = document.querySelector('#button_B');
buttonB.onclick = () =>{
    if (phone_number.value.length>=0&&phone_number.value.length<10)
    {
      alert("Mobile number not entered");
      return false; 
   }
   else {
       alert("Successfull Validation");
       return true;
   }
   
   
}

let h=0;
let z = 0;
let x =19;
let total_price = document.querySelector('#total_price');
let button_negative = document.querySelector("#button_negative");
let quantity = document.querySelector("#quantity");
let button_positive = document.querySelector("#button_positive");
let button_negative_2 = document.querySelector("#button_negative_2");
let quantity_2 = document.querySelector("#quantity_2");
let button_positive_2 = document.querySelector("#button_positive_2");
button_negative.onclick = () =>{
    h--;
    total_price.textContent = `$ ${(h*55)+19+(z*75)}`;
    quantity.textContent= `${h}`;

}
button_negative_2.onclick = () =>{
    z--;
    total_price.textContent = `$ ${(h*55)+19+(z*75)}`;
    quantity_2.textContent= `${z}`;
}
button_positive.onclick = () =>{
    h++;
    total_price.textContent = `$ ${(h*55)+19+(z*75)}`;
    quantity.textContent= `${h}`;
}
button_positive_2.onclick = () =>{
    z++;
    total_price.textContent = `$ ${(h*55)+19+(z*75)}`;
    quantity_2.textContent= `${z}`;
}
let phone_number = document.querySelector("#phone_number");
