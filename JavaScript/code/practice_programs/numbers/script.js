/*Program for to print odd numbers from 1 to given boundaries */
var a = prompt('enter a value');
var b=1;
while(b<=a)           //we may use a<=1 and a--
    {
        if (b%2 == 0) //to print them in reverse order  
            {
                console.log(b)

            }
            b++;    
       
        
    }

/*by using for loop */
for(var i = 1; i<=a,i++)
    {
        if(i%2 != 0)
            {
                console.log(i)
            }
    }