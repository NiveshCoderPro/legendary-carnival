Webcam.set({
    width:350,
    height:240,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');


function capture_image() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'capture_image' src = "+data_uri+"/>"
    });
}
console.log("ml5.version",ml5.version);