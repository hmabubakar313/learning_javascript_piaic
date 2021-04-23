var a=prompt("Enter your password");
// document.write(a);
if(a.match(/[a-z]/g)&&  a.match(/[A-Z]/g) && a.match(
    /[0-9]/g) && a.match(/[^a-zA-Z\d]/g) && a.match(/[^!~`@#$%^&*()?><{}":\d]/g) && a.length >=8)
{
    
       alert("Your password is Strong");
}
else
{
    alert("your Password isn't Strong");
}
    
