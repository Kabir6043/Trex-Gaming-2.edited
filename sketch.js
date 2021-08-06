//var marks=[40, 35, 45, 38, 40]
var weight=[35,38,40,45]
function score_average(){
  //var sum= marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var sum= weight[0]+weight[1]+weight[2]+weight[3]
 // var avg=sum/marks.length
 var avg=sum/weight.length
console.log(avg)
}
function setup() {
  createCanvas(400, 400);
 // box=createSprite(200, 200, 30, 30)
 score_average()
}

function draw() 
{
  background("green");
 
}




