window.addEventListener('DOMContentLoaded', function() {
    
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('emailInput').value;
            localStorage.setItem('resetEmail', email);
            window.location.href = 'update-password.html';
        });
    }

    const setPasswordForm = document.getElementById('setPasswordForm');
    if (setPasswordForm) {
        const email = localStorage.getItem('resetEmail');
        const displayEmail = document.getElementById('displayEmail');
        if (displayEmail) {
            displayEmail.textContent = email || 'No email provided';
        }

        setPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newPassword = document.getElementById('newPasswordInput').value;
            const confirmPassword = document.getElementById('confirmPasswordInput').value;
            
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            localStorage.removeItem('resetEmail');
            window.location.href = 'main-page.html';
        });
    }

    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
        });
    });

      const passwordInputs = document.querySelectorAll('.password-input');
      passwordInputs.forEach(input => {
        const label = input.previousElementSibling;
        
        if (label && label.tagName === 'LABEL') {
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
        }
    });
});