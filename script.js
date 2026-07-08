window.addEventListener("DOMContentLoaded", () => {
    // Cargar Menú
    fetch('Navnime.html')
        .then(res => res.text())
        .then(data => {
            const nav = document.getElementById('navnime');
            if (nav) nav.innerHTML = data;
        });

    // Cargar Footer
    fetch('Footer.html')
        .then(res => res.text())
        .then(data => {
            const foot = document.getElementById('footerAnime');
            if (foot) foot.innerHTML = data;
        });
});