document.querySelector('#menu').addEventListener('click', openMenu)
document.querySelector('#close_menu').addEventListener('click', openMenu)
document.querySelector('#backdrop').addEventListener('click', openMenu)

function openMenu(){

    const openMenu = document.querySelector("aside")
    const backdrop = document.querySelector('#backdrop')
    
    if(openMenu.style.right!=='0px'){

        openMenu.style.right='0'
        backdrop.style.display='block'
        document.body.style.overflow='hidden'

    }else{

        openMenu.style.right=""
        backdrop.style.display=''
        document.body.style.overflow=''

    }
   
}

