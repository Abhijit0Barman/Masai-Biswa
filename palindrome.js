let str="112211";
let reb="";
for(let a=str.length-1;a>=0;a--)
{
    reb+=str[a];
}
if(reb===str)
{
    console.log(str,"is a Plaindrome");
}