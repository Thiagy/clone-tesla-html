function setaUpNone(){
    let setaUp = document.getElementsByClassName("seta-up")

    let section_height = document.documentElement.scrollTop
    if(section_height >= 610){
        setaUp[0].style.display='block'
    }else{
        setaUp[0].style.display=''
    }
}

setInterval(setaUpNone, 1000)