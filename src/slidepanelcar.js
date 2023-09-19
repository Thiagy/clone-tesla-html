//Função que oscila os videos do interior do carro
document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.querySelector(".div_video");
    const videos = [
      "../video-pg-model-s/1.mp4",
      "../video-pg-model-s/2.mp4",
      "../video-pg-model-s/3.mp4",
      "../video-pg-model-s/4.mp4",
      "../video-pg-model-s/5.mp4"
    ];
    const labels = document.querySelectorAll(".option");
    const titles = [
      "Cinematic Experience",
      "Yoke Steering",
      "Perfect Environment Redesigned Second Row",
      "Perfect Environment",
      "Console-Grade Gaming"
    ];
    const contents = [
      "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
      "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
      "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
      "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
      "Up to 10 teraflops of processing power unlock in-car gaming on-par with todays newest consoles. Play from any seat with wireless controller and headset compatibility."
    ];
  
    let currentVideoIndex = 0;
  
    function playVideo(index) {
      if (index >= 0 && index < videos.length) {
        const currentVideo = videoContainer.querySelector("video");
        currentVideoIndex = index;
        currentVideo.src = videos[currentVideoIndex];
        currentVideo.load();
        currentVideo.play();
  
        // Atualizar as cores dos labels
        labels.forEach((label, i) => {
          if (i === currentVideoIndex) {
            label.style.backgroundColor = "white";
          } else {
            label.style.backgroundColor = "gray";
          }
        });
  
        // Atualizar os títulos e conteúdos
        const titleElement = document.getElementById("title_slide_car");
        const contentElement = document.getElementById("content_slide_car");
        titleElement.textContent = titles[currentVideoIndex];
        contentElement.textContent = contents[currentVideoIndex];
      }
    }
  
    // Inicializar a troca automática de vídeos
    playVideo(currentVideoIndex);
  
    // Definir um temporizador para alternar automaticamente os vídeos
    setInterval(function() {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      playVideo(currentVideoIndex);
    }, 10000); // Troque a cada 5 segundos (5000 milissegundos)
  
    // Adicionar ouvintes de evento para os rótulos
    labels.forEach((label, index) => {
      label.addEventListener("click", function() {
        playVideo(index);
      });
    });
  });
  