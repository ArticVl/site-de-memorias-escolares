// Exemplo de script para funcionalidades adicionais, caso precise
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const submenu = this.querySelector('ul');
            if (submenu) submenu.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            const submenu = this.querySelector('ul');
            if (submenu) submenu.style.display = 'none';
        });
    });
});
