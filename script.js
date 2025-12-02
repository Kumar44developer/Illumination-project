const mouseEvent = document.documentElement;
mouseEvent.addEventListener("mousemove",(e)=>{

    mouseEvent.style.setProperty("--x" , e.clientX + "px");
                        
