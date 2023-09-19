// Captura todos os elementos com a classe box-slide-text-features
const featureBoxes = document.querySelectorAll('.box-slide-text-features');

// Captura o elemento de vídeo
const video = document.getElementById('demo-video');

// Captura a barra de escuridão
const darknessLine = document.querySelector('.darkness-line-video');

// Lista dos URLs dos vídeos
const videoURLs = [
    '../video-pg-model-s/2.1.mp4',
    '../video-pg-model-s/2.2.mp4',
    '../video-pg-model-s/2.3.mp4',
    '../video-pg-model-s/2.4.mp4'
];

// Função para atualizar o vídeo e cores com base no índice
function updateVideoAndColors(index) {
    // Remove a classe "active" de todas as caixas de recurso
    featureBoxes.forEach(box => {
        box.classList.remove('active');
    });

    // Define o vídeo src com base no índice
    video.src = videoURLs[index];

    // Atualiza as cores da barra de escuridão, h3 e p
    featureBoxes.forEach((box, i) => {
        const darkness = box.querySelector('.darkness-line-video');
        const h3 = box.querySelector('h3');
        const p = box.querySelector('p');

        if (i === index) {
            darkness.style.backgroundColor = 'black';
            h3.style.color = 'black';
            p.style.color = 'black';
        } else {
            darkness.style.backgroundColor = 'gray';
            h3.style.color = 'gray';
            p.style.color = 'gray';
        }
    });

    // Reinicia o vídeo
    video.load();
    video.play();

    // Adiciona a classe "active" à caixa de recurso atual
    featureBoxes[index].classList.add('active');
}

// Função para alternar automaticamente os vídeos a cada 5 segundos
let currentIndex = 0;

function autoChangeVideo() {
    currentIndex = (currentIndex + 1) % videoURLs.length;
    updateVideoAndColors(currentIndex);
}

setInterval(autoChangeVideo, 5000);

// Adicione um ouvinte de eventos de clique a cada caixa de recurso
featureBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        updateVideoAndColors(index);
    });
});

// Inicialmente, exiba o primeiro vídeo e cores
updateVideoAndColors(currentIndex);
