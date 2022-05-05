function validations(contact) {
	reason = '';
	reason += validateName(contact.name);
	reason += validateEmail(contact.email);
	reason += validatePhone(contact.phone);
	reason += validatePet(contact.phone);
	reason += validateNumber(contact.number);
	reason += validateDisclaimer(contact.disclaimer);

	if (reason.length > 0) {
		return true;
	} else {
		return false;
	}
}

function validateName(name) {
	var error = '';
	if (name.value.length == 0) {
		name.style.background = 'Red';
		document.getElementById('name-error').innerHTML =
			'The required field has not been filled in';
		var error = '1';
	} else {
		name.style.background = 'White';
		document.getElementById('name-error').innerHTML = '';
	}
	return error;
}

function validateEmail(email) {
	var error = '';
	var temail = trim(email.value);

	var emailFilter = /^[^@]+@[^@. ]+\.[^@]*\w\w$/;

	var illegalChars = /[\(\)\<\>\, \;\:\\\"\[\]]/;

	if (email.value == '') {
		email.style.background = 'Red';
		document.getElementById('email-error').innerHTML =
			'Please enter an email address.';
		var error = '2';
	} else if (!emailFilter.test(temail)) {
		email.style.background = 'Red';
		document.getElementById('email-error').innerHTML =
			'Please enter a valid email addres';
		var error = '3';
	} else if (email.value.match(illegalChars)) {
		email.style.background = 'Red';
		var error = '4';
		document.getElementById('email-error').innerHTML =
			'Email contains invalid characters';
	} else {
		email.style.background = 'White';
		document.getElementById('email-error').innerHTML = '';
	}
	return error;
}

function trim(s) {
	return s.replace(/^\s+|\s+$/, '');
}

function validatePhone(phone) {
	var error = '';
	var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

	if ((phone.value = '')) {
		document.getElementById('phone.error').innerHTML =
			'Please enter a phone number';
		phone.style.background = 'Red';
		var error = '6';
	} else if (isNaN(parseInt(stripped))) {
		var error = '5';
		document.getElementById('phone-error').innerHTML =
			'The phone contains illegal characters.';
		phone.style.background = 'Red';
	} else if (stripped.length < 10) {
		var error = '6';
		document.getElementById('phone-error').innerHTML =
			'The phone number is too short.';
		phone.style.background = 'Red';
	} else {
		phone.style.background = 'White';
		document.getElementById('phone-error').innerHTML = '';
	}
	return error;
}

function validatePet(pet) {
	if (
		contact.pet[0].checked == false &&
		contact.pet[1].checked == false &&
		contact.pet[2].checked == false
	) {
		document.getElementById('pet-error').innerHTML = 'Pet required';
		var error = '2';
	} else {
		document.getElementById('pet-error').innerHTML = '';
	}
	return error;
}

function validateNumber(number) {
	var num = document.forms['contact']['number'];
	var y = num.value;
	if (!isNaN(y)) {
		if (y < 0 || y > 100) {
			number.style.background = 'Red';
			document.getElementById('number-error').innerHTML =
				'Must be between 0 and 100';
			var error = '10';
		} else {
			number.style.background = 'White';
			document.getElementById('number-error').innerHTML = '';
		}
		return error;
	} else {
		document.getElementById('number-error').innerHTML = 'Must be a number.';
		var error = '3';
	}
	return error;
}

function validateDisclaimer(disclaimer) {
	var error = '';

	if (document.getElementById('disclaimer').checked == false) {
		document.getElementById('disclaimer-error').innerHTML = 'Required';
		var error = '4';
	} else {
		document.getElementById('disclaimer-error').innerHTML = '';
	}
	return error;
}
