function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JqjDjFSouA":
        Script1();
        break;
  }
}

function Script1()
{
  var p = GetPlayer();

var pTCs = [11, 13, 17, 24, 26, 29, 32, 33, 42, 45, 53, 59, 64, 66, 68, 72, 74, 78, 82, 90, 94, 95, 97, 105, 112, 117, 118, 122, 125];
var selected = [];

for (var i = 1 ; i < 126 ; i++){
  var tempName = "v" + i;
  console.log(tempName);
  var temp = p.GetVar(tempName);
  if (temp == true){
    selected.push(i);
  }
}
console.log(selected);
var numRight = 0;

var submits = selected.length;
for (var i = 0 ; i < submits ; i++){
  for (var j = 0; j < 29; j++){
     if (selected[i] == pTCs[j]){
        numRight = numRight +1
     }
     if (pTCs[j] > selected[i]){
       break;
     }
  }
}

var feedBack = p.GetVar("feedBack");
feedBack = "You selected " + numRight + " out of 29 paired-term concepts. You also made " + submits + " submissions.";

var feedBack1 = feedBack + "\n\nTo get better at identifying paired-term concepts, you should review the earlier slides. When you are ready, click the next arrow to continue on to identify the significant concepts within the text that you just skimmed.";

var aLot = feedBack + "\n\nRelative to the number you got right, you made a large number of submissions. To get better at identifying paired-term concepts, you should review the earlier slides. When you are ready, click the next arrow to continue on to identifying the significant concepts within the text that you just skimmed.";

var uGood = "Good job: " + feedBack  + "\n\nClick the next arrow to continue on to identify the significant concepts within the text that you just skimmed.";

var uGreat = "Excellent job! " + feedBack  + "\n\nClick the next arrow to continue on to identify the significant concepts within the text that you just skimmed.";


if (numRight < 20){
  feedBack =  feedBack1 
}

if (numRight > 19 && numRight < 25){
  if (submits > 40){
    feedBack = aLot;
  } else {
    feedBack = uGood ;
 }
}

if (numRight > 24){
  if (submits > 40){
    feedBack = aLot;
  } else {
    feedBack = uGreat;
 }
}
p.SetVar("feedBack", feedBack);
}

