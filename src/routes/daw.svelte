<script>

import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

import octicons from 'octicons';
import moment from "moment";


import HiphopSong from '../components/HiphopSong.svelte';
import LofiSoundboard from '../components/LofiSoundboard.svelte';
import BeatSequencer from '../components/BeatSequencer.svelte';
import SongMachine from '../components/SongMachine.svelte';

 </script>
<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Digital Audio Workstation</title>
</svelte:head>







<div class="container-fluid">
    <div class="row">
      <div class="col-2 pb-3">
      <SongMachine title="Composition"/>
      </div>
      <div class="col-10 pb-3">
      <SongMachine title="Editor"/>
      </div>
    </div>

    <div class="row">

    <div class="col pb-3">
    <BeatSequencer/>
    </div>

    <div class="col pb-3">
    <LofiSoundboard title="Salamander Piano Sampler" sample="salamander" minOctave="1" maxOctave="9"/>
    </div>

    <div class="col pb-3">
    <LofiSoundboard title="Shebang Slash Soundboard" sample="shebang" minOctave="1" maxOctave="6"/>
    </div>




    </div>
</div>
