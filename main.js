noseX=0;
noseY=0;
difference=0;
rWristX=0;
lWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(560,150) ;
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#FF7F50');
    document.getElementById("square_side").innerHTML = "Width And Height of Font will be = " + difference +"px";
    fill('#008080');
    stroke('#004c4c');
    text("Yash Mudgal",50,100)
}
function modelLoaded(){
console.log("PoseNet Is Initialised!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        lWristX=results[0].pose.leftWrist.x;
        rWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
}
