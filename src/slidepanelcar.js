var display_car = document.querySelector("#display-car")
var option = document.getElementsByClassName("option")

const title_slide_car = document.querySelector('#title_slide_car')
const content_slide_car = document.querySelector('#content_slide_car')

var manual_slide = document.getElementsByName("input-navigation-manual")

//Função que permie oscilar entre vídeos do interior do carro
function slidePanelCar(){

    var count_image = new Date().getSeconds()

    if(manual_slide[0].checked || count_image < 12){

        display_car.src="../video-pg-model-s/1.mp4"

        for(let n = 0; n < 5; n++){
            option[n].style.backgroundColor='#5C5E62'
        }

        option[0].style.backgroundColor='white'

        title_slide_car.innerHTML='Cinematic Experience'
        content_slide_car.innerHTML='A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.'

    }else if(manual_slide[1].checked || count_image < 24){

        display_car.src="../video-pg-model-s/2.mp4"

        for(let n = 0; n < 5; n++){
            option[n].style.backgroundColor='#5C5E62'
        }

        option[1].style.backgroundColor='white'

        title_slide_car.innerHTML='Yoke Steering'
        content_slide_car.innerHTML='A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.'

    }else if(manual_slide[2].checked || count_image < 36){

        display_car.src="../video-pg-model-s/3.mp4"

        for(let n = 0; n < 5; n++){
            option[n].style.backgroundColor='#5C5E62'
        }

        option[2].style.backgroundColor='white'

        title_slide_car.innerHTML='Perfect Environment'
        content_slide_car.innerHTML='Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.'

    }else if(manual_slide[3].checked || count_image < 48){

        display_car.src="../video-pg-model-s/4.mp4"

        for(let n = 0; n < 5; n++){
            option[n].style.backgroundColor='#5C5E62'
        }

        option[3].style.backgroundColor='white'

        title_slide_car.innerHTML='Redesigned Second Row'
        content_slide_car.innerHTML='Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.'

    }else if(manual_slide[4].checked || count_image < 60){

        display_car.src="../video-pg-model-s/5.mp4"

        for(let n = 0; n < 5; n++){
            option[n].style.backgroundColor='#5C5E62'
        }

        option[4].style.backgroundColor='white'

        title_slide_car.innerHTML='Console-Grade Gaming'
        content_slide_car.innerHTML='Up to 10 teraflops of processing power unlock in-car gaming on-par with todays newest consoles. Play from any seat with wireless controller and headset compatibility.'
    }
    
}

setTimeout(slidePanelCar, 1000)
setInterval(slidePanelCar, 12000)


