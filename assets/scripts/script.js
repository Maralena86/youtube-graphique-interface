window.onload=()=>{
    let collapse =document.getElementById("collapse");;
    let menu = document.getElementById("navbar");
    let smallMenu = document.getElementById("header-left-contracted");
    let container = document.querySelector(".container")
    if(collapse){
        collapse.addEventListener("click", ()=>{
            console.log('collapse')
            if(menu.style.display==="block"){
                menu.style.display="none"
                smallMenu.style.display="block";
                container.style.marginLeft="0px";
                
            }else{
                menu.style.display="block";
                smallMenu.style.display="none";
                container.style.marginLeft="224px";
                
                

            }        
        })
    }

}