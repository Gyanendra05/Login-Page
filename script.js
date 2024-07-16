const signinForm = document.getElementById('signin-form');
const errorMessage = document.getElementById('error-message');
var para = document.getElementsByName('a');
para.addEventListener("click",(ele)=>{
    para.style.color = "tomoto";
});
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    console.log(`Username: ${username}, Password: ${password}, Remember me: ${rememberMe}`);

    // for checking username and password are correct or not
    if (username === 'admin' && password === 'password'){
        // login is successful redirect to dashboard
        window.location.href = 'dashboard.html';
    } else{
        //login failed, display error message 
        errorMessage.textContent = 'Invalid username or password'
    }
});