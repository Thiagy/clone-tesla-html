function slideVideoDemo(){
    let dual_motor_all_wheel_drive_demo = document.getElementsByClassName("box-slide-text-features")
    let darkness_line_video = document.getElementsByClassName("darkness-line-video")
    let demo_video = document.querySelector("#demo-video")

    let date = new Date()
    let now = date.getSeconds()

    if(now<=15){

        demo_video.src='../video-pg-model-s/2.1.mp4'

        dual_motor_all_wheel_drive_demo[3].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[0].style.color='black'

        darkness_line_video[3].style.backgroundColor='#9C9D9F'
        darkness_line_video[0].style.backgroundColor='black'

        darkness_line_video[3].style.height='4px'
        darkness_line_video[0].style.height='5px'

    }else if(now<=30){
       
        demo_video.src='../video-pg-model-s/2.2.mp4'

        dual_motor_all_wheel_drive_demo[0].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[1].style.color='black'

        darkness_line_video[0].style.backgroundColor='#9C9D9F'
        darkness_line_video[1].style.backgroundColor='black'

        darkness_line_video[0].style.height='4px'
        darkness_line_video[1].style.height='5px'

        
    }else if(now<=45){

        demo_video.src='../video-pg-model-s/2.3.mp4'

        dual_motor_all_wheel_drive_demo[1].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[2].style.color='black'

        darkness_line_video[1].style.backgroundColor='#9C9D9F'
        darkness_line_video[2].style.backgroundColor='black'

        darkness_line_video[1].style.height='4px'
        darkness_line_video[2].style.height='5px'

    }else if(now<=60){

        demo_video.src='../video-pg-model-s/2.4.mp4'

        dual_motor_all_wheel_drive_demo[2].style.color='#9C9D9F'
        dual_motor_all_wheel_drive_demo[3].style.color='black'

        darkness_line_video[2].style.backgroundColor='#9C9D9F'
        darkness_line_video[3].style.backgroundColor='black'

        darkness_line_video[2].style.height='4px'
        darkness_line_video[3].style.height='5px'

    }  
}

setTimeout(slideVideoDemo, 1000)
setInterval(slideVideoDemo, 14000)
