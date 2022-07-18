img="";
var status="";

function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status : object detecting";
}
function draw(){
image(img,0,0,640,420);

}
function modelLoaded(){
console.log('model loaded');
status=true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results);
}
}