// Lista dos URLs dos vídeos
const videoURLs = [
    '../video-pg-panel-roof/1.webm',
    '../video-pg-panel-roof/2.webm',
    '../video-pg-panel-roof/3.webm'
];

// Captura todos os elementos com a classe car-attribute
const attributeElements = document.querySelectorAll('.car-attribute');

// Captura o elemento de vídeo
const video = document.getElementById('box-video-design-installation-power-on');

let isVideoReady = false; // Variável para rastrear o estado de carregamento do vídeo

// Evento para verificar se o vídeo está pronto para ser reproduzido
video.addEventListener('loadedmetadata', function () {
    isVideoReady = true;
});

// Função para atualizar o vídeo e cores com base no índice
function updateVideoAndColors(index) {
    if (isVideoReady) {
        // Remova a classe "active" de todos os elementos
        attributeElements.forEach(element => {
            element.classList.remove('active');
        });

        // Defina o vídeo src com base no índice
        video.src = videoURLs[index];

        // Atualize as cores da barra de escuridão, h2 e p
        attributeElements.forEach((element, i) => {
            const darkness = element.querySelector('.darkness-line-video');
            const h2 = element.querySelector('h2');
            const p = element.querySelector('p');

            if (i === index) {
                darkness.style.backgroundColor = 'black';
                h2.style.color = 'black';
                p.style.color = 'black';
            } else {
                darkness.style.backgroundColor = 'gray';
                h2.style.color = 'gray';
                p.style.color = 'gray';
            }
        });

        // Reinicie o vídeo
        video.load();
        video.play();

        // Adicione a classe "active" ao elemento atual
        attributeElements[index].classList.add('active');
    }
}

// Função para alternar automaticamente os vídeos a cada 5 segundos
let currentIndex = 0;

function autoChangeVideo() {
    currentIndex = (currentIndex + 1) % videoURLs.length;
    updateVideoAndColors(currentIndex);
}

setInterval(autoChangeVideo, 5000);

// Adicione um ouvinte de eventos de clique a cada elemento
attributeElements.forEach((element, index) => {
    element.addEventListener('click', () => {
        // Obtenha o URL do vídeo a partir do atributo data-video
        const videoURL = element.getAttribute('data-video');

        // Encontre o índice do URL do vídeo na lista de URLs
        const videoIndex = videoURLs.indexOf(videoURL);

        // Atualize o vídeo e cores com base no índice do vídeo
        if (videoIndex !== -1) {
            updateVideoAndColors(videoIndex);
        }
    });
});

// Inicialmente, exiba o primeiro vídeo e cores
updateVideoAndColors(currentIndex);
