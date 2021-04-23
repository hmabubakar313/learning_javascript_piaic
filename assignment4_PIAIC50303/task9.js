var str="<p><strong><em>Only Print This </em></strong></p>";
document.write("Your String Is : "+str);
var newStr=str.replace(/<[^>]+>/g,"");
document.write("Your new String IS  : "+newStr)