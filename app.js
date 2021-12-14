const pressKey = document.querySelector(".press_key h2");
const readKeyCode = document.querySelector(".key_code h2");
const front = document.querySelector(".front");
const clickCopy = document.querySelector("p");



window.addEventListener("keydown",(e)=>{
    front.style.display = "none";
    pressKey.innerText = e.key; 
    readKeyCode.innerText = e.keyCode;
    
    if(e.keyCode === 32){
        pressKey.innerText = "Space" ;
    }
});

clickCopy.addEventListener("click",(e)=>{

    const textBox = document.createElement("textarea");
    textBox.setAttribute("readonly","");
    textBox.style.position = "absolute";
    textBox.value = readKeyCode.innerText;
    document.body.appendChild(textBox);
    // --- select & copy ---
    textBox.select();
    document.execCommand("copy");
    document.body.removeChild(textBox);
    
    clickCopy.innerText = "Copied";
    clickCopy.style.color = "#fff";
    
    setTimeout(()=>{
        clickCopy.innerText = "Click To Copy";
        clickCopy.style.color = "#000";
    },2000)
    
})




