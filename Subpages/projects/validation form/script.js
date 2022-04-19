function validation() {
    var firstname = document.registration.fname;
    var lastname = document.registration.lname;
    var gender = document.registration.gender;
    var tele = document.registration.phone;

    if(alllettersfirst(firstname)) {
        if(allletterslast(lastname)){
            if(genderselect(gender)) {
                if(mobile(tele)) {

                }
            }
        }
    }
    return false;
}
function alllettersfirst(firstname) {
    var letters = /^[A-Za-z]+$/;
    if (firstname.value.length==0) {
        alert("Please enter first name.");
        firstname.focus();
        return false;
    }
    else if (firstname.value.match(letters)) {
        return true;
    }
    else {
        alert('First name must have alphabet characters only');
		firstname.focus();
		return false;
    }
}
function allLetterlast(lastname) { 
	var letters = /^[A-Za-z]+$/;
	if(lastname.value.length==0) {
		alert('Please enter last name');
		lastname.focus();
		return false;
	}
	else if(lastname.value.match(letters)) {
		return true;
	}
	else {
		alert('last name must have alphabet characters only');
		lastname.focus();
		return false;
	}
}
function genderselect(gender) {
	if(gender.value == "Default") {
		alert('Select your gender');
		gender.focus();
		return false;
	}
	else {
		return true;
	}
}
function Mobile(tele)
{ 
	var numbers = /^[0-9]+$/;
	if(tele.value.length==0 ) {
		alert('Please enter contact number');
		tele.focus();
		return false;
	}
	else if(tele.value.match(numbers)) {
		alert('Form Succesfully Submitted');
		return true;
	}
	else {
		alert('Please check your contact number');
        tele.focus();
		return false;
	}
}