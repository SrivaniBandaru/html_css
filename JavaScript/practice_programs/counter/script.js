let c = 0
function incr() {
	//  console.log(document.querySelectorAll('#counter button'))
	if (c < 25)
        {
            c++
		    document.getElementsByClassName("para")[0].textContent = c
        } 
    else 
        {
            alert("don't cross 25")
	    }
    
    if(c%2==0)
        {
            document.getElementById('para1').textContent='even';
        }
    else
    {
        document.getElementById('para1').textContent='odd';
    }
}
function dec()
{

    c--;
    document.getElementsByClassName('para')[0].textContent=c;
    if(c%2==0)
        {
            document.getElementById('para1').textContent='even';
        }
    else
    {
        document.getElementById('para1').textContent='odd';
    } 
}
function reset()
{
    document.getElementsByClassName('para')[0].textContent=0;
    
    document.getElementById('para1').textContent='';   
}
