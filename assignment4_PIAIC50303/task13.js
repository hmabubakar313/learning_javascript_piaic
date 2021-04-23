var d=new Date();

document.getElementById("1").innerHTML=d;
var elapsed = Date.parse("April 15, 2021");
document.getElementById("2").innerHTML=("Elapsed time in 'millisecond' since January 1, 1970 : "+elapsed);
var startTime=new Date("January 1, 1970 00:13:00");
var endTime=new Date("April 16, 2014 00:45:00");
var timeDiff=endTime.getTime()-startTime.getTime();
timeDiff/=1000;
var seconds=Math.round(timeDiff);
document.write("time in 'seconds'  since 1970 is : "+seconds );