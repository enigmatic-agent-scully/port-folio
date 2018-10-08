var chromaticScale = ["A", "AsBf", "B", "C", "CsDf", "D", "DsEf", "E", "F", "FsGf", "G", "GsAf"];
var octave = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


$("document").ready(function writeWhiteKeys() {

  for (var i = 0; i < octave.length; i++) {
    for (var j = 0; j < chromaticScale.length; j++) {

      $(".keyboard").append(`<button value="${chromaticScale[i]}${octave[j]}" id="${chromaticScale[i]}${octave[j]}">${chromaticScale[i]}${octave[j]}</button>`);

      
      // $("button[value*='s']") if attribute value contains "s", $(button).attr("style", "height: 125px; background-color: black; color: white; border: 1px black solid;"); 
    }
  }



});

// PIANO KEYS EXPERIMENT WORKING

// var c4 = $("#c4");
// var cs4 = $("#cs4");
// var d4 = $("#d4");
// var e4 = $("#e4");
// var f4 = $("#f4");
// var g4 = $("#g4");

// c4.addEventListener("click", function c4play() {
//   var synth = new Tone.Synth().toMaster();

//   synth.triggerAttackRelease("C4", "8n");
// });

// cs4.addEventListener("click", function cs4play() {
//   var synth = new Tone.Synth().toMaster();

//   synth.triggerAttackRelease("C#4", "8n");
// });

// d4.addEventListener("click", function d4play() {
//   var synth = new Tone.Synth().toMaster();

//   synth.triggerAttackRelease("d4", "8n");
// });

// e4.addEventListener("click", function e4play() {
//   var synth = new Tone.Synth().toMaster();

//   synth.triggerAttackRelease("e4", "8n");
// });

// f4.addEventListener("click", function f4play() {
//   var synth = new Tone.Synth().toMaster();

//   synth.triggerAttackRelease("f4", "8n");
// });

// CANVAS (RANDOM SQUARES) EXPERIMENT (NOT WORKING)
// var box = {
//   x: 0,
//   y: 0,
//   w: 0,
//   h: 0,
//   r: 0,
//   g: 0,
//   b: 0,
// };
// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');

// function getRndm(min, max) {
//   return Math.floor(Math.random() * (min - max) + max);
// };

// function draw() {
//   ctx.fillStyle = 'rgb(' + box.r + ',' + box.g + ',' + box.b + ')';
//   ctx.fillRect(box.x, box.y, box.w, box.h);
// };

// function update() {
//   box.x = getRndm(0, 500);

//   box.y = getRndm(0, 500);
//   box.w = getRndm(20, 65);
//   box.h = getRndm(20, 65);
//   box.r = getRndm(0, 255);
//   box.g = getRndm(0, 255);
//   box.b = getRndm(0, 255);
//   console.log(box);
// };

// function loop() {
//   update();
//   draw();
//   window.requestAnimationFrame(loop);
// };

// document.onload(loop());