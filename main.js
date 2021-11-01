Webcam.attach('#camara');
Webcam.set({
    width:320,
    height:240,
    image_format:'jpeg',
    jpeg_quality:90,
});
function dino(){
    Webcam.snap(function(a){
        document.getElementById("result").innerHTML='<img src="'+a+'"/>';
    });
}