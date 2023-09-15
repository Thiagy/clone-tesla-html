//Função que permite navegar pela pagina somente com cliques
function navigation(){
    let block_white = document.getElementsByClassName("block-white")
    let text_block_white = document.getElementsByClassName("text-block-white")
    let distancy_top = document.documentElement.scrollTop

    if(distancy_top<610){/*Navigation Model 3*/

        for(let n = 0; n < 9; n++){
            
            block_white[n].style.width= '';
            block_white[n].style.backgroundColor=''
            text_block_white[n].style.color=''
        
        }

        block_white[0].style.width= '3px';
    }
    if(distancy_top > 610){/*Navigation Safety*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor='#C6C6C8'
            text_block_white[n].style.color='black'

        }

        block_white[1].style.width= '3px';
        block_white[1].style.backgroundColor='black'
    }
    if(distancy_top > 1220){/*Navigation Performance*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor=''
            text_block_white[n].style.color=''

        }

        block_white[2].style.width= '3px';
    }
    if(distancy_top > 1830){/*Navigation All-whell-drive*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor='#C6C6C8'
            text_block_white[n].style.color='black'

        }

        block_white[3].style.width= '3px'; 
        block_white[3].style.backgroundColor='black'
    }
    if(distancy_top > 2440){/*Navigation Range*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor=''
            text_block_white[n].style.color=''

        }

        block_white[4].style.width= '3px';
    }
    if(distancy_top > 3050){/*Navigation Autopilot*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor='#C6C6C8'
            text_block_white[n].style.color='black'

        }

        block_white[5].style.width= '3px';
        block_white[5].style.backgroundColor='black'
    }
    if(distancy_top > 3660){/*Navigation Interior*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor=''
            text_block_white[n].style.color=''

        }

        block_white[6].style.width= '3px';
    }
    if(distancy_top > 4270){/*Navigation Specs*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor=''
            text_block_white[n].style.color=''

        }
        block_white[7].style.width= '3px';

    }
    if(distancy_top > 4880){/*Navigation Specs*/

        for(let n = 0; n < 9; n++){

            block_white[n].style.width= '';
            block_white[n].style.backgroundColor='#C6C6C8'
            text_block_white[n].style.color='black'

        }
    
        block_white[8].style.width= '3px';
        block_white[8].style.backgroundColor='black'
    }
}
setInterval(navigation, 500)