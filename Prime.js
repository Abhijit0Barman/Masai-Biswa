let limit=7;

let flag=0;

for(let i=2; i<=limit; i++)
{

    for(let j=2; j<=i/2; j++)
    {
        if(i%j==0)
        {
            flag++;
        }       
    }

    if(flag==0)
    {
        console.log(i);
    }
    else
    {
       flag=0;
    }
}
