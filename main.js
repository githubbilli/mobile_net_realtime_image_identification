function setup() {
  canvas = createCanvas(250, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function draw() {
  image(video,0,0,250,250);
  classifier.classify(video,gotResult);
}

function modelLoaded() {
  console.log("The model is loaded");
}

function gotResult(error,results) {
  if(error){
    console.error(error);
  }else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}