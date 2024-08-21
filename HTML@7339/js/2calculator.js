function hema()
{
    let str=document.getElementById("input").value;
    let oper=0,result=0,result1=0;
    if(str.includes("+"))
    {
        oper="+";
        
    }
    else if(str.includes("-"))
    {
        oper="-";
    }
    else if(str.includes("*"))
    {
        oper="*";
    }
    else
    {
        oper="/";
    }
    switch (oper)
    {
        case '+':
            var vle1=Number(str.split("+")[0]);
            var vle2=Number(str.split("+")[1]);
            result=vle1+vle2;
            break
         case '-':
            var vle1=Number(str.split("-")[0]);
            var vle2=Number(str.split("-")[1]);
            result=vle1-vle2;
            break
         case '*':
            var vle1=Number(str.split("*")[0]);
            var vle2=Number(str.split("*")[1]);
            result=vle1*vle2;
            break
        case '/':
            var vle1=Number(str.split("/")[0]);
            var vle2=Number(str.split("/")[1]);
            result=vle1/vle2;  
            break        
    }
    result1=document.getElementById("result");
    result1.innerHTML=result;

}


