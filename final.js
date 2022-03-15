window.addEventListener("DOMContentLoaded",()=>{
    
    let myHeading=document.querySelector('h1');
    let myImage=document.querySelector('img');
    myImage.onclick = function(){
        let myScr = myImage.getAttribute('src');
        if(myScr===''){
            myImage.src = "./firefox.jfit";
        }   
     }
     function setUsername(){
         let myName = prompt('Please Enter your name.');
        localStorage.setItem('name',myName);
         myHeading.textContent='You are welcome,' + myName + ". This is a simple article about the equator." ;
     }
     setUsername();
})