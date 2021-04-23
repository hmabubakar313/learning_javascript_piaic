var a="The quick brown fox jumps over the lazy dog";
document.write("Your String is : "+a);
x= (a.match(/The/gi) || []).length;
document.write("\n");
document.write("the word is present in the list : "+x+" times\n");