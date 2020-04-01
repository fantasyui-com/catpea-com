<script>

import  Tone from "tone";
import octicons from 'octicons';

import sampler from '../devices/sampler.js';


const movements = [

  {
    start:0,
    stop:16,
  },

  {
    start:16,
    stop:32,
  },

  {
    start:32,
    stop:48,
  },

  {
    start:48,
    stop:64,
  },

]

// DYNAMIC VARIABLES
let playing = false;
let highDefinition = true;
let useMasterReverb = true;
let songBpm = 95;

// Random walks: down, upDown, downUp, alternateUp, alternateDown, randomWalk, randomOnce

let piano = null;
let rza = null;

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



  if(1){
    const music = new Tone.Sequence(function(time, note){
      rza.triggerAttackRelease(note, '4n');
    }, ["A6",["B6","C6"], "A6"]); //subdivisions are given as subarrays
    music.start(movements[0].start + 5 + 'm')
    music.stop(movements[movements.length-1].stop + 'm');
  }

  if(1){
    const music = new Tone.Sequence(function(time, note){
      rza.triggerAttackRelease(note, '4n');
    }, [ "A5", "B5", "B6","B6"]); //subdivisions are given as subarrays
    music.start(movements[0].start + 10 + 'm')
    music.stop(movements[movements.length-1].stop + 'm');
  }



  if(1){
    const music = new Tone.Sequence(function(time, note){
      rza.triggerAttackRelease(note, '2n');
    }, [ "B2", "A6","A6","A6","A6","C2"]); //subdivisions are given as subarrays
    music.start(movements[0].start + 15 + 'm')
    music.stop(movements[movements.length-1].stop + 'm');
  }





  if(1){
    const music = new Tone.Pattern(function(time, note){
      rza.triggerAttackRelease(note, '2n');
    }, ["C2", "D4", "E5", "A6"], "upDown");

    music.start(movements[0].start + 25 + 'm')
    music.stop(movements[movements.length-1].stop + 'm');
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
      resonance : 0.7
    }).connect(target);
    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, [["A1","B1","A1","A1"]]); //subdivisions are given as subarrays
    music.start(movements[movement].start + 'm')
    music.stop(movements[movement].stop + 'm');
  }







  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);
    instrument.volume.value = -7;


    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["A1","B1",["A2","A2"],"A1","A1","A1","A1"]); //subdivisions are given as subarrays
    music.start(movements[movement].start + 'm')
    music.stop(movements[movement].stop + 'm');
  }



  //
  // if(1){
  //
  //
  //   // const music = new Tone.Pattern(function(time, note){ //the order of the notes passed in depends on the pattern
  //   //   piano.triggerAttackRelease(note, '4n');
  //   // }, ["A2", "B2", "C2", "D2", "E2", "F2", "G2" ], "alternateUp");
  //
  //   // up
  //   // down
  //   // upDown
  //   // downUp
  //   // alternateUp
  //   // alternateDown
  //   // randomWalk
  //   // randomOnce
  //
  //   // music.start(movements[movement].startPiano)
  //   // music.stop(movements[movement].stopPiano);
  // }
  //


  // if(1){
  //   const music = new Tone.Sequence(function(time, note){
  //     piano.triggerAttackRelease(note, '4n');
  //   }, [["C1","C1","C1","C1"]]); //subdivisions are given as subarrays
  //   music.start(movements[movement].start + 'm')
  //   music.stop(movements[movement].stop + 'm');
  // }

  //
  // if(1){
  //   const music = new Tone.Sequence(function(time, note){
  //     rza.triggerAttackRelease(note, '4n');
  //   }, ["A6",["B6","C6"], "A6"]); //subdivisions are given as subarrays
  //   music.start(movements[movement].start + 'm')
  //   music.stop(movements[movement].stop + 'm');
  // }
  //
  // if(1){
  //   const music = new Tone.Sequence(function(time, note){
  //     rza.triggerAttackRelease(note, '4n');
  //   }, ["D6",["E6","F6"], "G6"]); //subdivisions are given as subarrays
  //   music.start(movements[movement].start + 'm')
  //   music.stop(movements[movement].stop + 'm');
  // }



















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
    music.start(movements[movement].start + 'm')
    music.stop(movements[movement].stop + 'm');
  }

  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);

    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["12","A2",["A2","A2","A2","A2"],"A2"]); //subdivisions are given as subarrays
    music.start(movements[movement].start + 'm')
    music.stop(movements[movement].stop + 'm');
  }

    //
    // if(1){
    //   const music = new Tone.Sequence(function(time, note){
    //     rza.triggerAttackRelease(note, '4n');
    //   }, ["A3",["B3","C3"], "A3"]); //subdivisions are given as subarrays
    //   music.start(movements[movement].start + 'm')
    //   music.stop(movements[movement].stop + 'm');
    // }
    //
    // if(1){
    //   const music = new Tone.Sequence(function(time, note){
    //     rza.triggerAttackRelease(note, '4n');
    //   }, ["A4",["B4","C4"], "A4"]); //subdivisions are given as subarrays
    //   music.start(movements[movement].start + 'm')
    //   music.stop(movements[movement].stop + 'm');
    // }
    //
    //










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
    music.start(movements[movement].start + 'm')
    music.stop(movements[movement].stop + 'm');
  }

  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);

    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["12","A2",["A2","A2","A2","A2"],"A2"]); //subdivisions are given as subarrays
    music.start(movements[movement].startPiano)
    music.stop(movements[movement].stopPiano);
  }

  // if(1){
  //   const music = new Tone.Sequence(function(time, note){
  //     rza.triggerAttackRelease(note, '4n');
  //   }, ["A5",["B5","C5"], "A5"]); //subdivisions are given as subarrays
  //   music.start(movements[movement].start + 'm')
  //   music.stop(movements[movement].stop + 'm');
  // }
  //
  // if(1){
  //   const music = new Tone.Sequence(function(time, note){
  //     rza.triggerAttackRelease(note, '4n');
  //   }, ["C4",["D4","E4"], "F4"]); //subdivisions are given as subarrays
  //   music.start(movements[movement].start + 'm')
  //   music.stop(movements[movement].stop + 'm');
  // }
  //
  //













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
    music.start(movements[movement].start + 'm')
    music.stop(movements[movement].stop + 'm');
  }

  if(1){
    // NOTE: THis is the Membrane Background Beat
    const instrument = new Tone.MembraneSynth().connect(target);

    instrument.volume.value = -7;

    const music = new Tone.Sequence(function(time, note){
      instrument.triggerAttackRelease(note, "4n", time);
    }, ["12","A2",["C2","A3","A2","A2"],"A2"]); //subdivisions are given as subarrays
    music.start(movements[movement].start + 'm')
    music.stop(movements[movement].stop + 'm');
  }


  // if(1){
  //   const music = new Tone.Sequence(function(time, note){
  //     rza.triggerAttackRelease(note, '4n');
  //   }, ["A6",["B6","C6"], "A6"]); //subdivisions are given as subarrays
  //   music.start(movements[movement].start + 'm')
  //   music.stop(movements[movement].stop + 'm');
  // }
  //














} // make










async function loadPiano(){

  return new Promise( function(resolve, reject) {


    piano = new Tone.Sampler({
        "A0" : "A0.[mp3|ogg]",
        "C1" : "C1.[mp3|ogg]",
        "D#1" : "Ds1.[mp3|ogg]",
        "F#1" : "Fs1.[mp3|ogg]",
        "A1" : "A1.[mp3|ogg]",
        "C2" : "C2.[mp3|ogg]",
        "D#2" : "Ds2.[mp3|ogg]",
        "F#2" : "Fs2.[mp3|ogg]",
        "A2" : "A2.[mp3|ogg]",
        "C3" : "C3.[mp3|ogg]",
        "D#3" : "Ds3.[mp3|ogg]",
        "F#3" : "Fs3.[mp3|ogg]",
        "A3" : "A3.[mp3|ogg]",
        "C4" : "C4.[mp3|ogg]",
        "D#4" : "Ds4.[mp3|ogg]",
        "F#4" : "Fs4.[mp3|ogg]",
        "A4" : "A4.[mp3|ogg]",
        "C5" : "C5.[mp3|ogg]",
        "D#5" : "Ds5.[mp3|ogg]",
        "F#5" : "Fs5.[mp3|ogg]",
        "A5" : "A5.[mp3|ogg]",
        "C6" : "C6.[mp3|ogg]",
        "D#6" : "Ds6.[mp3|ogg]",
        "F#6" : "Fs6.[mp3|ogg]",
        "A6" : "A6.[mp3|ogg]",
        "C7" : "C7.[mp3|ogg]",
        "D#7" : "Ds7.[mp3|ogg]",
        "F#7" : "Fs7.[mp3|ogg]",
        "A7" : "A7.[mp3|ogg]",
        "C8" : "C8.[mp3|ogg]"
      }, {
        "release" : 1,
        "baseUrl" : "./samples/salamander/",
        onload: () => {
         resolve();
        },
      }).toMaster();



  });

}





async function play(){

  // SETUP PRIOR TO MAKE
  await loadPiano();
  rza = await sampler('shebang');


  Tone.Transport.bpm.value = songBpm; // ramp the bpm to 120 over 10 seconds Tone.Transport.bpm.rampTo(120, 10);
  await make();
  //play a middle 'C' for the duration of an 8th note
  // A A# B C C# D D# E F F# G
    //synth.triggerAttackRelease("A4", "8n");

    Tone.Transport.loop = true;
    Tone.Transport.loopStart = '0m';
    Tone.Transport.loopEnd = movements[movements.length-1].stop + 2 + 'm';

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
  // await play();
   // play();
}

main();

</script>

<style>

</style>

<div class="card text-white bg-dark shadow">

  <div class="card-header">
    New Single Release!
  </div>

  <div class="card-body">

    <div class="row">
      <div class="col px-5">
        <img src="album-covers/hash-bang-slash.png" class="img-fluid img-thumbnail bg-secondary border-info" alt="Responsive image">
      </div>
    </div>

    <div class="row">
      <div class="col py-3 small">
        <strong>#!/</strong> (Shebang Slash) is a new mico-genre invented at CATPEA during the 2020 pandemic.
        <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)" rel="noopener noreferrer" target="_blank">Shebang</a>
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
