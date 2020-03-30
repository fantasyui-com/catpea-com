<script>

import octicons from 'octicons';
import moment from "moment";

import SongBeatCalculator from '../components/SongBeatCalculator.svelte';
import SongTempoChangeCalculator from '../components/SongTempoChangeCalculator.svelte';
import SeasonCalculator from '../components/SeasonCalculator.svelte';
import BodybuildingAdvice from '../components/BodybuildingAdvice.svelte';
import RandomVideo from '../components/RandomVideo.svelte';
import News from '../components/News.svelte';
import Squirrel from '../components/Squirrel.svelte';

import SciurineSong from '../components/SciurineSong.svelte';
import HiphopSong from '../components/HiphopSong.svelte';
import LofiSoundboard from '../components/LofiSoundboard.svelte';
import BeatSequencer from '../components/BeatSequencer.svelte';
//import SongBuilder from '../components/SongBuilder.svelte';


const videos = {
  modified: '2020-01-25T13:52:05.520Z',
  changed: 'recently',
  name: 'Video Library',
  text: 'Cat Pea Video Library contains hundreds of interesting, informative, and educational videos.',
  url: '/video?p=0&i=8',
  img: 'videos.png',
}


// (new Date()).toISOString()
let research = [

  {date:'2020-03-30T20:16:36.830Z', html:`<span class="text-light">THE FUTURE:</span> Well, it takes about 50 lines of code to make music, to make MP3 files with mostly randomly generated fresh sounding music. There is no server requirement, everything happens in the browser crunching math in the user's CPU. Let us make future now, not tomorrow. I will now aim to create a Workout Song generator Widget/Gadget, that upon straining the CPU a bit will poop out files that can be played on the phone during workout. <span class="text-primary">From Soundboard, to Beat Sequencer, to Song Maker.</span> You might have noticed that the Beat Sequencer started sounding too complicated for a bit, "BPM", "Parts", "Beats", "Octave", "Note", "Scientific Notation", this is one lesson I want to take away from the Sequencer, the song generator will have to be massively abstract, it will have a setting for Softness rather than Samples and Presets, it will say Advanced Workout, Intermediate Workout, instead of BPM and Beats. I'll abstract away all the music-y stuff. Yah.`},

  {date:'2020-03-30T19:53:37.293Z', html:`Huge problem here is CPU speed. My older phone/tablet can't keep pace, too much CPU processing is required to make music live. Now, there is a way around this, kind of. It should be possible to make a song file and then play it. As far as modern technologies go, CHEAP MOBILE DEVICES are not ready to make music. There is a million ways around this, but each and every one of those comes with drawbacks. This technology works on fast desktops, and that is what I will recommend that people use.`},

  {date:'2020-03-30T19:47:37.293Z', html:`Shebang Slash Soundboard is complete. Keeping things simple, is how good software gets done good. Now I need to add more presets, that should be fun. The preset data format looks like binary code, here is the Closed Hat for Billie Jean Meow Mix: <span class="text-success">{label:'Closed Hat', device:'lofi', octave:6, note:'C', data:expandNotation('1010 1010 1010 1010 1010 1010 1010 1010')}</span> I came up with this, there is a bunch of repetitive stuff in data files, so I cooked up this 0/1 thing and a function that expands it into the data that the program ends up using.`},

  {date:'2020-03-30T19:05:41.707Z', html:`Renamed the LOFI Soundboard to Shebang Slash Soundboard`},

  {date:'2020-03-30T19:03:41.707Z', html:`Shebang Slash Soundboard has a very simple but powerful Start, Loading, Progress-Bar, Done, setup. This type of programming has only been available for 2 years. It is a combination of Svelte, ES6, SCSS, Rollup, Sapper and Bootstrap.`},

  {date:'2020-03-30T15:54:36.578Z', html:'Github, the company hosting the site, and the site it self is becoming sluggish, so I am opening a new experiment. I am going to add control over loading resources. For example the Shebang Slash soundboard will come with a Start or Load button, the .mp3 samples that it loads will only start loading into the browser when Start/Load is pressed. &middot; Eventually I would like to make a website for creating workout music, so stuff like resource control will come in really handy dandy. If CATPEA goes down it is because GitHub broke some promise, I\'ll be back up within a couple of days.'},


  {date:'2020-03-30T14:55:21.933Z', html:`I named the panel I've been poking at <a href="https://github.com/fantasyui-com/catpea-com/tree/master/src/style/drawer" rel="noopener noreferrer" target="_blank" class="text-warning">drawer</a>. You can take a look at the graphical configuration in CSS language <a href="https://github.com/fantasyui-com/catpea-com/blob/master/src/style/drawer/drawer.scss" rel="noopener noreferrer" target="_blank" class="text-warning">here</a>. I am learning to make components for <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap</a> this has been a hobby of mine for many years now. It feels nice to be making progress here. I still need to create a configuration section that stores all the sizing/color information, with descriptions and such. The <a href="https://github.com/fantasyui-com/catpea-com/tree/master/src/style/drawer" rel="noopener noreferrer" target="_blank" class="text-warning">drawer page</a> shows examples of how to use the Drawer, that language is called HTML. <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap</a> developers would frown on my work thus far because the drawer component can almost be made in another way, they actually have similar things. But I am thinking about creating components for a <a href="https://www.google.com/search?q=Digital+Audio+Workstation&tbm=isch" rel="noopener noreferrer" target="_blank" class="text-warning">Digital Audio Workstation (DAW)</a> like <a href="https://www.ableton.com/en/live/" rel="noopener noreferrer" target="_blank">Ableton</a>, right now the drawer is not impressive, but it will evolve beyond what Bootstrap can do. Already I am thinking that I should not use colors, but rather transparent shadows, so whatever color is in the background the drawer will inherit it automatically. <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap</a> creates flat/raised things, and my additions may end up being graphically sunken. Plus, <a href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">Bootstrap</a> creates structure, and I use it for layout and containers. They don't really create content that is specific for some purpose (like my DAW), they limit themselves to general purpose things. They do sell themes, and if I ever completed this project, they may accept mine into their store. I have much more to learn, and I still have to get used to their way of doing things.`},





  {date:'2020-03-30T00:37:57.352Z', html:`Added a collapsible panel to the Shebang Slash Beat Sequencer. It looks good, works OK. I will need to do a lot of configuration work before I can use it throughout. But this is the right path, this is where I will ${octicons.squirrel.toSVG({"class":"fill-light"})} away all the complexity, it will be a simple UI, but also contain all kinds of features a click away.`},

  {date:'2020-03-29T20:10:34.833Z', html:'Yah, I need new GUI technologies, the browser stuff is old and brittle. I am looking to <a href="https://www.google.com/search?q=zbrush+gui&tbm=isch" rel="noopener noreferrer" target="_blank" class="text-warning">ZBrush</a> and <a href="https://www.google.com/search?q=photoshop+gui&tbm=isch" rel="noopener noreferrer" target="_blank" class="text-warning">Photoshop</a>. Just at a glance I can see I need more spacing, more dark, and above all collapsible panels. Working on nicer preset selector. <figure class="figure"> <img src="research/gui1.png" class="figure-img img-fluid rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">GUI Ideas</figcaption> </figure>'},

  {date:'2020-03-29T13:14:44.761Z', html:`Well, I've noticed the UI is not loading on my cheap mobile tablet. And the dropdowns I use for everything look ugly, plus they are hard to consistently style across different browsers and devices. UI needs a new strategy. Now, I will leave the Shebang Slash Sequencer in, I won't make radical changes to it. But, time has come to think about a new GUI technology. `},

  {date:'2020-03-21T20:14:25.929Z', html:'Updated Warrior Book and Videos'},

  {date:'2020-02-05T00:33:31.100Z', html:'Updated the <a href="https://fantasyui-com.github.io/neumorphism/" rel="noopener noreferrer" target="_blank" class="text-warning">Neumorphism</a> tool with support for mobile/tablet and light source direction.'},
  {date:'2020-02-03T01:48:18.732Z', html:'Created a tool for updating the book and Cat Pea GUI <a href="https://fantasyui-com.github.io/neumorphism/" rel="noopener noreferrer" target="_blank" class="text-warning">Neumorphism</a>'},

  {date:'2020-01-31T04:07:32.063Z', html:'Hee Haw, what a ride, I split the user Interface components used in <a href="/warrior" class="text-warning">The Warrior Book</a> from <a href="https://github.com/fantasyui-com/catpea-com" rel="noopener noreferrer" target="_blank" class="text-warning">Cat Pea Code</a> and created a creatively named stand-alone project: <a href="https://fantasyui-com.github.io/book-gui/?path=/story/widgets--illustration" rel="noopener noreferrer" target="_blank" class="text-warning">book-gui</a>'},

  {date:'2020-01-28T03:34:30.737Z', html:'Added <a href="/warrior" class="text-warning">The Warrior Book</a> to the main menu. It is a complicated effort as the book was converted to a pure data file, and now needs components to render the data. It made the book very portable, but there are a couple of broken internal links, and perhaps a bug or two.'},

  {date:'2020-01-25T01:01:25.484Z', html:'The Squirrel Expert System can hide topics that the user already discussed. Squirrel\'s mind can be configured via Preferences pane. Added warning to anomalous IQ settings. Added secondary directives.'},

  {date:'2020-01-24T14:39:17.606Z', html:'Added Squirrel AI.'},
  {date:'2020-01-24T02:11:52.327Z', html:'Added Squirrel <div class="shake shake-force">' + octicons.squirrel.toSVG({ "class": "fill-white", height: 56  }) + '</div>'},
  {date:'2020-01-24T02:06:48.327Z', html:'Improved news readability.'},
  {date:'2020-01-24T01:34:33.923Z', html:'Added prev/next navigation to random videos.'},
  {date:'2020-01-24T01:16:31.658Z', html:'Continued exploring potential for component re-usability. <a href="https://svelte.dev/" rel="noopener noreferrer" target="_blank">Svelte\'s</a> <a href="https://sapper.svelte.dev/" rel="noopener noreferrer" target="_blank">Sapper</a> is following WebComponents where templating is concerned (I can reference same slot multiple times), CSS module isolation works great, metaprogramming HTML with {#if}{:else}{/if} is fine. It does beat <a href="https://markojs.com/" rel="noopener noreferrer" target="_blank">Marko</a>, <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a> and <a href="https://vuejs.org/" rel="noopener noreferrer" target="_blank">Vue</a>.'},
  {date:'2020-01-24T00:51:10.250Z', html:'Added Autopause to Random Video player, improved its randomness.'},
  {date:'2020-01-23T01:46:22.215Z', html:'Made the little news squirrels shake when a user pokes at them. <div class="shake shake-force pull-right">' + octicons.squirrel.toSVG({ "class": "fill-white"}) + '</div>'},
  {date:'2020-01-23T01:07:38.773Z', html:'Testing component composition by generalizing Bodybuilding Advice Preferences Pane into a <a href="https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/containers/PreferenceCard.svelte#L46" rel="noopener noreferrer" target="_blank">generic reusable container</a>. Employing the container in <a href="https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/components/News.svelte#L45" rel="noopener noreferrer" target="_blank">News component</a>.'},
  {date:'2020-01-22T03:38:19.680Z', html:'Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list.'},
  {date:'2020-01-22T03:23:19.680Z', html:'Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components.'},
  {date:'2020-01-22T03:22:19.680Z', html:'Testing <a href="https://octicons.github.com/" rel="noopener noreferrer" target="_blank">octicons</a>. I love the <span class="shake">' + octicons.squirrel.toSVG({ "class": "fill-white", "width": 45 }) + '</span> icon.'}

];

let news = [



  {date:'2020-03-30T13:11:22.278Z', html:`Captain's Log: Day Fourteen of Quarantine; All the local squirrels now hold me in high esteem. They feel munchies to extreme, but the trailmix they stole is gone, flurries of the box still scattered on my lawn. Squirrels, now crazed, and withdrawn. Peanuts on their mind, because mail delivery was ill timed. <sup><small>Why am I like this?</small></sup>`},

  {date:'2020-03-29T13:14:44.761Z', html:`Captain's Log: Day Thirteen of Quarantine; still staring at my screen, hanging on for dear life to my spleen as I drink another coffee bean, trying, trying not to create a scene, dancing dressed red outside my window; during quarantine.`},
  {date:'2020-03-29T11:14:44.761Z', html:` The birds are going wild outside my window, probably because of all the Plump <span class="shake shake-force">${octicons.squirrel.toSVG()}</span> Squirrels I've been feeding. Dammit.`},

  {date:'2020-03-28T22:31:17.209Z', html:'Captain\'s Log, Day Twelve of Quarantine. I ordered some trailmix from the internet, mailman dropped it off by the door and all the local Squirrels I\'ve been feeding came over, ripped the box open, and ate it. How rude, I probably shoudn\'t have been feeding them all this time. I continue my work on the little Shebang Slash Beat Sequencer, I am searching for an easy UI configuration, that is also fully featured (can edit a huge song), and has a huge area for configuring things beyond Octave and Note. The area that opens up below when user clicks a line number will be used for sound synthesis configuration that could be as many as 10 dropdowns. I don\'t like horizontal scrolling, this is what this test is about. But there is something wrong with Vertical Scrolling, like here in the <a href="https://www.youtube.com/watch?v=gdSslkrN1kk" rel="noopener noreferrer" target="_blank">Mod Trackers</a>, it just feels too awkward to compose a song downwards. On the other hand I don\'t want to recreate the <a href="https://www.ableton.com/en/live/" rel="noopener noreferrer" target="_blank">Ableton UI</a>, editing music this way is too slow. I\'ll probably keep creating these little UI widgets, but begin connecting them together under a common beat. This way the end result is a dashboard of easy to use musical instruments, and probably some fat <span class="shake shake-force">'+octicons.squirrel.toSVG()+'</span> squirrels.'},


  {date:'2020-03-27T13:12:01.513Z', html:'Captains Log, Star-date Day Eleven. I connected the Beat Sequencer to Sound. Click on any of the tiny boxes and when the loop comes around the sound will fire. Tip: put a drum every four squares, and something that makes a Tsk every other square. Music is really-really simple, like language, music evolved with us, all it takes is sticks and places to hit them with. Actually we don\'t even need sticks <a href="https://youtu.be/V76psBrEypg?t=611" class="strong text-warning" rel="noopener noreferrer" target="_blank">Tuvan Singing</a> '},


  {date:'2020-03-26T23:56:25.371Z', html:'Quarantine Day Ten. My arms grew so powerful from all the rest that I mistakenly struck myself several times. I busied myself today relearning how to handle all my amazing strength. Renamed Hash Bang to <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)" rel="noopener noreferrer" target="_blank">Shebang</a>, as it is the most commonly used variant. Begun working on a beat sequencer, and a song maker. The idea here is that Chords, Bass, Melodies can all be handled by the <a href="https://github.com/Tonejs/Tone.js/wiki/Arpeggiator" rel="noopener noreferrer" target="_blank">Arpeggiator</a>, but the beat is a bit more complex, and needs a little tool. The tool I have up today uses re-styled checkboxes, a perfect fit for the sequencer.'},


  {date:'2020-03-25T23:33:22.740Z', html:'Captain\'s Log: Ninth Day of Quarantine: I found one more chicken, am ready for dinner. I created a small <a href="https://en.wikipedia.org/wiki/Soundboard_(computer_program)" rel="noopener noreferrer" target="_blank">Soundboard</a> for what is basically a tiny collection of LOFI Hip-Hop sounds. A tiny collection will do, because we have the the synthesizer taking care of everything else. I added some Hip sounds to the THE WARRIOR Album Single and it does sound very well. Realistically it is difficult to call it music at this point, I have all the components but there were bugs along the way. <a href="https://sapper.svelte.dev/docs#Server-side_rendering" class="text-warning" rel="noopener noreferrer" target="_blank">Svelte Sapper</a> is complicated to visualize, it pre-creates some things, meaning before I publish to the website, Sapper will create a pre-ran version of the site. When a visitor visits, the pre-ran (pre-generated static version) will then be upgraded to a real version, and replaced by now running live version. It is the correct technology, and it didn\'t get me, but it does take a moment to figure out when a bug jumps out of nowhere.'},

  {date:'2020-03-24T21:11:29.310Z', html:'Captain\'s Log Supplemental: Day Eight and Half... of Quarantine. I almost finished eating my 30 day supply of Chicken, my muscles have tripled in size, and I have the strength of 300. I begun releasing a New Album entitled <strong class="text-white">THE WARRIOR</strong> Inspired by <a href="https://www.youtube.com/results?search_query=Tron+Legacy" class="strong text-warning" rel="noopener noreferrer" target="_blank">TRON</a> and <a href="https://www.youtube.com/watch?v=mVxLhy1v-xU" class="text-warning" rel="noopener noreferrer" target="_blank">LOFI Hip-Hop</a>.'},

  {date:'2020-03-24T15:18:57.286Z', html:'Added mp3 preview for the Sciurine Song. You can also <a href="sciurine.mp3" class="text-warning" rel="noopener noreferrer" target="_blank">download</a> it (Public Domain License).'},


  {date:'2020-03-24T13:36:42.106Z', html:'Captain\'s Log: Eighth day of the quarantine. I have extended the Sciurine Instrumental Section with a Beautiful Thin Saw (a Sciurine Favorite) and a powerful Electric Cello backing a <a href="https://github.com/Tonejs/Presets/blob/gh-pages/instrument/Synth/TreeTrunk.json" rel="noopener noreferrer" target="_blank">Tree Trunk</a> Synth. As nothing like this has ever been heard on Planet Earth before, the song has risen all the way to the very top of Shire Lyre Squire Squirrel Choir charts and is expected to stay there permanently, forever.'},

  {date:'2020-03-24T00:46:35.352Z', html:'On the Seventh Day of Quarantine I Added Tremolo (<a href="https://en.wikipedia.org/wiki/Low-frequency_oscillation" rel="noopener noreferrer" target="_blank">LFO</a> effect) to the  Sciurines in Memphis song (it is used in the second movement [middle of the song]), and made our imaginary band a sick medieval logo. All my generative music uses <a href="https://en.wikipedia.org/wiki/Scientific_pitch_notation" rel="noopener noreferrer" target="_blank">Scientific Pitch Notation</a>, take that Mozart. It looks like the CPU requirements are too high for mobile devices, small price to pay for a taste of Medieval <a href="https://www.dictionary.com/browse/sciurine" rel="noopener noreferrer" target="_blank">Sciurine</a> Pop. <a href="https://www.quora.com/On-GitHub-what-is-the-significance-of-the-Ship-It-squirrel?share=1" rel="noopener noreferrer" target="_blank">Ship it!</a>'},

  {date:'2020-03-23T20:32:49.019Z', html:'Added High Fidelity mode for Dehydration in Memphis, it should be possible to [almost] play it on mobile now (need a speedy CPU), though it is kind of not the point. The real value in the HD toggle is hearing the actual Synthesizer without any HD filters.'},
  {date:'2020-03-23T13:41:42.846Z', html:'Added membrane synth (Drums) to the Dehydration in Memphis Generative Album (It sounds like the <a href="https://en.wikipedia.org/wiki/Terminator_(character)" rel="noopener noreferrer" target="_blank">T-800</a> is collaborating with the <a href="http://www.scp-wiki.net/scp-2050" rel="noopener noreferrer" target="_blank">Sciurine Poor-Fellows</a>, and he\'s good.)'},

  {date:'2020-03-22T20:14:25.929Z', html:`Day Six of Quarantine:
  Created a New Autogenerative Music Widget and disguised it as an immature <a href="https://www.dictionary.com/browse/sciurine" rel="noopener noreferrer" target="_blank">Sciurine</a> Urine joke.
  The technology is extremely advanced.
  I am for the first time in forever connecting virtual synthesizers through a <a href="https://tonejs.github.io/docs/13.8.25/Reverb" rel="noopener noreferrer" target="_blank">Reverb Convolver</a>.
  This reshapes the Synthesized Sounds, the synthesizer waveform, into a more realistic sounding instrument. Reverb just about does it, if Commodore 64 came with a decent reverb it would sound amazing, nothing like chiptunes.
  I have gotten used to breaking up my Generative Music into movements, and the initial song comes with 24 measures, where evey eight measures I do something interesting with the higher pitched instruments.
  For the most part I fell like using A Basic <a href="https://github.com/Tonejs/Tone.js/wiki/Arpeggiator" rel="noopener noreferrer" target="_blank">Arpeggiator</a> for everything, I am yet to test it with real world sound samples (digital sound recordings as opposed to synthesizer based sounds.)`}


]

</script>

<style>
</style>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: World's Most Advanced Research Laboratories and Skunk Works</title>
</svelte:head>







<div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">

    <div class="col pb-3">
    <News {news} icon="squirrel" title="Captain's Log" items="100"/>
    </div>

    <div class="col pb-3">
    <News news={research} icon="mortar-board" title="Research Blog" items="10"/>
    </div>

    <div class="col pb-3">
    <BeatSequencer/>
    </div>

    <div class="col pb-3">
    <LofiSoundboard/>
    </div>

    <div class="col pb-3">
    <HiphopSong/>
    </div>

    <div class="col pb-3">
    <SciurineSong/>
    </div>



    <div class="col pb-3">
    <Squirrel/>
    </div>


    <div class="col pb-3">
        <div class="card text-white bg-dark shadow">
          <a href="{videos.url}"><img src="{videos.img}" class="card-img-top" alt="{videos.name}"></a>
          <div class="card-body p-3">
            <h5 class="card-text">{videos.name}</h5>
            <p class="card-text">{videos.text}</p>
            <a href="{videos.url}" class="btn btn-primary">{videos.name} &raquo;</a>
            <p class="card-text"><small class="text-muted">Updated {videos.changed}</small></p>
          </div>
        </div>
    </div>



    <div class="col pb-3">
    <SeasonCalculator/>
    </div>

    <div class="col pb-3">
    <SongBeatCalculator/>
    </div>

    <div class="col pb-3">
    <SongTempoChangeCalculator/>
    </div>

    <div class="col pb-3">
    <BodybuildingAdvice/>
    </div>

    <div class="col pb-3">
    <RandomVideo duration="40"/>
    </div>



    <div class="col pb-3">
    <RandomVideo duration="40"/>
    </div>

    <div class="col pb-3">
    <RandomVideo duration="40"/>
    </div>

    <div class="col pb-3">
    <RandomVideo duration="40"/>
    </div>






    </div>
</div>
