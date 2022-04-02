function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
}

function takeSanpshot(){
    save('MyClownFace.png');
}

function modelLoaded(){
    console.log('PoseNet is Initialised');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log("nose y = " + results[0].pose.nose.y);
        console.log("nose x = " + results[0].pose.nose.x);
    }
}