<script>

import  Tone from "tone";
import octicons from 'octicons';

// NOTE   Using “pitch-octave” notation: A A# B C C# D D# E F F# G

Tone.Transport.bpm.value = 85; // ramp the bpm to 120 over 10 seconds Tone.Transport.bpm.rampTo(120, 10);
let playing = false;

let highDefinition = true;
let useReverb = false;

async function play(){
  await make();
  //play a middle 'C' for the duration of an 8th note
  // A A# B C C# D D# E F F# G
    //synth.triggerAttackRelease("A4", "8n");

    Tone.Transport.loop = true;

    Tone.Transport.loopStart = '0m';
    Tone.Transport.loopEnd = '42m';

    Tone.Transport.start(); //start the transport in one second starting at beginning of the 5th measure: Tone.Transport.start("+1", "4:0:0");
    //  Tone.Transport.position =  '8:0:0';
    playing = true;
}
async function stop(){
  //play a middle 'C' for the duration of an 8th note
  // A A# B C C# D D# E F F# G
    //synth.triggerAttackRelease("A4", "8n");
    Tone.Transport.stop(); //start the transport in one second starting at beginning of the 5th measure: Tone.Transport.start("+1", "4:0:0");
    playing = false;
}



async function make(){
  Tone.Transport.stop();
  Tone.Transport.cancel();
  playing = false;

  const master = Tone.Master;
  let target = master;

  if(useReverb){
    const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).connect(master);
    //reverb.wet.value = 0.2;
    await reverb.generate();
    target = reverb;
  }

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

  const membrane = new Tone.MembraneSynth().connect(target);
  membrane.volume.value = -7;
  const music = new Tone.Sequence(function(time, note){
    membrane.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1","A1","A1","A1"]); //subdivisions are given as subarrays
  music.start(0)
  music.stop('8m');
}


if(1){
  // Membrane Background Beat

  const instrument = new Tone.PluckSynth({ // Karplus-String string synthesis. Often out of tune. Will change when the AudioWorkerNode is available across browsers.

    attackNoise : 1 ,
    dampening : 2000 ,
    resonance : 0.1
  }).connect(target);
  instrument.volume.value = -6;
  const music = new Tone.Sequence(function(time, note){
    instrument.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, ['A1', ["A1","D4"]]); //subdivisions are given as subarrays
  music.start(0)
  music.stop('8m');
}




if(1){
  // background beat

  const instrument = new Tone.AMSynth().connect(target);
  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1","B1"]); //subdivisions are given as subarrays
  music.start(0)
  music.stop('8m');
}

if(1){
  // background melody


  const instrument = new Tone.AMSynth().connect(target);

  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
  }, ["C3", ["E3", "D3", "E3", "G3"], "C3", "C3", ["C3","D3","C3","D3"]]); //subdivisions are given as subarrays
  music.start('1m');
  music.stop('7m');
}






// Second Movement 8m - 16

if(1){
  // Membrane Background Beat

  const membrane = new Tone.MembraneSynth().connect(target);
  membrane.volume.value = -8;
  const music = new Tone.Sequence(function(time, note){
    membrane.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1", ["A1","A1"], "A1", "A1"]); //subdivisions are given as subarrays
  music.start('8m')
  music.stop('32m');
}

if(1){
  // Membrane Background Beat

  const instrument = new Tone.PluckSynth({
    attackNoise : 1 ,
    dampening : 2000 ,
    resonance : 0.1
  }).connect(target);

  instrument.volume.value = -7;
  const music = new Tone.Sequence(function(time, note){
    instrument.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, [["A1","B1"],["A1", "A1","G1","G1"]]); //subdivisions are given as subarrays
  music.start('8m')
  music.stop('32m');
}

if(1){
  // background beat

  const instrument = new Tone.AMSynth().connect(target);

  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
}, ["A2","B2"]); //subdivisions are given as subarrays
music.start('8m')
music.stop('32m');
}

if(1){
  const tremolo = new Tone.Tremolo({
    frequency : 2 ,
    type : 'sine' ,
    depth : 0.7 ,
    spread : 180
  }).connect(target).start();

  const instrument = new Tone.FMSynth(
    {
        "harmonicity": 0.5,
        "modulationIndex": 1.2,
        "oscillator": {
            "type": "fmsawtooth",
            "modulationType" : "sine",
            "modulationIndex" : 20,
            "harmonicity" : 3
        },
        "envelope": {
            "attack": 0.05,
            "decay": 0.3,
            "sustain": 0.1,
            "release": 1.2
        },
        "modulation" : {
            "volume" : 0,
            "type": "triangle"
        },
        "modulationEnvelope" : {
            "attack": 0.35,
            "decay": 0.1,
            "sustain": 1,
            "release": 0.01
        }
    }
  ).connect(tremolo);

  // instrument.portamento = 0.12;
   instrument.volume.value = 9;

  const music = new Tone.Pattern(function(time, note){ //the order of the notes passed in depends on the pattern
    instrument.triggerAttackRelease(note, '16n');
  }, ["A4", "B2", "C4", "D3" , "D4", "E4", "F4", "G4"  ], "randomWalk");

  music.interval = '16n';
  music.probability = 1;
  music.start('8m')
  music.stop('18m');
}
if(1){
  const tremolo = new Tone.Tremolo({
    frequency : 2 ,
    type : 'sine' ,
    depth : 0.7 ,
    spread : 180
  }).connect(target).start();

  const instrument = new Tone.FMSynth(
    {
        "harmonicity": 3.01,
        "modulationIndex": 14,
        "oscillator": {
            "type": "triangle"
        },
        "envelope": {
            "attack": 0.2,
            "decay": 0.6,
            "sustain": 0.5,
            "release": 1.2
        },
        "modulation" : {
            "type": "square"
        },
        "modulationEnvelope" : {
            "attack": 0.01,
            "decay": 0.5,
            "sustain": 0.2,
            "release": 0.1
        }
    }
  ).connect(tremolo);

  // instrument.portamento = 0.12;
   instrument.volume.value = 9;

  const music = new Tone.Pattern(function(time, note){ //the order of the notes passed in depends on the pattern
    instrument.triggerAttackRelease(note, 6);
  }, ["A2", "B2", "C2", "D2" ], "randomWalk");

  music.interval = '4n';
  music.probability = 1;
  music.start('16m')
  music.stop('22m');
}
if(1){
  // const tremolo = new Tone.Tremolo({
  //   frequency : 2 ,
  //   type : 'sine' ,
  //   depth : 0.7 ,
  //   spread : 180
  // }).connect(target).start();

  const instrument = new Tone.Synth(
    {
        "oscillator": {
            "type": "sine"
        },
        "envelope": {
            "attack": 0.001,
            "decay": 0.1,
            "sustain": 0.1,
            "release": 1.2
        }
    }
  ).connect(target);

  // instrument.portamento = 0.12;
   instrument.volume.value = -2;

  const music = new Tone.Pattern(function(time, note){ //the order of the notes passed in depends on the pattern
    instrument.triggerAttackRelease(note, '16n');
  }, [  "A3", "B3", "C3", "D3",    "A4", "B4", "C4", "D4"    ], "randomWalk");

  music.interval = '16n';
  music.probability = 1;
  music.start('20m')
  music.stop('32m');
}







// THIRD Movement

if(1){
  // Membrane Background Beat

  const membrane = new Tone.MembraneSynth().connect(target);
  membrane.volume.value = -7;
  const music = new Tone.Sequence(function(time, note){
    membrane.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, ["A1", ["A1","A1"], "A1", ["A1",,"B1","A1"]]); //subdivisions are given as subarrays
  music.start('32m')
  music.stop('40m');
}
if(1){
  // Membrane Background Beat

  const instrument = new Tone.PluckSynth({
    attackNoise : 1 ,
    dampening : 2000 ,
    resonance : 0.1
  }).connect(target);

  instrument.volume.value = -7;
  const music = new Tone.Sequence(function(time, note){
    instrument.triggerAttackRelease(note, "4n", time);
    //instrument.triggerAttackRelease(note, "8n", time);
  }, [["A1","B1"],["A1", "A1"],["A1",]]); //subdivisions are given as subarrays
  music.start('32m')
  music.stop('40m');
}


if(1){
  // background beat

  const instrument = new Tone.AMSynth().connect(target);
  var music = new Tone.Sequence(function(time, note){
  instrument.triggerAttackRelease(note, "8n", time);
}, ["A1","B1","C2"]); //subdivisions are given as subarrays
  music.start('32m')
  music.stop('40m');
}

if(1){

  const instrument = new Tone.AMSynth().connect(target);
  const music = new Tone.Pattern(function(time, note){ //the order of the notes passed in depends on the pattern
    instrument.triggerAttackRelease(note, '8n');
  }, ["A#4", "C#4", "D#4", "F#4"], "randomWalk");
  music.interval = '8n';
  music.probability = 1;
  music.start('32m')
  music.stop('40m');
}




}

async function main(){
   // await make();
   // play();
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

      <div class="col px-5">

          <img src="album-covers/poor-fellows.jpg" class="img-fluid img-thumbnail bg-secondary border-info" alt="Responsive image">

      </div>

      </div>

      <div class="row">


      <div class="col py-3 small">
        <a href="http://www.scp-wiki.net/" rel="noopener noreferrer" target="_blank">SCP Foundation</a> report on
        <a href="http://www.scp-wiki.net/scp-2050" rel="noopener noreferrer" target="_blank">Sciurine Monastic Brotherhood of Poor-Fellows and Crusader Knights</a>.
      </div>


    </div>

      <div class="row">


      <div class="col">
      <audio controls class="w-100">
       <source src="sciurine.mp3" type="audio/mpeg">
     Your browser does not support the audio element.
     </audio>
      </div>


    </div>

    <div class="row">

      <div class="col-5">

        <button class="m-0 btn btn-secondary btn-block w-100 btn-sm" style="display: none;" class:d-block='{playing}' on:click={stop}>{@html octicons.mute.toSVG({ "class": "fill-black" })} Stop</button>

        {#if highDefinition}
          <button class="m-0 btn btn-primary btn-block w-100 btn-sm" style="display: none;" class:d-block='{!playing}' on:click={()=>{ useReverb=true; play() }}>{@html octicons.settings.toSVG({ "class": "fill-black" })} Generate HD Live</button>
        {:else}
          <button class="m-0 btn btn-secondary btn-block w-100 btn-sm" style="display: none;" class:d-block='{!playing}' on:click={()=>{ useReverb=false; play() }}>{@html octicons.settings.toSVG({ "class": "fill-black" })} Generate Live</button>
        {/if}

      </div>

      <div class="col-7">
        <div class="form-check pt-1">
          <input type="checkbox" class="form-check-input" id="customSwitch1" checked={highDefinition} on:click={()=>{ highDefinition=!highDefinition; useReverb=highDefinition; if(playing){play()}; }} >
          {#if highDefinition}
          <label class="form-check-label text-warning small" for="customSwitch1">High Definition Mode</label>
          {:else}
          <label class="form-check-label text-info small" for="customSwitch1">High Definition Mode</label>
          {/if}
        </div>
      </div>

    </div>

    <div class="row">


      <div class="col">

      <div class="small text-info pt-3" style="display: none;" class:d-block='{playing}'>
        Audio generation may not work on all mobile devices due to high CPU speed requirements.
          <span class="text-warning" style="display: none;" class:d-inline='{highDefinition}'>
          It is recommended that you use a Desktop Computer for high definition music.
          </span>
      </div>


    </div>


  </div>


</div>
</div>
