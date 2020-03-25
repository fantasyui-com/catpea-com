<script>

import  Tone from "tone";
import octicons from 'octicons';

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

async function loadRZA(){

  return new Promise( function(resolve, reject) {


    rza = new Tone.Sampler({

      "A1": "16a3307717ff4974787145c054171dc4ada8669f.mp3", // Misc 1 Squirrel
      "B1": "9f9ce4b24573bcc5aa95ab4ec9cedf22ac743905.mp3", // Misc 2 Metalic Drum Finger Hit
      "C1": "c0beffaadd0187c2a5108e44459e0e81d6a7b2ff.mp3", // Misc 3 Drum 1
      "D1": "16fd6ae36200cc85da243ce4e5b929ef77c5cf30.mp3", // Misc 4 Stick 2 in Reverse
      "E1": "5107c3a6c20e3133f593fac3e44b8ca534b8e395.mp3", // Misc 5 Cymbal
      "F1": "871b0cf227272c39a77fc3a754ea092d0b65223b.mp3", // Misc 6 Stick 3 Clap
      "G1": "df6e58fecc39a3985a6350d158131e4d599dba73.mp3", // Misc 7 Stick 1
      "A2": "b81c18280aed479809dca9c9b87614d6b5b1db4d.mp3", // SFX 1, Funk sound effect: Walking Cool
      "B2": "bebdc685f75f3b10b821f945cee5240c265596af.mp3", // SFX 2, Ringing SFX: Remembering
      "C2": "130c110c5d99a6c484afb29c06dec20047f9c8fd.mp3", // SFX 3, Ringing: Noticing Danger
      "D2": "2fc89124a9451bd9b51d22cfff794933b3b18364.mp3", // SFX 4, Drum 2
      "E2": "384902fe4cace75f37acdfaecd6cc4fd2137ecad.mp3", // SFX 5, Pipe Long
      "F2": "cbdad385aedd04d9e71c2bc308f944ab0cb4b34a.mp3", // SFX 6, Metal Pipe Hollow
      "G2": "00dbab16df8f3bf9b1559e32b139f56923f592fc.mp3", // Tsk 2
      "A3": "a3bafb69b3c80c9c6ccaba3745d0e6112f463d79.mp3", // SFX 7, Tiny Stick Ring
      "B3": "c91112945ad9744b4b0d440ce871fdf3d08947e7.mp3", // Pure Instument 1 - Gong
      "C3": "e7547271491320afd6e32a3d2f41f629eab91022.mp3", // Pure Instument 5 - Tambourine
      "D3": "294599aaec34f023e6149e90a6c8e0523df4c85f.mp3", // Pure Instument 7 - Shaker
      "E3": "53580c41ee4c9b9312d0b1952b3e62ac9e138ff2.mp3", // Pure Instument 2 - Guitar
      "F3": "8c950d4f8ae18441cf065db741e3e1c5570f6218.mp3", // Pure Instument 3 - Guitar
      "G3": "256e82e4b4972641b26162ac91d262fb0f7ff8bf.mp3", // Pure Instument 4 - Guitar
      "A4": "2ae533bd30909247b701bbc1f7b1563349947282.mp3", // Drum 2
      "B4": "55e11e95238bab9e8f60a7b377e6adf3766d9ede.mp3", // Drum 3
      "C4": "f1ec8695896bad0c68a9da0f9e4a482f28aca4e0.mp3", // Drum 4
      "D4": "c13bf775cbec7fbcdc8f459cb045860f57660251.mp3", // Drum 6
      "E4": "ac16b9241b329a8144113591018b8bbf485c8a05.mp3", // Drum 7
      "F4": "85606cf0cc23b9bd86b883ca4e4b74c5a23605d1.mp3", // Drum 5
      "G4": "1e5bb21d766235982ff453001379d75accb142c5.mp3", // Drum 4
      "A5": "35354ded0aadc635419c7b6b61748bb1e363946b.mp3", // Stick 7
      "B5": "721727714259f2c9f1fa8035a261e888fcca7c91.mp3", // Stick 1 Loud
      "C5": "98b6b793420ef22139daa30d46b8d98d0f4116b7.mp3", // Stick 2
      "D5": "9c4a05d1e181deda1de078ebdb99adcc19ada4fe.mp3", // Stick 6
      "E5": "f3ef81d821c76794a5e52acf3412441d94c19cce.mp3", // Stick 5
      "F5": "4b157822e8b5d272fb7aa29009baf9ec9d4af3ae.mp3", // Stick 3
      "G5": "ab7ec6dcc5fdebaadea68deb0e4567a6de4192ea.mp3", // Stick 4
      "A6": "dc4473aa907a2bf917e1b91bc537192e356620af.mp3", // Tsk 1
      "B6": "635b71f627705027d819fe87d0ed7028189d826d.mp3", // Pure Instument 6 - Tambourine
      "C6": "4e56575f8bd27f4a07cf4d791f66b3986c6e8dfe.mp3", // Tsk 5
      "D6": "e0fb86394e0258b50fb2a8f4c238a324e64c27b7.mp3", // Tsk 6
      "E6": "04e938821ca043c821b39d1abdeeaa2623fa8611.mp3", // Tsk 3
      "F6": "edf3184e2e8aa84176c2497d40311402a3b7ea75.mp3", // Tsk 7
      "G6": "123668fd36e854461cc1a5b34551e98cd162ba2d.mp3", // Tsk 4




      }, {
        "release" : 1,
        "baseUrl" : "./samples/rza/",
        onload: () => {
         resolve();
        },
      }).toMaster();



  });

}

async function play(){

  // SETUP PRIOR TO MAKE
  await loadPiano();
  await loadRZA();

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
        <strong># ! /</strong> (Hash Bang Slash) is a new mico-genre invented at CATPEA during the 2020 pandemic.
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
