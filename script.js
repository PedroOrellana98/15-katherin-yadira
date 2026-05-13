function iniciarExperiencia() {
    const caratula = document.getElementById('caratula');
    const contenido = document.getElementById('contenido');
    const musica = document.getElementById('musica-fondo');

    // Activar música
    musica.play();

    // Desvanecer carátula
    caratula.classList.add('fade-out');

    setTimeout(() => {
        caratula.style.display = 'none';
        document.body.classList.add('scroll-enabled');
        contenido.style.display = 'block';
        setTimeout(() => {
            contenido.style.opacity = '1';
        }, 50);
    }, 1000);
}

function controlMusica() {
    const musica = document.getElementById('musica-fondo');
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}