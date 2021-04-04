

var b=prompt("Welcome to the ABC Bakkery! Enter your order Please!\n");
b=b.toLowerCase();
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
document.write("Your arrays is : "+a+"<br>");
document.write("<br>");
for(var i=0;i<=4;i++)
{
    // document.write(i);
    
    if (b===a[i])
    {
        // document.write(i);
       document.write("the "+a[i]+" is present at index "+i);
    break;
    } 
    else {
        alert("Sorry!");
    }
    // break;
}