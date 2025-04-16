const user_token=localStorage.getItem('token');
const user_info=localStorage.getItem('userInfo');
const url = new URL(window.location.href);
const currentPage = url.pathname.split('/').pop().toLowerCase();

if (!user_token && !currentPage.includes('login.html')) {
    window.location.href = 'login.html';
}

function logout(){
    localStorage.removeItem('token',);
    localStorage.removeItem('userInfo');
    window.location.href = 'login.html';
}