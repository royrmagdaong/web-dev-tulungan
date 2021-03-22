function openRegisterModal(){
    let registerModal = document.getElementById('registerModal')
    registerModal.style.display = 'flex'
}
function openLoginModal(){
    let loginModal = document.getElementById('loginModal')
    // let loginModal = document.getElementById('nav')
    loginModal.style.display = 'flex'
    // loginModal.style.backgroundColor = 'green'
}

function closeModal(){
    let registerModal = document.getElementById('registerModal')
    let loginModal = document.getElementById('loginModal')
    loginModal.style.display = 'none'
    registerModal.style.display = 'none'
}