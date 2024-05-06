//reverse of a number using for loop

// var str = prompt('Enter a string');
// var n= str.length;
// rev='';
// for(let i=n-1;i>=0;i--)
//     {
//         rev+=str[i];
//         console.log(rev);
//     }
//     console.log(rev); 

//reverse of a number or string using while loop
// var str = prompt('Enter a string1');
// var len= str.length;
// rev1=' ';
//     while(len>=0)
//     {
//         rev1+=str[len];
//         console.log(rev1);
//         len--;
//     }
//     console.log(rev1)








//Program to count vowels and consonents
var a = prompt('enter a string')
str1=a.toLowerCase()
// n=strl.length
var vc=0;
var cc=0;
for(var i of str1)
    {
        if(i>='a' && i<='z' && !'aeiou'.includes(i))
            {
                cc++;
            }
        else{
            vc++;
        }    
    }
console.log('vowels:'+vc,'consonests:'+cc)
var cost=500;    
var str2= `the cost of item is ${cost}`
console.log(str2)