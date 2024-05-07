let input=document.getElementById('inp')
function myFun()
{
    if(input.type=='password')
        {
            input.type='text';
            document.getElementById('btn').textContent= "👁";

        }
        else{
            input.type="password";
            document.getElementById('btn').textContent= "hide"
        }
}
let btnText=document.getElementById('btn2')
function changeMode()
{
    document.body.classList.toggle('dark')
    if(btnText.textContent=='🌞'){
        btnText.textContent='🌙';

    }
    else{
        btnText.textContent="🌞"
    }
}