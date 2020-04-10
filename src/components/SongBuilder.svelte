<script>

import  Tone from "tone";

import DrumLine from '../controls/DrumLine.svelte';

</script>

<style>

</style>

<div class="card bg-night text-night shadow">

  <div class="card-header">
    Song Structure Builder
  </div>

  <div class="card-body">

    <div class="row">
      <div class="col small">
      This is a simplified lightweight song structure builder. The purpose of this program is to outline key points, and get the job done in as little time as possible.
      </div>
    </div>

    <div class="row">
      <div class="col small">
      Each Song has a Structure that is built out of Sections.
      Common sections are intro, verse, lift, pre-chorus, chorus, bridge/solo, outro.
      </div>
    </div>

    <form>

    <div class="row">
      <div class="col">


      </div>
    </div>

    <div class="row">
      <div class="col">


      </div>
    </div>

    <div class="row">
      <div class="col">

      <div class="form-group">
        <label for="exampleFormControlInput1">Song Title</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="My Song">
      </div>


      </div>
    </div>

    <div class="row">
      <div class="pl-3">
        <div class="form-group">
          <label class="small" for="exampleFormControlInput1">Song Tempo</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>80 BPM</option>
            <option>90 BPM</option>
            <option>100 BPM</option>
            <option>120 BPM</option>
            <option>140 BPM</option>
            <option>160 BPM</option>
            <option>170 BPM</option>
            <option>180 BPM</option>
            <option>190 BPM</option>
          </select>
        </div>
      </div>
      <div class="px-1">
        <div class="form-group">
          <label class="small" for="exampleFormControlSelect1">Measures per Section</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>4 Measures</option>
            <option default>8 Measures</option>
            <option>16 Measures</option>
            <option>32 Measures</option>
            <option>64 Measures</option>
          </select>
        </div>
      </div>

      <div class="pr-3">

      <div class="form-group">
        <label class="small" for="exampleFormControlSelect1">Sections per Song</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>10 Sections</option>
          <option>9 Sections</option>
          <option default>8 Sections</option>
          <option>7 Sections</option>
          <option>6 Sections</option>
          <option>5 Sections</option>
          <option>4 Sections</option>
          <option>3 Sections</option>
        </select>
      </div>


      </div>
    </div>

    <div class="row">
      <div class="col">
      Drums
      </div>
    </div>


    <div class="row">
      <div class="col-3">
      <select class="form-control form-control-sm" id="exampleFormControlSelect1">
        <option>A4</option>
        <option>B4</option>
        <option>C4</option>
        <option>D4</option>
        <option>E4</option>
        <option>F4</option>
        <option>G4</option>
      </select>
      </div>
      <div class="col-9 p-0">
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:gray;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
        <button style="display: inline-block; line-height:12px; width:12px; height:12px; padding: 2px; margin:0px; border-width: 1px; background:silver;"></button>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
      <select class="form-control form-control-sm" id="exampleFormControlSelect1">
        <option>A4</option>
        <option>B4</option>
        <option>C4</option>
        <option>D4</option>
        <option>E4</option>
        <option>F4</option>
        <option>G4</option>
      </select>
      </div>
      <div class="col-9 p-0">
      <DrumLine/>
      </div>
    </div>












    <div class="row">
      <div class="col">


      </div>
    </div>

    <div class="row">
      <div class="col">


      </div>
    </div>






      <div class="form-group">
        <label for="exampleFormControlInput1">Drums</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="1000,1000,1000,1010">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="0000,1000,0000,1010">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="1111,1111,1111,1111">
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="0000,0000,0000,0010">
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Secondary Drum Pattern</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="1000,1001,1000,1010">
      </div>


      <div class="form-group">
        <label for="exampleFormControlInput1">Primary Arpeggio</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="GGAGCBGGAGDC">
        <label for="exampleFormControlSelect1">Number of Sections</label>
        <select class="form-control" id="exampleFormControlSelect1">
        <option>Up</option>
        <option>Down</option>
        <option>Up Down</option>
        <option>Down Up</option>
        <option>Alternate Up</option>
        <option>Alternate Down</option>
        <option>Random Walk</option>
        <option>Random Once</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Secondary Arpeggio</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="GGAGCBGGAGDC">
        <label for="exampleFormControlSelect1">Number of Sections</label>
        <select class="form-control" id="exampleFormControlSelect1">
        <option>Up</option>
        <option>Down</option>
        <option>Up Down</option>
        <option>Down Up</option>
        <option>Alternate Up</option>
        <option>Alternate Down</option>
        <option>Random Walk</option>
        <option>Random Once</option>
        </select>
      </div>


    </form>


  </div>
</div>
