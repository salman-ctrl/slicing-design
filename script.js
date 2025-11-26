const inputs = document.querySelectorAll('.password-input');

inputs.forEach(input => {
  const label = input.previousElementSibling;
  
  if (input.value) {
    label.classList.add('active');
  }
  
  input.addEventListener('focus', () => {
    label.classList.add('active');
  });
  
  input.addEventListener('blur', () => {
    if (!input.value) {
      label.classList.remove('active');
    }
  });
});

const setPasswordForm = document.getElementById('setPasswordForm');
if (setPasswordForm) {
  setPasswordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'main-page.html';
  });
}