var a=["red","green","Blue","black"];
for (var i=0;i<4;i++)
{
    document.write(a);
    break;
    
}
document.write("<br>");
document.write("after updating your list is : ");
document.write("<br>");
var color=prompt("Enter the color you want to add at the start of the ");
a.unshift(color);
for (var i=0;i<5;i++)
{
    document.write(a);
    break;
}
document.write("<br>");
document.write("after updating your list is : ");
document.write("<br>");
var color=prompt("Enter the color you want to add at the end of the ");
a.push(color);
for (var i=0;i<5;i++)
{
    document.write(a);
    break;
}
document.write("<br>");
document.write("after updating your list is : ");
document.write("<br>");
var n=parseInt(prompt("enter number of you want to add in the list"));
for(var i=0;i<n;i++)
{
    var color=prompt("Enter the color you want to add at the start of the ");
    a.unshift(color);
}
for (var i=0;i<5;i++)
{
    document.write(a);
    break;
}

document.write("<br>");
document.write("after deleting first elemnt /updating your list is : ");
document.write("<br>");
a.shift();


document.write("<br>");
document.write("after deleting last elemnt /updating your list is : ");
document.write("<br>");
a.pop();


for (var i=0;i<5;i++)
{
    document.write(a);
    break;

}
document.write("<br>");
var n=(prompt("At whihc index you want to insert color"));

var n=(prompt("At whihc index you want to insert color"));
a.unshift(n);
for (var i=0;i<5;i++)
{
    document.write(a);
    break;

}

document.write("<br>");
var n=(prompt("At whihc index you want to delete color"));


a.shift(n);
for (var i=0;i<5;i++)
{
    document.write(a);
    break;

}
