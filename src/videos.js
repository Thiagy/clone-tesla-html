// Seu código JavaScript
const car_attributes = document.querySelectorAll('.car-attribute');

car_attributes[0].addEventListener('click', function () {
    changeVideo(1);
    changeNavigation(3);
});

car_attributes[1].addEventListener('click', function () {
    changeVideo(2);
    changeNavigation(1);
});

car_attributes[2].addEventListener('click', function () {
    changeVideo(3);
    changeNavigation(2);
});

function changeVideo(videoNumber) {
    const design_installation_power_on = document.querySelector("#box-video-design-installation-power-on");
    design_installation_power_on.src = `../video-pg-panel-roof/${videoNumber}.webm`;
}

function changeNavigation(selectedIndex) {
    const navigations = document.querySelectorAll('.navigations');
    const blackLines = document.querySelectorAll('.black-line');
    const blackLineFirst = document.querySelector('.black-line-first');

    for (let i = 0; i < navigations.length; i++) {
        if (i === selectedIndex - 1) {
            navigations[i].style.color = '#171A20';
            blackLines[i].style.backgroundColor = '#171A20';
            blackLines[i].style.height = '3px';
        } else {
            navigations[i].style.color = '#A2A3A6';
            blackLines[i].style.backgroundColor = '#A2A3A6';
            blackLines[i].style.height = '2px';
        }
    }

    
}
