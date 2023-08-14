const pass1 = document.querySelector('#password1');
const pass2 = document.querySelector('#password2');
const errorPass2 = document.querySelector('.errorpassword2');

pass2.addEventListener("input", function (event) {
  if (pass1.value !== pass2.value) {
    pass2.classList.add('error');
    errorPass2.textContent = 'Passwords do not match';
  } else {
    pass2.classList.remove('error')
    errorPass2.textContent = '';
  }
}); 

console.log(pass1)
console.log(pass2)
console.log(errorPass2)
