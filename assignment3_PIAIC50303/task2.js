var nameList = [];
var nam=[];
var score = [];
var marks=[];
for(var i=0;i<3;i++)
{
    
        var nam=prompt("Enter your Name: ");
        nameList.push(nam);
        var marks=prompt("Enter the score for  ")
        score.push(marks);
}

score[0]=score[0]*((100/500));
score[1]=score[1]*((100/500));
score[2]=score[2]*((100/500));
document.getElementById("1").innerHTML=("Your name is : "+nameList[0]+" your Score is = : "+score[0])
document.getElementById("2").innerHTML=("Your name is : "+nameList[0]+" your Score is = : "+score[0])
document.getElementById("3").innerHTML=("Your name is : "+nameList[0]+" your Score is = : "+score[0])  
// console.log("score  of 0th index "+Score[0]);
