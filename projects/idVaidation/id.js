var validate = document.getElementById("validate");
validate.addEventListener('click', validateid);
 var idNumber=document.getElementById("idNumber").value;
 var displayOutput = document.getElementById("displayOutput",display);
 

function validateId()
{
    
if(idNumber===13 )
{


    var tempDate = new Date(idNumber.substring(0, 2), idNumber.substring(2, 4) - 1, idNumber.substring(4, 6));

    var id_date = tempDate.getDate();
    var id_month = tempDate.getMonth();
    var id_year = tempDate.getFullYear();

    var fullDate = id_date + "/" + (id_month + 1) + "/" + id_year;
    if (!((tempDate.getYear() == idNumber.substring(0, 2)) && (id_month == idNumber.substring(2, 4) - 1) && (id_date == idNumber.substring(4, 6)))) {
        alert('<p>ID number  date part not valid</p>');
        correct = false;
    }

    
    var genderCode = idNumber.substring(6, 10);
    var gender = parseInt(genderCode) < 5000 ? "Female" : "Male";

    
    var citizenship = parseInt(idNumber.substring(10, 11)) == 0 ? "South African " : "Permanet";

    var tempTotal = 0;
    var checkSum = 0;
    var multiplier = 1;
    for (var i = 0; i < 13; ++i) {
        tempTotal = parseInt(idNumber.charAt(i)) * multiplier;
        if (tempTotal > 9) {
            tempTotal = parseInt(tempTotal.toString().charAt(0)) + parseInt(tempTotal.toString().charAt(1));
        }
        checkSum = checkSum + tempTotal;
        multiplier = (multiplier % 2 == 0) ? 1 : 2;
    }
    if ((checkSum % 10) != 0) {
        error.innerHTML += '<br>ID number  is not valid';
        correct = false;
    };


}
else
{
    alert("invalid id number");
    idNumber="";
}

display();
}

function display()
{
     

    displayOutput+='<p>South African ID Number:   ' + idNumber + '</p><p>Birth Date:   ' + fullDate + '</p><p>Gender:  ' + gender + '</p><p>SA Citizen:  ' + citzenship + '</p>';
}


