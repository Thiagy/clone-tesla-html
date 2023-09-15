function navigationSolarPanels(){
    let block_white = document.getElementsByClassName("block-white")
    let text_block_white = document.getElementsByClassName("text-block-white")
    let distancy_top = document.documentElement.scrollTop

    if(distancy_top<610){/*Navigation Solar Panels*/
        block_white[0].style.width= '3px';
        block_white[1].style.width= '';
        block_white[2].style.width= '';
        block_white[3].style.width= '';
        block_white[4].style.width= '';
        block_white[5].style.width= '';
        block_white[6].style.width= '';
        block_white[7].style.width= '';
        block_white[8].style.width= '';
        
        block_white[0].style.backgroundColor='black'
        block_white[1].style.backgroundColor=''
        block_white[2].style.backgroundColor=''
        block_white[3].style.backgroundColor=''
        block_white[4].style.backgroundColor=''
        block_white[5].style.backgroundColor=''
        block_white[6].style.backgroundColor=''
        block_white[7].style.backgroundColor=''
        block_white[8].style.backgroundColor=''
        
        text_block_white[0].style.color='black'
        text_block_white[1].style.color='black'
        text_block_white[2].style.color='black'
        text_block_white[3].style.color='black'
        text_block_white[4].style.color='black'
        text_block_white[5].style.color='black'
        text_block_white[6].style.color='black'
        text_block_white[7].style.color='black'
        text_block_white[8].style.color='black'
    }
    if(distancy_top > 610){/*Navigation Savings*/
        block_white[0].style.width= '';
        block_white[1].style.width= '3px';
        block_white[2].style.width= '';
        block_white[3].style.width= '';
        block_white[4].style.width= '';
        block_white[5].style.width= '';
        block_white[6].style.width= '';
        block_white[7].style.width= '';
        block_white[8].style.width= '';

        block_white[0].style.backgroundColor='#C6C6C8'
        block_white[1].style.backgroundColor='black'
        block_white[2].style.backgroundColor='#C6C6C8'
        block_white[3].style.backgroundColor='#C6C6C8'
        block_white[4].style.backgroundColor='#C6C6C8'
        block_white[5].style.backgroundColor='#C6C6C8'
        block_white[6].style.backgroundColor='#C6C6C8'
        block_white[7].style.backgroundColor='#C6C6C8'
        block_white[8].style.backgroundColor='#C6C6C8'

        text_block_white[0].style.color='black'
        text_block_white[1].style.color='black'
        text_block_white[2].style.color='black'
        text_block_white[3].style.color='black'
        text_block_white[4].style.color='black'
        text_block_white[5].style.color='black'
        text_block_white[6].style.color='black'
        text_block_white[7].style.color='black'
        text_block_white[8].style.color='black'
    }
    if(distancy_top > 1220){/*Navigation Design*/
        block_white[0].style.width= '';
        block_white[1].style.width= '';
        block_white[2].style.width= '3px';
        block_white[3].style.width= '';
        block_white[4].style.width= '';
        block_white[5].style.width= '';
        block_white[6].style.width= '';
        block_white[7].style.width= '';
        block_white[8].style.width= '';
        
        block_white[0].style.backgroundColor=''
        block_white[1].style.backgroundColor=''
        block_white[2].style.backgroundColor='black'
        block_white[3].style.backgroundColor=''
        block_white[4].style.backgroundColor=''
        block_white[5].style.backgroundColor=''
        block_white[6].style.backgroundColor=''
        block_white[7].style.backgroundColor=''
        block_white[8].style.backgroundColor=''
        
        text_block_white[0].style.color='black'
        text_block_white[1].style.color='black'
        text_block_white[2].style.color='black'
        text_block_white[3].style.color='black'
        text_block_white[4].style.color='black'
        text_block_white[5].style.color='black'
        text_block_white[6].style.color='black'
        text_block_white[7].style.color='black'
        text_block_white[8].style.color='black'
    }
    if(distancy_top > 1830){/*Navigation Powerwall*/
        block_white[0].style.width= '';
        block_white[1].style.width= '';
        block_white[2].style.width= '';
        block_white[3].style.width= '3px';
        block_white[4].style.width= '';
        block_white[5].style.width= '';
        block_white[6].style.width= '';
        block_white[7].style.width= '';
        block_white[8].style.width= '';
        
        block_white[0].style.backgroundColor=''
        block_white[1].style.backgroundColor=''
        block_white[2].style.backgroundColor=''
        block_white[3].style.backgroundColor='white'
        block_white[4].style.backgroundColor=''
        block_white[5].style.backgroundColor=''
        block_white[6].style.backgroundColor=''
        block_white[7].style.backgroundColor=''
        block_white[8].style.backgroundColor=''
        
        text_block_white[0].style.color='gray'
        text_block_white[1].style.color='gray'
        text_block_white[2].style.color='gray'
        text_block_white[3].style.color='gray'
        text_block_white[4].style.color='gray'
        text_block_white[5].style.color='gray'
        text_block_white[6].style.color='gray'
        text_block_white[7].style.color='gray'
        text_block_white[8].style.color='gray'
    }
    if(distancy_top > 2440){/*Navigation Power On*/
        block_white[0].style.width= '';
        block_white[1].style.width= '';
        block_white[2].style.width= '';
        block_white[3].style.width= '';
        block_white[4].style.width= '3px';
        block_white[5].style.width= '';
        block_white[6].style.width= '';
        block_white[7].style.width= '';
        block_white[8].style.width= '';
        
        block_white[0].style.backgroundColor=''
        block_white[1].style.backgroundColor=''
        block_white[2].style.backgroundColor=''
        block_white[3].style.backgroundColor=''
        block_white[4].style.backgroundColor='black'
        block_white[5].style.backgroundColor=''
        block_white[6].style.backgroundColor=''
        block_white[7].style.backgroundColor=''
        block_white[8].style.backgroundColor=''
        
        text_block_white[0].style.color='black'
        text_block_white[1].style.color='black'
        text_block_white[2].style.color='black'
        text_block_white[3].style.color='black'
        text_block_white[4].style.color='black'
        text_block_white[5].style.color='black'
        text_block_white[6].style.color='black'
        text_block_white[7].style.color='black'
        text_block_white[8].style.color='black'
    }
    if(distancy_top > 3050){/*Navigation Efficiency*/
        block_white[0].style.width= '';
        block_white[1].style.width= '';
        block_white[2].style.width= '';
        block_white[3].style.width= '';
        block_white[4].style.width= '';
        block_white[5].style.width= '3px';
        block_white[6].style.width= '';
        block_white[7].style.width= '';
        block_white[8].style.width= '';
        
        block_white[0].style.backgroundColor='#C6C6C8'
        block_white[1].style.backgroundColor='#C6C6C8'
        block_white[2].style.backgroundColor='#C6C6C8'
        block_white[3].style.backgroundColor='#C6C6C8'
        block_white[4].style.backgroundColor='#C6C6C8'
        block_white[5].style.backgroundColor='black'
        block_white[6].style.backgroundColor='#C6C6C8'
        block_white[7].style.backgroundColor='#C6C6C8'
        block_white[8].style.backgroundColor='#C6C6C8'
        
        text_block_white[0].style.color='black'
        text_block_white[1].style.color='black'
        text_block_white[2].style.color='black'
        text_block_white[3].style.color='black'
        text_block_white[4].style.color='black'
        text_block_white[5].style.color='black'
        text_block_white[6].style.color='black'
        text_block_white[7].style.color='black'
        text_block_white[8].style.color='black'
    }
    if(distancy_top > 3660){/*Navigation Experience*/
        block_white[0].style.width= '';
        block_white[1].style.width= '';
        block_white[2].style.width= '';
        block_white[3].style.width= '';
        block_white[4].style.width= '';
        block_white[5].style.width= '';
        block_white[6].style.width= '3px';
        block_white[7].style.width= '';
        block_white[8].style.width= '';
        
        block_white[0].style.backgroundColor=''
        block_white[1].style.backgroundColor=''
        block_white[2].style.backgroundColor=''
        block_white[3].style.backgroundColor=''
        block_white[4].style.backgroundColor=''
        block_white[5].style.backgroundColor=''
        block_white[6].style.backgroundColor=''
        block_white[7].style.backgroundColor=''
        block_white[8].style.backgroundColor=''
        
        text_block_white[0].style.color=''
        text_block_white[1].style.color=''
        text_block_white[2].style.color=''
        text_block_white[3].style.color=''
        text_block_white[4].style.color=''
        text_block_white[5].style.color=''
        text_block_white[6].style.color=''
        text_block_white[7].style.color=''
        text_block_white[8].style.color=''
    }
    if(distancy_top > 4270){/*Navigation Specs*/
    block_white[0].style.width= '';
    block_white[1].style.width= '';
    block_white[2].style.width= '';
    block_white[3].style.width= '';
    block_white[4].style.width= '';
    block_white[5].style.width= '';
    block_white[6].style.width= '';
    block_white[7].style.width= '3px';
    block_white[8].style.width= '';
    
    block_white[0].style.backgroundColor=''
    block_white[1].style.backgroundColor=''
    block_white[2].style.backgroundColor=''
    block_white[3].style.backgroundColor=''
    block_white[4].style.backgroundColor=''
    block_white[5].style.backgroundColor=''
    block_white[6].style.backgroundColor=''
    block_white[7].style.backgroundColor=''
    block_white[8].style.backgroundColor=''
    
    text_block_white[0].style.color=''
    text_block_white[1].style.color=''
    text_block_white[2].style.color=''
    text_block_white[3].style.color=''
    text_block_white[4].style.color=''
    text_block_white[5].style.color=''
    text_block_white[6].style.color=''
    text_block_white[7].style.color=''
    text_block_white[8].style.color=''
    }
    if(distancy_top > 4880){/*Navigation Specs*/
    block_white[0].style.width= '';
        block_white[1].style.width= '';
        block_white[2].style.width= '';
        block_white[3].style.width= '';
        block_white[4].style.width= '';
        block_white[5].style.width= '';
        block_white[6].style.width= '';
        block_white[7].style.width= '';
        block_white[8].style.width= '3px';
        
        block_white[0].style.backgroundColor='#C6C6C8'
        block_white[1].style.backgroundColor='#C6C6C8'
        block_white[2].style.backgroundColor='#C6C6C8'
        block_white[3].style.backgroundColor='#C6C6C8'
        block_white[4].style.backgroundColor='#C6C6C8'
        block_white[5].style.backgroundColor='#C6C6C8'
        block_white[6].style.backgroundColor='#C6C6C8'
        block_white[7].style.backgroundColor='#C6C6C8'
        block_white[8].style.backgroundColor='white'
        
        text_block_white[0].style.color='white'
        text_block_white[1].style.color='white'
        text_block_white[2].style.color='white'
        text_block_white[3].style.color='white'
        text_block_white[4].style.color='white'
        text_block_white[5].style.color='white'
        text_block_white[6].style.color='white'
        text_block_white[7].style.color='white'
        text_block_white[8].style.color='white'
    }
}
setInterval(navigationSolarPanels, 500)