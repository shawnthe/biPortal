document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginCard = document.getElementById('login');
    const signupCard = document.getElementById('signup');
    const toSignup = document.getElementById('toSignup');
    const toLogin = document.getElementById('toLogin');
    
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginSpin = document.getElementById('loginSpin');
    const signupSpin = document.getElementById('signupSpin');
    
    const modalEl = document.getElementById('successModal');
    const modal = new bootstrap.Modal(modalEl);
    const modalTitle = document.getElementById('modalTitle');
    const modalMsg = document.getElementById('modalMsg');
    const dashboardRedirect = document.getElementById('dashboardRedirect');

    toSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginCard.classList.remove('show');
        signupCard.classList.add('show');
        loginForm.reset();
        loginForm.classList.remove('was-validated');
    });

    toLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupCard.classList.remove('show');
        loginCard.classList.add('show');
        signupForm.reset();
        signupForm.classList.remove('was-validated');
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (!loginForm.checkValidity()) {
            loginForm.classList.add('was-validated');
            return false;
        }
        
        showLoading(loginBtn, loginSpin, true);
        setTimeout(() => {
            showLoading(loginBtn, loginSpin, false);
            showSuccess('Login Success!', 'Welcome back to BI Portal!');
        }, 1000);
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const pass1 = document.getElementById('signupPass').value;
        const pass2 = document.getElementById('signupConfirm');
        const confirmError = document.getElementById('confirmError');
        
        if (pass1 !== pass2.value) {
            pass2.classList.add('is-invalid');
            confirmError.textContent = 'Passwords do not match';
            return false;
        } else {
            pass2.classList.remove('is-invalid');
        }

        if (!signupForm.checkValidity()) {
            signupForm.classList.add('was-validated');
            return false;
        }
        
        showLoading(signupBtn, signupSpin, true);
        setTimeout(() => {
            showLoading(signupBtn, signupSpin, false);
            showSuccess('Account Created!', 'Welcome to BI Portal!');
        }, 1000);
    });

    function showLoading(btn, spinner, show) {
        if (show) {
            spinner.classList.remove('d-none');
            btn.disabled = true;
        } else {
            spinner.classList.add('d-none');
            btn.disabled = false;
        }
    }

    function showSuccess(title, message) {
        modalTitle.textContent = title;
        modalMsg.textContent = message;
        modal.show();
    }

    dashboardRedirect.addEventListener('click', function() {
        alert('Redirecting to BI Dashboard...');
    });
});
