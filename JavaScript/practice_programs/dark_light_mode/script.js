let btnText= document.getElementById('btn2')
function changeMode()
{
    document.body.classList.toggle('dark')
    if (btnText.textContent == "🌛")
    {
        btn.textContent = "☀️"
    }
    else
    {
        btn.textContent="🌛"
        }
}
let x=document.getElementById('input')
function myfun()
{
    if(x.type=="password")
        {
            x.type="text";
            document.getElementById('btn').textContent="hide";

        }
    else{
        x.type="password";
        document.getElementById('btn').textContent="show";
    }    

}