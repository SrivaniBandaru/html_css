
let p2 = document.getElementById('para2')
let input= document.getElementById('inp')

function update ()
{
    const str = input.value;
    let rev='';
    for (let i = str.length - 1; i >= 0;i--)
    {
        rev=rev+str[i]
    }
    p2.textContent = rev;
    p2.style.backgroundColor = "red"
    p2.style.fontSize="48px"
    if (rev === str)                        
    {
        alert("given string is pallindrome")
        }
}
/* wap to take an input value- string and reverse it and print */ 



/*d=2.5697
console.log(typeof(d))
console.log(d.toFixed(2))
console.log(d.toPrecision(3))
console.log(d.toString(d))*/