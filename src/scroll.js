function scroll(){
    
    let content_homepage = document.getElementById("content-homepage")//Tag que se pretende alterar barra de medida que se move a rolagem

    let text_h1 = document.getElementById("title-h1")
    let text_a = document.getElementById("title-a")

    let btn_custom_order = document.getElementsByClassName("btn-custom-order")[0]
    let btn_existing_inventory = document.getElementsByClassName("btn-existing-inventory")[0]

    let link_btn_custom_order = document.getElementById("link_btn_custom_order")/*link button custom order*/
    let link_btn_existing_inventory = document.getElementById("link_btn_existing_inventory")/*link button existing inventory*/

    let down_arrow =document.getElementsByClassName("down-arrow")/*down arraw*/

    let height_top_page = document.documentElement.scrollTop/*distância do top da página*/

    let current_window = content_homepage.clientHeight/*Altura da div cuja id é content-homepage*/

    if(height_top_page >= 0){/*Opacity 1 model 3*/
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=1

        text_h1.innerHTML="Model 3"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/null_BR/model3/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Custom Order'
        btn_existing_inventory.innerHTML='Demo Drive'
    
    }
    if(height_top_page > (0.24 * current_window)){
        content_homepage.style.opacity=0
        down_arrow[0].style.opacity=0
    }
    if(height_top_page > (0.72 * current_window)){/*Opacity 1 model Y*/
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Model Y"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/modely/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/drive'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
    }
    if(height_top_page > (1.2368 * current_window)){
        content_homepage.style.opacity=0
    }
    if(height_top_page > (1.72 * current_window)){/*Opacity 1 model S*/
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Model S"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/models/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='View Inventory'
    }
    if(height_top_page > (2.24 * current_window)){
        content_homepage.style.opacity=0
    }
    if(height_top_page > (2.72 * current_window)){/*Opacity 1 model X*/
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Model X"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/modelx/design#overview'
        link_btn_existing_inventory.href='https://www.tesla.com/inventory/new/mx?arrangeby=relevance&zip=95113&range=200'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='View Inventory'
    }
    if(height_top_page > (3.232 * current_window)){
        content_homepage.style.opacity=0
    }
    if(height_top_page > (3.72 * current_window)){/*Opacity 1 Solar Roof*/
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Solar Roof"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarpanels'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'
    }
    if(height_top_page > (4.239 * current_window)){
        content_homepage.style.opacity=0
    }
    if(height_top_page > (4.72 * current_window)){/*Opacity 1 Solar Panels*/
        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/energy/design'
        link_btn_existing_inventory.href='https://www.tesla.com/solarroof'

        btn_custom_order.innerHTML='Order Now'
        btn_existing_inventory.innerHTML='Learn More'
    }
    if(height_top_page > (5.233 * current_window)){
        content_homepage.style.opacity=0
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Solar Panels"
        text_a.innerHTML='Schedule a Test Drive'
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://www.tesla.com/inventory/new/ms?arrangeby=relevance&zip=95113&range=200'
        link_btn_existing_inventory.href='https://www.tesla.com/models/design#overview'

        btn_custom_order.innerHTML='Buy Now'
        btn_existing_inventory.innerHTML='Custom Order'
        btn_existing_inventory.style.display='block'
    }
    if(height_top_page > (5.712 * current_window)){/*Opacity 1 Acessories */

        content_homepage.style.opacity=1
        down_arrow[0].style.opacity=0

        text_h1.innerHTML="Accessories"
        text_a.innerHTML=''
        text_a.href='https://www.tesla.com/drive'

        link_btn_custom_order.href='https://shop.tesla.com/?tesref=true'

        btn_custom_order.innerHTML='Shop Now'
        btn_existing_inventory.style.display='none'
    }
}
setInterval(scroll, 2000)
