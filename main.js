function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,520);
    canvas.position(560,160);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is intialized');
}

function draw(){
    background('#d477d4')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

