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

 window.addEventListener('DOMContentLoaded', function() {
        const email = localStorage.getItem('resetEmail');
        if (email) {
          document.getElementById('displayEmail').textContent = email;
        } else {
          document.getElementById('displayEmail').textContent = 'No email provided';
        }
      });

      document.getElementById('setPasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorAlert = document.getElementById('errorAlert');
        
        if (newPassword !== confirmPassword) {
          errorAlert.classList.remove('hidden');
          setTimeout(() => {
            errorAlert.classList.add('hidden');
          }, 3000);
          return;
        }
        
        errorAlert.classList.add('hidden');
        localStorage.removeItem('resetEmail');
        window.location.href = 'main.html';
      });

       document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;
            localStorage.setItem('resetEmail', email);
            window.location.href = 'update-password.html';
        });