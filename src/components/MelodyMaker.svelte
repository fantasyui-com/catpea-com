<script>

import  Tone from "tone";
import octicons from 'octicons';

// NOTE   Using “pitch-octave” notation: A A# B C C# D D# E F F# G

Tone.Transport.bpm.value = 85; // ramp the bpm to 120 over 10 seconds Tone.Transport.bpm.rampTo(120, 10);
let playing = false;

function play(){

  //play a middle 'C' for the duration of an 8th note
  // A A# B C C# D D# E F F# G
    //synth.triggerAttackRelease("A4", "8n");

    Tone.Transport.loop = true;

    Tone.Transport.loopStart = '0m';
    Tone.Transport.loopEnd = '24m';

    Tone.Transport.start(); //start the transport in one second starting at beginning of the 5th measure: Tone.Transport.start("+1", "4:0:0");
}
function stop(){
  //play a middle 'C' for the duration of an 8th note
  // A A# B C C# D D# E F F# G
    //synth.triggerAttackRelease("A4", "8n");
    Tone.Transport.stop(); //start the transport in one second starting at beginning of the 5th measure: Tone.Transport.start("+1", "4:0:0");
}


async function main(){


//create a synth and connect it to the master output (your speakers)

const synth0 = new Tone.AMSynth().toMaster();
synth0.volume.value = -7; //  0 decibels means no change in volume. -10db is approximately half as loud and 10db is twice is loud.

const synth2 = new Tone.AMSynth().toMaster();
const synth3 = new Tone.AMSynth().toMaster();

// down
// upDown
// downUp
// alternateUp
// alternateDown
// randomWalk
// randomOnce
//synth.bpm = 160;


//
//

// First Movement

if(1){
  // Membrane Background Beat
  const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const membrane = new Tone.MembraneSynth().connect(reverb);
  membrane.volume.value = -7;
  const music = new Tone.Sequence(function(time, note){
    membrane.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1","A1","A1","A1"]); //subdivisions are given as subarrays
  music.start(0)
  music.stop('8m');
}

if(1){
  // background beat
  const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const instrument = new Tone.AMSynth().connect(reverb);
  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1","B1"]); //subdivisions are given as subarrays
  music.start(0)
  music.stop('8m');
}

if(1){
  // background melody
  const reverb = new Tone.Reverb( {decay : 1.0 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const instrument = new Tone.AMSynth().connect(reverb);
  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
  }, ["C3", ["E3", "D3", "E3", "G3"], "C3", "C3", ["C3","D3","C3","D3"]]); //subdivisions are given as subarrays
  music.start('1m');
  music.stop('7m');
}






// Second Movement 8m - 16

if(1){
  // Membrane Background Beat
  const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const membrane = new Tone.MembraneSynth().connect(reverb);
  membrane.volume.value = -8;
  const music = new Tone.Sequence(function(time, note){
    membrane.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1", ["A1","A1"], "A1", "A1"]); //subdivisions are given as subarrays
  music.start('8m')
  music.stop('16m');
}

if(1){
  // background beat
  const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const instrument = new Tone.AMSynth().connect(reverb);
  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
}, ["A2","B2"]); //subdivisions are given as subarrays
  music.start('8m')
  music.stop('16m');
}

if(1){
  const reverb = new Tone.Reverb( {decay : 1.0 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const instrument = new Tone.AMSynth().connect(reverb);

  const music = new Tone.Pattern(function(time, note){ //the order of the notes passed in depends on the pattern
    instrument.triggerAttackRelease(note, '8n');
  }, ["A4", "B4", "C4", "D4", "E4", "F4", "G4"], "randomWalk");
  music.interval = '8n';
  music.probability = .95;
  music.start('8m')
  music.stop('16m');
}







// THIRD Movement

if(1){
  // Membrane Background Beat
  const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const membrane = new Tone.MembraneSynth().connect(reverb);
  membrane.volume.value = -7;
  const music = new Tone.Sequence(function(time, note){
    membrane.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1", ["A1","A1"], "A1", ["A1",,"B1","A1"]]); //subdivisions are given as subarrays
  music.start('16m')
  music.stop('22m');
}


if(1){
  // background beat
  const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const instrument = new Tone.AMSynth().connect(reverb);
  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
}, ["A1","B1","C2"]); //subdivisions are given as subarrays
  music.start('16m')
  music.stop('24m');
}

if(1){
  const reverb = new Tone.Reverb( {decay : 1.0 , preDelay : 0.01 }).toMaster();
  await reverb.generate();
  const instrument = new Tone.AMSynth().connect(reverb);
  const music = new Tone.Pattern(function(time, note){ //the order of the notes passed in depends on the pattern
    instrument.triggerAttackRelease(note, '8n');
  }, ["A#4", "C#4", "D#4", "F#4"], "randomWalk");
  music.interval = '8n';
  music.probability = 1;
  music.start('16m')
  music.stop('20m');
}


Tone.Transport.on("start", () => {
playing = !playing;
});

Tone.Transport.on("stop", () => {
playing = !playing;
});

  //play();
}

main();

</script>

<style>

</style>

<div class="card text-white bg-dark shadow">

  <div class="card-header">
    New Album Release!
  </div>

  <div class="card-body">


    <div class="row">

      <div class="col text-muted small">

        <img src="album-covers/poor-fellows.jpg" class="img-fluid img-thumbnail bg-secondary border-info" alt="Responsive image">
        <p class="pt-3">
          <a href="http://www.scp-wiki.net/" rel="noopener noreferrer" target="_blank">SCP Foundation</a> report on
          <a href="http://www.scp-wiki.net/scp-2050" rel="noopener noreferrer" target="_blank">Sciurine Monastic Brotherhood of Poor-Fellows and Crusader Knights</a>.
        </p>

      </div>


    </div>

    <div class="row">

      <div class="col p-3">

        <button  class="btn btn-secondary btn-sm" style="display: none;" class:d-block='{!playing}' on:click={play}>{@html octicons.play.toSVG({ "class": "fill-black" })} Play Album Sample</button>
        <button class="btn btn-secondary btn-sm" style="display: none;" class:d-block='{playing}' on:click={stop}>Stop</button>


        <div class="small text-info" style="display: none;" class:d-inline='{playing}'>
          CPU Requirement Notice:
          Dynamic music generation comes with high CPU speed requirements.
          Audio generation may not work on all mobile devices. Use your Desktop Computer for live music experiments.
        </div>


    </div>


  </div>


</div>
</div>
