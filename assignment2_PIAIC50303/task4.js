var mark1=prompt("Enter marks for first Subjct1");
var mark2=prompt("Enter marks for first Subjct2");
var mark3=prompt("Enter marks for first Subjct3");
var percent=parseInt(mark1)+parseInt(mark2)+parseInt(mark3);

percent=parseFloat(percent*100)/300;

if(percent>=80 || percent <=90)
{
    document.getElementById("1").innerHTML=("Your percentage are "+percent);
    document.getElementById("1").innerHTML=("Your Grade is A+");
}
if(percent>=70 || percent <=80)
{
   
    document.getElementById("2").innerHTML=("Your percentage are "+percent);
    document.getElementById("2").innerHTML=("Your Grade is B+");
}
if(percent>=60 || percent <=70)
{
    document.getElementById("3").innerHTML=("Your percentage are "+percent);
    document.getElementById("3").innerHTML=("Your Grade is C+");
}
if(percent>=50 || percent <=60)

{
    document.getElementById("4").innerHTML=("Your percentage are "+percent);
    document.getElementById("4").innerHTML=("Repeat this subject to improve course");
}