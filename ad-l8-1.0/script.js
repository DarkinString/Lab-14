fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footerAnime').innerHTML = data;
            });