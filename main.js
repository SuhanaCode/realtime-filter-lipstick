function preload(){

}

function setup(){
  canvas = createCanvas(350 , 350);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300 , 300);
  video.hide();

  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('poses' , gotPoses);
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    console.log("Nose X =" + results[0].pose.nose.x);
    console.log("Nose X =" + Results[0].pose.nose.y);
  }
  }

function modelLoaded(){
  console.log("PoseNet is Intilized.");
}

  function draw(){
    image(video , 0 , 0 , 350 , 350);
  }

  function take_snapshot(){
    save('hereFilter.png')
  }
