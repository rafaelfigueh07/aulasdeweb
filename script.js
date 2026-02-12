document.addEventListener("DOMContentLoaded", function() {
    const secaoPrincipal = document.querySelector('.secao-principal');
    
    setTimeout(() => {
        secaoPrincipal.classList.add('visivel');
    }, 200);

    const menuItems = document.querySelectorAll('.menu a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            menuItems.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});