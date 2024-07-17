let text="";
let display=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let buttonArray=Array.from(buttons);
buttonArray.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='DEL'){
            text=text.substring(0,text.length-1);
            display.value=text;
        }
        else if(e.target.innerHTML=='C')
        {
            text=" ";
            display.value=text;
        }
        else if(e.target.innerHTML=='='){
            text=eval(text);
            display.value=text;
        }
        else{
            text+=e.target.innerHTML;
            display.value=text;
        }
    })
})