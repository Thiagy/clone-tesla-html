var changes = true
let manual_slide = document.getElementsByName("input-navigation-manual")

manual_slide[0].addEventListener('click', slideModelY)
manual_slide[1].addEventListener('click', slideModelY)

function slideModelY(){
    let display_car = document.querySelector("#display-car")
    let option = document.getElementsByClassName("option")
    let box_text_navigation = document.querySelector("#box-text-navigation")

    if(manual_slide[0].checked || changes===true){

        display_car.style.backgroundImage="url('../images/pg-model-y/1.jfif')"
        option[0].style.backgroundColor='#D0D1D2'
        option[1].style.backgroundColor='white'
        box_text_navigation.innerHTML='Room for up to seven with optional third row'

    }else if(manual_slide[1].checked || changes===false){
        display_car.style.backgroundImage="url('../images/pg-model-y/2.jfif')"
        option[1].style.backgroundColor='#D0D1D2'
        option[0].style.backgroundColor='white'
        box_text_navigation.innerHTML='Versatile seating and storage for cargo and passengers'
    }
    changes=!changes
}

setInterval(slideModelY, 5000)

