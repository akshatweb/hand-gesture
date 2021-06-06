var camera=document.getElementById("camera");
Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:90
});
Webcam.attach(camera);

function takephoto(){
    Webcam.snap(function(data_uri){
    document.getElementById("selfie").innerHTML='<img id="takenselfie" src="'+data_uri+'"/>';
    });
}
console.log("ml5version",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PApUJLAQP/model.json",modelLoaded);
function modelLoaded(){
console.log("modelLoaded");
}

var prediction1="";


function prediction(){
    var synthesis=window.speechSynthesis;
    var speech1="prediction                             is                             "+prediction1;
    var newsynthesis=new SpeechSynthesisUtterance(speech1);
    synthesis.speak(newsynthesis);
    
    
  
    }

    function check(){
        var img=document.getElementById("takenselfie");
        classifier.classify(img,gotresult);
        
    }

function gotresult(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
   
    prediction1=results[0].label;
    
    prediction();
    
    if (prediction1=="perfecto"){
     document.getElementById("update_emoji").innerHTML="&#128076;";   
    }
    if (prediction1=="thumbs up"){
        document.getElementById("update_emoji").innerHTML="&#128077;";   
       }
       if (prediction1=="cheese"){
        document.getElementById("update_emoji").innerHTML="&#9996;";   
       }


}
}


