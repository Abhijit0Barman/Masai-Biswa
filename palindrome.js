let str="mada";
let rev="";
for(let a=str.length-1;a>=0;a--)
{
    rev+=str[a]
}
if(rev==str)
{
    console.log(str,"is a Plaindrome")
}
else{
    console.log(str,"is not a palindrome")
}