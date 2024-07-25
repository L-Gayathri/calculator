let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue='';
for(i of buttons)
{
    i.addEventListener('click',(e)=>
    {
        text=e.target.innerText;
        console.log("input is:"+text);
        if(text=='X')
        {
            text='*';
            screenValue+=text;
            screen.value=screenValue;
        }
        else if(text=='AC')
        {
            screenValue='';
            screen.value=screenValue;
        }
        else if(text=='=')
        {
            try{
                screen.value=eval(screenValue);
            }
            catch(err)
            {
                screen.value='Invalid Input';
            }
        }
        else
        {
            screenValue+=text;
            screen.value=screenValue;
        }
    })
}