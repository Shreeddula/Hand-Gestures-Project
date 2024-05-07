Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='captureImage'>";
    });
}

console.log("ml5 version : ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Rri-ilatd/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}
var prediction1="";
var prediction2="";

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is " + prediction1;
    speakdata2=" and the second prediction is " + prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}