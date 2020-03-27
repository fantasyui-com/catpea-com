import  Tone from "tone";

let instrument = null;

const primary = {

    meta:{
      "release":1,
      "baseUrl":"./samples/rza/",
    },

    data:{



      //"G4": "fabf3c5cc58607bf2d5eb91021e53a4773c4fb23.mp3", // Stick 1
      //"G4": "dc39c0a1b5c1cd83b77703cff2f1900e4fc6e508.mp3", // Drum 1
      //"F6": "aab83ca9600e185be123c7dff74f9934af55e825.mp3", // Tsk 1

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

    }
};

let notes = Object.keys(primary.data);

async function load(){

  return new Promise( function(resolve, reject) {

    if(Tone.Sampler){
    instrument = new Tone.Sampler(primary.data, {
      //release : primary.meta.release,
      baseUrl : primary.meta.baseUrl,
      onload: () => {  resolve(); console.log('Tone.Sampler onload'); },
      onerror: (e) => { reject(e); console.log('Error',e); },
    }).toMaster();

    Tone.Buffer.on('load', function(){
      console.log('all buffers are loaded.');
     })
   }

  });
}

async function play(note){
    console.log('NOTE', note);
    instrument.triggerAttackRelease(note, '2n');
}



export default async function main(note){
  await load();
  return instrument;
}
