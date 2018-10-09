var chromaticScale = ["A", "AsBf", "B", "C", "CsDf", "D", "DsEf", "E", "F", "FsGf", "G", "GsAf"];
var octave = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


$("document").ready(function writeWhiteKeys() {

  for (var i = 0; i < chromaticScale.length; i++) {
    if (i < chromaticScale.length) {
      $(".keyboard").append(`<button value="${chromaticScale[i]}${octave[i]}" id="${chromaticScale[i]}${octave[i]}">${chromaticScale[i]}${octave[i]}</button>`);

      $("button[value*='s']").attr("style", "height: 125px; background-color: black; color: white; border: 1px black solid;");
    }



  }



var a1 = $("#A1");
var as2 = $("#AsBf2");
var b3 = $("#B3");
var c4 = $("#C4");
var cs5 = $("#CsDf5");
var d6 = $("#D6");
var ds7 = $("#DsEf7");
var e8 = $("#E8");
var f9 = $("#F9");
var fs10 = $("#FsGf10");
var g11 = $("#G11");
var gs12 = $("#GsAf12");

a1.on("click", function a1play() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A2", "8n");
});

as2.on("click", function as2play() {
  var synth =  new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A#2", "8n");
})

b3.on("click", function b3play() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("B3", "8n");
})

c4.on("click", function c4play() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("C4", "8n");
});

cs5.on("click", function cs4play() {
  var synth = new Tone.Synth().toMaster();

  synth.triggerAttackRelease("C#5", "8n");
});

d6.on("click", function d6play() {
  var synth = new Tone.Synth().toMaster();

  synth.triggerAttackRelease("d6", "8n");
});

e8.on("click", function e8play() {
  var synth = new Tone.Synth().toMaster();

  synth.triggerAttackRelease("e8", "8n");
});

f9.on("click", function f9play() {
  var synth = new Tone.Synth().toMaster();

  synth.triggerAttackRelease("f9", "8n");
});

g11.on("click", function g11play() {
  var synth = new Tone.Synth().toMaster();

  synth.triggerAttackRelease("g10", "1n");
})
  
});
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