var form = document.querySelector('#contactform');

function salary() {
var choices = Array.from(form.purpose);
var purpose;
choices.forEach(function(choice) {
    if(choice.checked && choice.value == "hiring") {
        purpose = choice.value;
        document.getElementById("salary").style.display = "block";
    }
    else if (choice.checked){
        purpose = choice.value;
        document.getElementById("salary").style.display = "none";
    }
});
return purpose;
}

function validate() {
    var pay = form.rate;
    console.log(salary);
    if (salary() == "hiring") {
        return pay.value != null && pay.value > 14
    }
    else return true;
}

form.onsubmit = validate;
form.addEventListener('click', salary);

