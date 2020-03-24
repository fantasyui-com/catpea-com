<script>

import  Tone from "tone";
import octicons from 'octicons';

// DYNAMIC VARIABLES
let playing = false;
let highDefinition = true;
let useMasterReverb = true;
let songBpm = 95;

// Random walks: down, upDown, downUp, alternateUp, alternateDown, randomWalk, randomOnce

async function make(){

  Tone.Transport.stop();
  Tone.Transport.cancel();

  const master = Tone.Master;
  let target = master;

  if(useMasterReverb){
    const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).connect(master);
    reverb.wet.value = 0.2;
    await reverb.generate();
    target = reverb;
  }

  let movement = -1;
  const movements = [

    {start:'0m',stop:'16m',},
    {start:'16m',stop:'32m',},
    {start:'32m',stop:'48m',},
    {start:'48m',stop:'64m',},

  ]





  ////////////////
  // NEXT MOVEMENT
  movement++;
  ////////////////

  if(1){
    // NOTE: THis is the hat
    const instrument = new Tone.PluckSynth({ // Karplus-String string synthesis. Often out of tune. Will change when the AudioWorkerNode is available across browsers.
      attackNoise : 1 ,
      dampening : 2000 ,
      resonance : 0.7
    }).connect(target);
    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, [["A1","B1","A1","A1"]]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }







  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);
    instrument.volume.value = -7;


    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["A1","B1",["A2","A2"],"A1","A1","A1","A1"]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }






  ////////////////
  // NEXT MOVEMENT
  movement++;
  ////////////////

  if(1){
    // NOTE: THis is the hat
    const instrument = new Tone.PluckSynth({ // Karplus-String string synthesis. Often out of tune. Will change when the AudioWorkerNode is available across browsers.
      attackNoise : 1 ,
      dampening : 2000 ,
      resonance : 0.8
    }).connect(target);
    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, [["A1","B1","A1","A1"]]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }

  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);

    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["12","A2",["A2","A2","A2","A2"],"A2"]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }





  ////////////////
  // NEXT MOVEMENT
  movement++;
  ////////////////

  if(1){
    // NOTE: THis is the hat
    const instrument = new Tone.PluckSynth({ // Karplus-String string synthesis. Often out of tune. Will change when the AudioWorkerNode is available across browsers.
      attackNoise : 1 ,
      dampening : 2000 ,
      resonance : 0.8
    }).connect(target);
    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, [["A1","B1","A1","A1"]]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }

  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);

    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["12","A2",["A2","A2","A2","A2"],"A2"]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }





  ////////////////
  // NEXT MOVEMENT
  movement++;
  ////////////////

  if(1){
    // NOTE: THis is the hat
    const instrument = new Tone.PluckSynth({ // Karplus-String string synthesis. Often out of tune. Will change when the AudioWorkerNode is available across browsers.
      attackNoise : 1 ,
      dampening : 2000 ,
      resonance : 0.8
    }).connect(target);
    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, [["A1","B1","A1","C1"]]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }

  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);

    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["12","A2",["C2","A3","A2","A2"],"A2"]); //subdivisions are given as subarrays
    music.start(movements[movement].start)
    music.stop(movements[movement].stop);
  }


















} // make










async function play(){

  // SETUP PRIOR TO MAKE
  Tone.Transport.bpm.value = songBpm; // ramp the bpm to 120 over 10 seconds Tone.Transport.bpm.rampTo(120, 10);

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
        <img src="album-covers/hash-bang-slash.png" class="img-fluid img-thumbnail bg-secondary border-info" alt="Responsive image">
      </div>
    </div>

    <div class="row">
      <div class="col py-3 small">
        <strong># ! /</strong> (Hash Bang Slash) is a new mico-genre invented at CATPEA during the 2020 plague.
        <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)" rel="noopener noreferrer" target="_blank">Hash Bang</a>
        is used by Programmers in UNIX. The Slash is used by Samurai in Battle. Album Photo by <a href="https://unsplash.com/photos/2fRPxsArdkc" rel="noopener noreferrer" target="_blank">soosang</a>.
        <!-- You can  <a href="hash-bang-slash.png.mp3" rel="noopener noreferrer" target="_blank">download</a> the song as well. -->
      </div>
    </div>

    <!--
    <div class="row">
      <div class="col">
        <audio controls class="w-100">
          <source src="hash-bang-slash.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    -->

    <div class="row">
      <div class="col">
        <button class="m-0 btn btn-secondary btn-sm" style="display: none;" class:d-block='{!playing}' on:click={play}>{@html octicons.play.toSVG({ "class": "fill-black" })} Play</button>
        <button class="m-0 btn btn-secondary btn-sm" style="display: none;" class:d-block='{playing}' on:click={stop}>{@html octicons.mute.toSVG({ "class": "fill-black" })} Stop</button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="small text-info pt-3" style="display: none;" class:d-block='{playing}'>
          Audio generation may not work on all mobile devices due to high CPU speed requirements.
          Please use a desktop computer for high definition music composition in the browser.
        </div>
      </div>
    </div>

  </div>
</div>
