//Função que permite fazer slide
function slideMaps(){
    let dual_motor_all_wheel_drive_2 = document.getElementsByClassName("slide-map")
    let darkness_line = document.getElementsByClassName("darkness-line")

    let date = new Date()
    let now = date.getSeconds()

    if(now<= 7.5 || now<=15){
        
        darkness_line[5].style.backgroundColor='#9C9D9F'
        darkness_line[2].style.backgroundColor='black'

        dual_motor_all_wheel_drive_2[3].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_2[0].style.color='black'

    }else if(now<= 22.5 || now<=30){

        darkness_line[2].style.backgroundColor='#9C9D9F'
        darkness_line[3].style.backgroundColor='black'
        dual_motor_all_wheel_drive_2[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_2[1].style.color='black'
  
    }else if(now<= 37.5 || now<=45){

        darkness_line[3].style.backgroundColor='#9C9D9F'
        darkness_line[4].style.backgroundColor='black'
        dual_motor_all_wheel_drive_2[1].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_2[2].style.color='black'

    }else if(now<= 52.5 || now<=60){

        darkness_line[4].style.backgroundColor='#9C9D9F'
        darkness_line[5].style.backgroundColor='black'
        dual_motor_all_wheel_drive_2[2].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_2[3].style.color='black'

    }

}
setInterval(slideMaps, 14000)