function slideMotorCar() {
    const interior_motor = document.getElementById("interior-car-image");
    const slide_electric_powertrain = document.getElementsByClassName("slide-electric-powertrain");
    const darkness_line = document.getElementsByClassName("darkness-line");

    const date = new Date();
    const now = date.getSeconds();

    const images = [
        '../images/pg-model-s/interior-motor-1.jfif',
        '../images/pg-model-s/interior-motor-2.jfif'
    ];

    const colorSwitch = now % 14 <= 7 ? 0 : 1;

    interior_motor.style.backgroundImage = `url('${images[colorSwitch]}')`;

    const colors = ['#9C9D9F', 'black'];
    const heights = ['5px', '4px'];

    for (let i = 0; i < 2; i++) {
        slide_electric_powertrain[i].style.color = colors[(i + colorSwitch) % 2];
        darkness_line[i].style.backgroundColor = colors[(i + colorSwitch) % 2];
        darkness_line[i].style.height = heights[(i + colorSwitch) % 2];
    }
}

setInterval(slideMotorCar, 6000);
