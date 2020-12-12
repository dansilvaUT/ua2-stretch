const formBtn = document.getElementById('close-form');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const emailList = [];
const formContainer = document.querySelector('.form-container');
const cart = document.createElement('div');
const main = document.querySelector('main');
let cartItems = 0;
//Toggle function that hides form and changes inner text value
const toggler = () => {
    form.classList.toggle('hide');
    if (formBtn.innerText === 'X') {
        formBtn.innerText = '+';
    } else {
        formBtn.innerText = 'X';
    }
}


//Check if form values are false else push the values in emailList array
const validateForm = () => {
    if (nameInput.value === '' && emailInput.value === '') {
        nameInput.style.border = '2px solid red';
        emailInput.style.border = '2px solid red';
        alert('You mush enter a Name and Email!');
    } else if (nameInput.value === '') {
        nameInput.style.border = '2px solid red';
        alert('Please enter a name to subscribe');
    } else if (emailInput.value === '') {
        emailInput.style.border = '2px solid red';
        alert('You must enter an email to subscribe');
    } else {
        emailList.push(nameInput.value, emailList.value);
        displayThankYou();
    }
}

//Listen for the button submit, invoke validateForm function
form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
});

//Display Thank you after sucessfully subscribing
const displayThankYou = () => {
    formContainer.innerText = 'Thank you for subscribing!';
    setTimeout(() => {
        formContainer.remove();
    }, 3000);
}

//Remove red border after user begins typing
nameInput.addEventListener('change', e => {
    nameInput.style.border = 'none';
});

emailInput.addEventListener('change', e => {
    emailInput.style.border = 'none';
});

const addToCart = () => {
    if (cartItems === 0) {
        cartItems = 1;
        cart.setAttribute('class', 'cart-display');
        cart.innerText = 'Your Cart: 1 item';
        main.appendChild(cart);
    } else {
        cartItems += 1;
        cart.innerText = `Your Cart: ${cartItems}`;
    }
}