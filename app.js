const pressKey = document.querySelector(".press_key h2");
const keyBoardkeyCode = document.querySelector(".key_code h2");
const keyBox = document.querySelector(".key_code ");
const front = document.querySelector(".front ");



window.addEventListener("keydown",(e)=>{
    front.style.display = "none";
    pressKey.innerText = e.key; 
    keyBoardkeyCode.innerText = e.keyCode;
    
    if(e.keyCode == 32){
        pressKey.innerText = "Space" ;
    }
});





