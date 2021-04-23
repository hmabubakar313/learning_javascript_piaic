var a=prompt("Enter your E-mail");
var regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
if (a.match(regexEmail))
{
    alert("valid");
}
else
{
    alert("Invalid");
}