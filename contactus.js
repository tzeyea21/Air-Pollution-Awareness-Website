const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobilenum = document.getElementById('mobilenum')


form.addEventListener('submit', e => {
    e.preventDefault();
    validate_form();
});

const setError = (element, message) => {
    const categorize_contactus_input = element.parentElement;
    const errorDisplay = categorize_contactus_input.querySelector('.error');

    errorDisplay.innerText = message;
    categorize_contactus_input.classList.add('error');
    categorize_contactus_input.classList.remove('success')
}

const setSuccess = element => {
    const categorize_contactus_input = element.parentElement;
    const errorDisplay = categorize_contactus_input.querySelector('.error');

    errorDisplay.innerText = '';
    categorize_contactus_input.classList.add('success');
    categorize_contactus_input.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidmobilenum = mobilenum => {
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    return re.test (String(mobilenum));
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobilenumValue = mobilenum.value.trim();
    //added valids
    let valid = false
    let valid1 = false
    let valid2 = false
    let valid3 = false
    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
        valid1 = true
    }

    if(emailValue === '') {
        setError(email, 'Email is required');

    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email address');
    } else {
        setSuccess(email);
        valid2 = true
    }

    if(mobilenumValue === ''){
        setError(mobilenum, 'Mobile Number is required.');
    } else if (!isValidmobilenum(mobilenumValue)){
        setError(mobilenum, 'Please enter a valid mobile number.');
    } else {
        setSuccess(mobilenum);
        valid3 = true
    }
    if (valid1 == true && valid2 == true && valid3 == true){
        valid = true
    }
    else{
        valid = false
    }
    return valid
}
function validate_form(){
    if (validateInputs() === true){
        alert("Your messages has submitted successfully! We will reach you out as soon as possible!")
    }else{
        alert("Failed to submit. Please check if every details are entered correctly.")
    }
}

