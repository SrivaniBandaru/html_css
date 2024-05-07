let ftext = document.getElementById('ftext');
let stext = document.getElementById('stext');
let image = document.getElementById('imginp');
let mainDiv = document.getElementById('output')

function generate ()
{
    
    mainDiv.style.backgroundImage =
        `url(${image.value})`
    mainDiv.style.backgroundSize="cover"
    const para1 = document.createElement('p')
    para1.textContent=ftext.value
    mainDiv.append(para1)
    const para2 = document.createElement('p')
    para2.textContent=stext.value
    mainDiv.append(para2)
    
   
}