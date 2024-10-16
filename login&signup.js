function setError(inputElement, message) {
    inputElement.classList.add("form_input_error");
    inputElement.parentElement.querySelector(".form_input_errormessage").textContent = message;}

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input_error");
    inputElement.parentElement.querySelector(".form_input_errormessage").textContent = "";}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".display_message");

    messageElement.textContent = message;
    messageElement.classList.remove("display_message_success", "display_message_error");
    messageElement.classList.add(`display_message--${type}`);}

    document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");

    document.querySelector("#linksignup").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("signupform_hidden");
        signupForm.classList.remove("signupform_hidden");});

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("signupform_hidden");
        signupForm.classList.add("signupform_hidden");});

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password combination.");});

    signupForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(signupForm, "error", "Please enter all required informations.");});

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {

            if (e.target.id === "login_username" && e.target.value.length > 0 && e.target.value.length <8) {
                setError(inputElement, "Please enter a valid username. A username contains at least 8 characters.");}

            if (e.target.id === "signup_username" && e.target.value.length > 0 && e.target.value.length <8) {
                setError(inputElement, "Username must be at least 8 characters.");}

            if (e.target.id === "signup_email" && (!e.target.value.includes("@") || !e.target.value.includes(".com"))) {
                setError(inputElement, "Invalid email address. Email address should contains '@' and ends with '.com'.");}

            if (e.target.id === "signup_password" && e.target.value.length > 0 && e.target.value.length <8) {
                setError(inputElement, "Password must contains 8 characters.");}
            
            if (e.target.id === "signup_confirmpassword" && e.target.value!=document.getElementById('signup_password').value) {
                setError(inputElement, "Confirm password should be the same as password.");}});   

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);});
    });
});