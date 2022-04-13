var form = document.querySelector('#contactform');

function salary() {
var choices = Array.from(form.purpose);
choices.forEach(function(choice) {
    if(choice.checked && choice.value == "hiring") {
        console.log(choice.value);
        document.getElementById("salary").style.display = "block";
    }
    else if (choice.checked){
        document.getElementById("salary").style.display = "none";
    }
});
}

form.addEventListener('click', salary);

