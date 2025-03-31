let pass="Hkum97@";
let uc=0,lc=0,num=0,spc=0;
if(pass.length>=8)
{
for(let i=0;i<pass.length;i++)
{
let v=pass.charCodeAt(i);
if(v>=65&&v<=90)
uc++;
else if(v>=97&&v<=122)
lc++;
else if(v>=48&&v<=57)
num++;
else if(pass[i]=='<'||pass[i]=='>')
{
console.log("Password is Invalid");
break;
}
else
spc++;
}
if(uc>0&&lc>0&&spc>0)
console.log("Password is valid");
else
console.log("Password is invalid");
}
else
console.log("Password is invalid");