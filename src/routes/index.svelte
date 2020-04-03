<script>

import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

import icons from '../devices/icons.js';
const octicons = icons();
console.log(octicons);

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
import SongMachine from '../components/SongMachine.svelte';
//import SongBuilder from '../components/SongBuilder.svelte';



const videos = {
  modified: '2020-01-25T13:52:05.520Z',
  changed: 'recently',
  name: 'Video Library',
  text: 'CATPEA Video Library contains hundreds of interesting, informative, and educational videos.',
  url: '/video?p=0&i=8',
  img: 'videos.png',
}
const daw = {
  modified: '2020-01-25T13:52:05.520Z',
  changed: 'recently',
  name: 'Digital Audio Workstation',
  text: 'CATPEA Digital Audio Workstation is in Alpha. It is unknown if a light-weight implementation is possible, but UI does look very promising.',
  url: '/daw',
  img: 'daw.jpg',
}



const linkDatabase = {
  'Beat Sequencer Source': 'https://github.com/fantasyui-com/catpea-com/blob/master/src/components/BeatSequencer.svelte',
  'Bootstrap Expo': 'https://expo.getbootstrap.com/',
  'Bootstrap': 'https://getbootstrap.com/',
  'Ableton': 'https://www.ableton.com/en/live/',
  'LMMS': 'https://lmms.io/',
  'Scientific Pitch Notation': 'https://en.wikipedia.org/wiki/Scientific_pitch_notation',
  'Yamaha C5 Grand Piano':'https://usa.yamaha.com/products/musical_instruments/pianos/grand_pianos/cx_series/cx-series.html',
  'CATPEA DAW':'/daw',
  'Rollup': 'https://rollupjs.org/guide/en/',
  'Octicons require a json file': 'https://github.com/primer/octicons/commit/875bc333ce4dc6a460a116dfd315a56dbb23120f#diff-c93a11fe3afdd3ccfbe1f152a8cf7b20L1',
  'Svelte': 'https://svelte.dev/',
  'Sapper': 'https://sapper.svelte.dev/',
  'SVG': 'https://www.w3.org/Graphics/SVG/WG/wiki/SVG_FAQ',
  'Octicons':'https://octicons.github.com/',
  'github is having problems':'https://www.githubstatus.com/',
  'github was having problems':'https://www.githubstatus.com/',

};


// (new Date()).toISOString()
let research = [

  {
    date: '2020-04-03T17:25:35.682Z',
    html: `
    <p>Yes, I am 99.9% sure that the Sound Machine will work.</p>
    <p>The user interface is a lot simpler than [LMMS] I could almost call it a SYMBOLIC SEQUENCER because it is so incredibly abstract.</p>
    <p>I threw out a lot of ideas that people generally expect from a DAW, I am not even sure I am going to have a Piano Roll in here. What is the use of a piano roll when a typical beat sequencer can be given the most favorite and beautiful chords, it is not like musicians hit all the keys, they just hit that little selection that sounds nice.</p>
    <p>The mechanics of a beat sequencer are superior to that of a piano roll, in many contexts. In a majority of related (webbrowser GUI music making) contexts (getting a neat song done quickly, not needing to learn to make music, not needing a real piano to make a song, working with a simple UI, enjoyment of creating music).</p>

    <p>I am looking forward to creating a selection of instruments the user can use.</p>

    <p>I will create a RANDOMIZE SYNTHESIZER SETTINGS button, this will make different instruments with a simple click of a button. Sure, it is great to have a little library, but is it needed when maybe a selection of 10 synthesizers with a randomize button is available? That makes for hundreds or thousands of instruments just leap out of thin air.</p>

    <figure class="figure float-right"> <img src="research/sequencer.png" class="figure-img w-100 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">Song Structure and Sequencer</figcaption> </figure>
    `,

  },
  {
    date: '2020-04-03T14:15:43.386Z',
    html: ` Already bumped into an artifact that deals with integrity problems. Basically when a new part of a song is selected, the stuff that was selected in the old part needs to be cleared. So I created an unselections section in the data file. This is still reasonable, it is not a sign of trouble. But two or three anomalies like that like that could destroy a program like the [CATPEA DAW]. But so far so good looks like it will all work.
    <figure class="figure float-right"> <img src="research/unselections.png" class="figure-img w-100 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">Selections Trigger Unselections</figcaption> </figure>
    `,

  },

  {
    date: '2020-04-02T22:11:51.381Z',
    html: `Yup, so [github was having problems] but also, github developers didn't code octicons right, it is not done in the standard way, and it may be that under certain conditions the database of octicons that I import into my code will get wiped, they have processing instructions in there that run every time their library is imported, technically it should run once as it is cached, but under Svelte something goes wrong and the library returns empty data. I standardized it, and it works now, I am going to redo their system, I'll probably let them know that I did it, but that will be the end of it. I like these icons because there is a cute [squirrel]. `,
    link:{
      'squirrel':'https://octicons.github.com/icon/squirrel/'
    }
  },

  {
    date: '2020-04-02T20:14:32.068Z',
    html: `Things in square brackets are supposed to be links, but the system is crashing before I get a chance to replace the square bracket notation, it will take me a moment to figure out why [Sapper] is failing. I did finish writing the poem for today, so that's nice. I just found out that on top of everything else [github is having problems]:  "Update - We are investigating reports of service unavailability."`
  },

  {
    date: '2020-04-02T20:04:32.068Z',
    html: `Yah, it is an internal bug I have little to do with, it could be [Rollup] or that [Octicons require a json file], it is worth solving because it is a learning experience, I get a moment of time to look through the system I am working with, mostly [Svelte], [Sapper] and [Rollup]. The code for [Octicons] which is made by github is highly questionable, I should make a copy and just re-write it. There is some [SVG] work coming up, since Octicons are in SVG, I may just do that then.`
  },

  {
    date: '2020-04-02T16:05:22.263Z',
    html: `I found some trouble in the website generation configuration, it was preventing parts of the program from operating. I am going to be testing it for a bit more.`
  },

  {
    date: '2020-04-02T15:01:03.450Z',
    html: `

    <p>
      [CATPEA DAW] is now a Desktop Application, Mobile Devices are too slow for making music, this is a new program with new stuff in it, I won't be changing anything else, I like having all these random gadgets here.
      </p>

    <p>
      And it is still too early to know if [CATPEA DAW] can work, there is no guarantee that what I am doing can actually result in a functional program. I went out of my way to create a Data Structure Driven program with minimal data manipulation functions embedded in the UI only.
    </p>

    <p>
      A lot of programmers would hate this, the best of them would want me to create well named ACTIONS like 'selectTrack' or 'enableNote' but that just adds to the weight of the program, it destroys it.
      Programs that are WRITTEN-OUT like the best of these programmers want are BLOATED, HUGE, almost broken by design.
    </p>

    <p>
     And what I am creating is a program that exploits only that which is possible, and no more. I am creating a self editing data structure with self-updating graphics. If this works out, I'll be able to create programs without programming. It would be more like data shaping and expressing, and not programming.
     It would beat the heck out of other applications. There is no code here, there is nothing to break.
    </p>

    <p>
    The trade-off is that a program like this can't receive specific features, UNLESS, they are possible as dictated by the data-structure and its shaping.
    </p>

     <p>
     If this was a project for a company, for a client and client requested a feature incompatible with the tree, one would have to say "That, is not possible". To rewrite a program like this in standard code with Data Flows, Functions, Actions, Plugins, and such would take years.
     </p>

     <p>
     Isn't this interesting? &middot; Alas, let us first see if I can have all I need to make music withut needing functions.
     </p>
     `,
  },

  {
    date: '2020-04-01T21:29:48.923Z',
    html: `Added a very early preview of Sound Machine. I aim to create a Workout Song Generator/Builder, but I don't want to just create a Workout Song Generator/Builder and code it. I want to explore areas in and around it, by asking "What are some related programs that take little code to finish?". There is a possibility that Sound Machine can be a useful music Builder/Generator. If you have a Desktop machine take a look at what it would look like as its own page [CATPEA DAW] it is a very raw mockup I have the Sound Machine in two places just to see what it would be like to have that little index on the left. Here is a screenshot:
    <figure class="figure float-right"> <img src="research/daw.jpg" class="figure-img w-100 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">Digital Audio Workstation</figcaption> </figure>
    `,
  },

  {
    date: '2020-04-01T01:14:25.924Z',
    html: `Added the Salamander Piano Sampler Gadget.`,
  },

  {
    date: '2020-04-01T00:32:07.540Z',
    html: `I had to rotate labels on the instruments everything goes CDEFGAB instead of ABCDEFG. Sigh, I can't believe this is part of the [Scientific Pitch Notation] specification, music people are strange sometimes.`,
  },

  {
    date: '2020-04-01T00:30:07.540Z',
    html: `Ew, lots of little  <div class="shake shake-force">${octicons.bug.toSVG({"class":"fill-light"})}</div> fixes. I made some instrument upgrades and a few code <div class="shake shake-force">${octicons.bug.toSVG({"class":"fill-danger"})}</div><div class="shake shake-slow shake-force">${octicons.bug.toSVG({"class":"fill-success"})}</div><div class="shake shake-force">${octicons.bug.toSVG({"class":"fill-info"})}</div> snuck in.`,

  },

  {
    date: '2020-03-31T23:43:12.938Z',
    html: `Added [Inner City, Good Life] preset to the Beat Sequencer to test support for multiple instruments. I also added Salamander Piano, which is based on [Yamaha C5 Grand Piano], a real Piano, it sounds nice ${octicons.megaphone.toSVG({"class":"fill-light"})}. Go to Shebang Slash Beat Sequencer, check some of those boxes to make the piano go. I set it as the default instrument.
    <figure class="figure float-right"> <img src="research/piano.png" class="figure-img w-75 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">Piano Fun</figcaption> </figure>
    `,
    link: {
      'Inner City, Good Life': 'https://github.com/fantasyui-com/catpea-com/blob/master/src/components/BeatSequencer.svelte',
    }
  },

  {
    date: '2020-03-31T19:24:44.147Z',
    html: `Cleaned up the [Beat Sequencer Source Code] it is actually simpler than it looks.`,
    link: {
      'Beat Sequencer Source Code': 'https://github.com/fantasyui-com/catpea-com/blob/master/src/components/BeatSequencer.svelte',
    }
  },

  {
    date: '2020-03-31T15:36:24.127Z',
    html: `I have added slide-open/slide-closed animation to the drawer in Shebang Slash Beat Sequencer, when opening one of the drawers, instead of contents appearing instantly they slide in vertically. I am not a fan of animation of this kind in GUI world, but everybody seems to be doing it, and if I am to develop a Bootstrap Theme for possible sales, I need to make sure all my designs cooperate nicely with [Svelte's Transition Directives].`,
    link: {
      'Svelte\'s Transition Directives': 'https://svelte.dev/examples#transition',
    }
  },

  {
    date: '2020-03-30T22:15:38.600Z',
    html: `I've been looking at the submissions in [Bootstrap Expo] curated by one of the original [Bootstrap] developers. And I feel like the Warrior Book needs better design, and I think maybe the Workout Song Generation may benefit from being its own application. In next few weeks, perhaps, I would like to practice art general design and typography for a bit to create something as beautiful as that [Beautiful Web Type] demo.`,
    link: {
      'Beautiful Web Type': 'http://hellohappy.org/beautiful-web-type'
    }
  },

  {
    date: '2020-03-30T22:07:28.661Z',
    html: `Added Stop/Play buttons to the Beat Sequencer, it just seems right. Overall, adding extras is a bad idea, but in larger programs, if there are too many extras one can add a Advanced Mode. It would work here too, but a couple of extra buttons is OK.`
  },

  {
    date: '2020-03-30T20:16:36.830Z',
    html: `<span class="text-light">THE FUTURE:</span> Well, it takes about 50 lines of code to make music, to make MP3 files with mostly randomly generated fresh sounding music. There is no server requirement, everything happens in the browser crunching math in the user's CPU. Let us make future now, not tomorrow. I will now aim to create a Workout Song generator Widget/Gadget, that upon straining the CPU a bit will pop out files that can be played on the phone during workout. <span class="text-primary">From Soundboard, to Beat Sequencer, to Song Maker.</span> You might have noticed that the Beat Sequencer started sounding too complicated for a bit, "BPM", "Parts", "Beats", "Octave", "Note", "Scientific Notation", this is one lesson I want to take away from the Sequencer, the song generator will have to be massively abstract, it will have a setting for Softness rather than Samples and Presets, it will say Advanced Workout, Intermediate Workout, instead of BPM and Beats. I'll abstract away all the music-y stuff. Yah.`
  },

  {
    date: '2020-03-30T19:53:37.293Z',
    html: `Huge problem here is CPU speed. My older phone/tablet can't keep pace, too much CPU processing is required to make music live. Now, there is a way around this, kind of. It should be possible to make a song file and then play it. As far as modern technologies go, CHEAP MOBILE DEVICES are not ready to make music. There is a million ways around this, but each and every one of those comes with drawbacks. This technology works on fast desktops, and that is what I will recommend that people use.`
  },

  {
    date: '2020-03-30T19:47:37.293Z',
    html: `Shebang Slash Soundboard is complete. Keeping things simple, is how good software gets done good. Now I need to add more presets, that should be fun. The preset data format looks like binary code, here is the Closed Hat for Billie Jean Meow Mix: <span class="text-success">{label:'Closed Hat', device:'lofi', octave:6, note:'C', data:expandNotation('1010 1010 1010 1010 1010 1010 1010 1010')}</span> I came up with this, there is a bunch of repetitive stuff in data files, so I cooked up this 0/1 thing and a function that expands it into the data that the program ends up using.`
  },

  {
    date: '2020-03-30T19:05:41.707Z',
    html: `Renamed the LOFI Soundboard to Shebang Slash Soundboard`
  },

  {
    date: '2020-03-30T19:03:41.707Z',
    html: `Shebang Slash Soundboard has a very simple but powerful Start, Loading, Progress-Bar, Done, setup. This type of programming has only been available for 2 years. It is a combination of Svelte, ES6, SCSS, Rollup, Sapper and Bootstrap.`
  },

  {
    date: '2020-03-30T15:54:36.578Z',
    html: 'Github, the company hosting the site, and the site it self is becoming sluggish, so I am opening a new experiment. I am going to add control over loading resources. For example the Shebang Slash soundboard will come with a Start or Load button, the .mp3 samples that it loads will only start loading into the browser when Start/Load is pressed. &middot; Eventually I would like to make a website for creating workout music, so stuff like resource control will come in really handy dandy. If CATPEA goes down it is because GitHub broke some promise, I\'ll be back up within a couple of days.'
  },

  {
    date: '2020-03-30T14:55:21.933Z',
    html: `I named the panel I've been poking at <a href="https://github.com/fantasyui-com/catpea-com/tree/master/src/style/drawer" rel="noopener noreferrer" target="_blank" class="text-warning">drawer</a>. You can take a look at the graphical configuration in CSS language <a href="https://github.com/fantasyui-com/catpea-com/blob/master/src/style/drawer/drawer.scss" rel="noopener noreferrer" target="_blank" class="text-warning">here</a>. I am learning to make components for [Bootstrap] this has been a hobby of mine for many years now. It feels nice to be making progress here. I still need to create a configuration section that stores all the sizing/color information, with descriptions and such. The <a href="https://github.com/fantasyui-com/catpea-com/tree/master/src/style/drawer" rel="noopener noreferrer" target="_blank" class="text-warning">drawer page</a> shows examples of how to use the Drawer, that language is called HTML. [Bootstrap] developers would frown on my work thus far because the drawer component can almost be made in another way, they actually have similar things. But I am thinking about creating components for a <a href="https://www.google.com/search?q=Digital+Audio+Workstation&tbm=isch" rel="noopener noreferrer" target="_blank" class="text-warning">Digital Audio Workstation (DAW)</a> like [Ableton], right now the drawer is not impressive, but it will evolve beyond what Bootstrap can do. Already I am thinking that I should not use colors, but rather transparent shadows, so whatever color is in the background the drawer will inherit it automatically. [Bootstrap] creates flat/raised things, and my additions may end up being graphically sunken. Plus, [Bootstrap] creates structure, and I use it for layout and containers. They don't really create content that is specific for some purpose (like my DAW), they limit themselves to general purpose things. They do sell themes, and if I ever completed this project, they may accept mine into their store. I have much more to learn, and I still have to get used to their way of doing things.`
  },

  {
    date: '2020-03-30T00:37:57.352Z',
    html: `Added a collapsible panel to the Shebang Slash Beat Sequencer. It looks good, works OK. I will need to do a lot of configuration work before I can use it throughout. But this is the right path, this is where I will ${octicons.squirrel.toSVG({"class":"fill-light"})} away all the complexity, it will be a simple UI, but also contain all kinds of features a click away.`
  },

  {
    date: '2020-03-29T20:10:34.833Z',
    html: 'Yah, I need new GUI technologies, the browser stuff is old and brittle. I am looking to <a href="https://www.google.com/search?q=zbrush+gui&tbm=isch" rel="noopener noreferrer" target="_blank" class="text-warning">ZBrush</a> and <a href="https://www.google.com/search?q=photoshop+gui&tbm=isch" rel="noopener noreferrer" target="_blank" class="text-warning">Photoshop</a>. Just at a glance I can see I need more spacing, more dark, and above all collapsible panels. Working on nicer preset selector. <figure class="figure"> <img src="research/gui1.png" class="figure-img img-fluid rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">GUI Ideas</figcaption> </figure>'
  },

  {
    date: '2020-03-29T13:14:44.761Z',
    html: `Well, I've noticed the UI is not loading on my cheap mobile tablet. And the dropdowns I use for everything look ugly, plus they are hard to consistently style across different browsers and devices. UI needs a new strategy. Now, I will leave the Shebang Slash Sequencer in, I won't make radical changes to it. But, time has come to think about a new GUI technology. `
  },

  {
    date: '2020-03-21T20:14:25.929Z',
    html: 'Updated Warrior Book and Videos'
  },

  {
    date: '2020-02-05T00:33:31.100Z',
    html: 'Updated the <a href="https://fantasyui-com.github.io/neumorphism/" rel="noopener noreferrer" target="_blank" class="text-warning">Neumorphism</a> tool with support for mobile/tablet and light source direction.'
  },
  {
    date: '2020-02-03T01:48:18.732Z',
    html: 'Created a tool for updating the book and Cat Pea GUI <a href="https://fantasyui-com.github.io/neumorphism/" rel="noopener noreferrer" target="_blank" class="text-warning">Neumorphism</a>'
  },

  {
    date: '2020-01-31T04:07:32.063Z',
    html: 'Hee Haw, what a ride, I split the user Interface components used in <a href="/warrior" class="text-warning">The Warrior Book</a> from <a href="https://github.com/fantasyui-com/catpea-com" rel="noopener noreferrer" target="_blank" class="text-warning">Cat Pea Code</a> and created a creatively named stand-alone project: <a href="https://fantasyui-com.github.io/book-gui/?path=/story/widgets--illustration" rel="noopener noreferrer" target="_blank" class="text-warning">book-gui</a>'
  },

  {
    date: '2020-01-28T03:34:30.737Z',
    html: 'Added <a href="/warrior" class="text-warning">The Warrior Book</a> to the main menu. It is a complicated effort as the book was converted to a pure data file, and now needs components to render the data. It made the book very portable, but there are a couple of broken internal links, and perhaps a bug or two.'
  },

  {
    date: '2020-01-25T01:01:25.484Z',
    html: 'The Squirrel Expert System can hide topics that the user already discussed. Squirrel\'s mind can be configured via Preferences pane. Added warning to anomalous IQ settings. Added secondary directives.'
  },

  {
    date: '2020-01-24T14:39:17.606Z',
    html: 'Added Squirrel AI.'
  },
  {
    date: '2020-01-24T02:11:52.327Z',
    html: 'Added Squirrel <div class="shake shake-force">' + octicons.squirrel.toSVG({
      "class": "fill-white",
      height: 56
    }) + '</div>'
  },
  {
    date: '2020-01-24T02:06:48.327Z',
    html: 'Improved news readability.'
  },
  {
    date: '2020-01-24T01:34:33.923Z',
    html: 'Added prev/next navigation to random videos.'
  },
  {
    date: '2020-01-24T01:16:31.658Z',
    html: 'Continued exploring potential for component re-usability. <a href="https://svelte.dev/" rel="noopener noreferrer" target="_blank">Svelte\'s</a> <a href="https://sapper.svelte.dev/" rel="noopener noreferrer" target="_blank">Sapper</a> is following WebComponents where templating is concerned (I can reference same slot multiple times), CSS module isolation works great, metaprogramming HTML with {#if}{:else}{/if} is fine. It does beat <a href="https://markojs.com/" rel="noopener noreferrer" target="_blank">Marko</a>, <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a> and <a href="https://vuejs.org/" rel="noopener noreferrer" target="_blank">Vue</a>.'
  },
  {
    date: '2020-01-24T00:51:10.250Z',
    html: 'Added Autopause to Random Video player, improved its randomness.'
  },
  {
    date: '2020-01-23T01:46:22.215Z',
    html: 'Made the little news squirrels shake when a user pokes at them. <div class="shake shake-force pull-right">' + octicons.squirrel.toSVG({
      "class": "fill-white"
    }) + '</div>'
  },
  {
    date: '2020-01-23T01:07:38.773Z',
    html: 'Testing component composition by generalizing Bodybuilding Advice Preferences Pane into a <a href="https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/containers/PreferenceCard.svelte#L46" rel="noopener noreferrer" target="_blank">generic reusable container</a>. Employing the container in <a href="https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/components/News.svelte#L45" rel="noopener noreferrer" target="_blank">News component</a>.'
  },
  {
    date: '2020-01-22T03:38:19.680Z',
    html: 'Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list.'
  },
  {
    date: '2020-01-22T03:23:19.680Z',
    html: 'Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components.'
  },
  {
    date: '2020-01-22T03:22:19.680Z',
    html: 'Testing <a href="https://octicons.github.com/" rel="noopener noreferrer" target="_blank">octicons</a>. I love the <span class="shake">' + octicons.squirrel.toSVG({
      "class": "fill-white",
      "width": 45
    }) + '</span> icon.'
  }

];
let news = [


  // I am trying not to hoard,
  // but I did hide a bag in my cupboard.
  // It will come in handy, if I run out of candy.
  //
          //
          // It is sunny outside,
          // but quiet worldwide.
          //
          // Though I hear my neighbors dancing & prancing,
          // it makes no sense, as we should be distancing.
          //
          //
          // I do worry some will go blind,
          // pthers may jump from the fire escape,


    {
      date: '2020-04-02T20:04:32.068Z',
      html: `

      <p class="mb-0">Captain's Log: Day Seventeen of Quarantine.</p>
      <p class="mb-0">Found two bugs in code, and got stuck in between.</p>
      <div>&nbsp;</div>

      <p class="mb-0">I was supposed to be working on a Sound Machine,</p>
      <p class="mb-0">but spent the noon formatting the code to keep it clean.</p>
      <div>&nbsp;</div>

      <p class="mb-0">I can't believe, there is a bug in my code,</p>
      <p class="mb-0">its probably in octicons, because I am using node.</p>
      <div>&nbsp;</div>

      <p class="mb-0">Worst of all, I can't see it fail until I publish,</p>
      <p class="mb-0">because sapper likes static as not to be sluggish.</p>
      <div>&nbsp;</div>

      <p class="mb-0">So here I am, finally dressed up like Superman,</p>
      <p class="mb-0">Debugging code, blind, like a veritable caveman.</p>
      <div>&nbsp;</div>

      <p class="mb-0">I did a bit of soul searching,</p>
      <p class="mb-0">then followed with some researching.</p>
      <div>&nbsp;</div>

      <p class="mb-0">Now, I am sitting here, contemplating if I need a cape,</p>
      <p class="mb-0">wondering if I should follow up with an Audiotape.</p>
      <div>&nbsp;</div>

      <p class="mb-0">I could finish up getting in shape,</p>
      <p class="mb-0">and completely change the workout landscape.</p>
      <div>&nbsp;</div>

      <p class="mb-0">I am serious about making a workout tape,</p>
      <p class="mb-0">I really want to get in shape.</p>
      <div>&nbsp;</div>

      <p class="mb-0">What if the workout required wearing a tail?</p>
      <p class="mb-0">Would it become like super holy grail?</p>
      <div>&nbsp;</div>

      <p class="mb-0">I would walk the street and people would pale,</p>
      <p class="mb-0">"Sir! Why have you done this?</p>
      <p class="mb-0">You, are a Whale!!!"</p>
      <div>&nbsp;</div>




      `
    },

    {
      date: '2020-04-01T16:35:20.987Z',
      html: `

    <p class="mb-0">Captain's Log: Day Sixteen of Quarantine.</p>
    <p class="mb-0">Keeping it serious like Wolverine.</p>
    <div>&nbsp;</div>

    <p class="mb-0">I have decided not to rhyme,</p>
    <p class="mb-0">I really haven't got the time.</p>
    <div>&nbsp;</div>

    <p class="mb-0">I must leave the thieving Squirrels behind,</p>
    <p class="mb-0">yes, really, I don't mind.</p>
    <div>&nbsp;</div>

    <p class="mb-0">Today, is a new day, I am completely serious,</p>
    <p class="mb-0">I am going to ignore everything hilarious.</p>
    <div>&nbsp;</div>

    <p class="mb-0">I am not even joking, I'll ignore those furriers,</p>
    <p class="mb-0">I won't even pay attention to their funny scurries.</p>
    <div>&nbsp;</div>

    <p class="mb-0">I will sit here quiet,</p>
    <p class="mb-0">tending to my amazing diet...</p>
    <div>&nbsp;</div>

    <p class="mb-0">A stray thought bubbles to my idle mind,</p>
    <p class="mb-0">Oh, no, I hope people won't go blind!</p>
    <div>&nbsp;</div>

    <p class="mb-0">I think I am going to YouTube my workout dance,</p>
    <p class="mb-0">Now, where the heck did I put my underpants?</p>
    <div>&nbsp;</div>



      `
    },

    {
      date: '2020-03-31T16:20:21.586Z',
      html: `

        <p class="mb-0">Captain's Log: Day Fifteen of Quarantine,</p>
        <p class="mb-0">Squirrels continue being mean.</p>
        <div>&nbsp;</div>

        <p class="mb-0">They just aren't very keen, on the idea,</p>
        <p class="mb-0">that their theft gave them diarrhea.</p>
        <div>&nbsp;</div>

        <p class="mb-0">I know not what to do,</p>
        <p class="mb-0">Darn Squirrels! that Trailmix was not for you!</p>
        <div>&nbsp;</div>

        <p class="mb-0">Maybe someday we'll move on,</p>
        <p class="mb-0">come a sunny day, carry on.</p>
        <div>&nbsp;</div>

        <p class="mb-0">But today, is not that day,</p>
        <p class="mb-0">it's just Tuesday.</p>
        <div>&nbsp;</div>

        <p class="mb-0">This is getting out of control,</p>
        <p class="mb-0">I don't want to be a poet anymore!</p>
        <div>&nbsp;</div>

        <p class="mb-0">I just wanted to feed the creatures I adore.</p>
        <p class="mb-0">Not write strange rhymes out the front door.</p>
        <div>&nbsp;</div>

        <p class="mb-0">I must stop rhyming,</p>
        <p class="mb-0">this is not the right timing.</p>
        <div>&nbsp;</div>

        <p class="mb-0">I feel like I've lost control,</p>
        <p class="mb-0">spiraling down a Squirrel Hole.</p>
        <div>&nbsp;</div>

      <p class="mb-0">
        <sup><small>I swear I am not like this in real life... I can change!</small></sup>
      </p>
      `
    },

    {
      date: '2020-03-30T13:11:22.278Z',
      html: `


      <p class="mb-0">Captain's Log: Day Fourteen of Quarantine,</p>
      <p class="mb-0">All the local squirrels, now hold me in high esteem.</p>
      <div>&nbsp;</div>

      <p class="mb-0">They feel munchies to extreme,</p>
      <p class="mb-0">but the trailmix they stole is gone,</p>
      <p class="mb-0">flurries of the box still scattered on my lawn.</p>
      <div>&nbsp;</div>

      <p class="mb-0">Squirrels, now crazed, and withdrawn.</p>
      <div>&nbsp;</div>

      <p class="mb-0">Peanuts on their mind,</p>
      <p class="mb-0">because mail delivery was ill timed.</p>
      <div>&nbsp;</div>

      <sup><small>Why am I like this?</small></sup>`
    },

    {
      date: '2020-03-29T13:14:44.761Z',
      html: `

        <p class="mb-0">Captain's Log: Day Thirteen of Quarantine;</p>
        <p class="mb-0">still staring at my screen,</p>
        <p class="mb-0">hanging on for dear life to my spleen</p>
        <p class="mb-0">as I drink another coffee bean,</p>
        <p class="mb-0">trying, trying not to create a scene,</p>
        <p class="mb-0">dancing dressed red outside my window;</p>
        <p class="mb-0">during quarantine.</p>


    `
  },
  {
    date: '2020-03-29T11:14:44.761Z',
    html: ` The birds are going wild outside my window, probably because of all the Plump <span class="shake shake-force">${octicons.squirrel.toSVG()}</span> Squirrels I've been feeding. Dammit.`
  },

  {
    date: '2020-03-28T22:31:17.209Z',
    html: `Captain\'s Log, Day Twelve of Quarantine.
    I ordered some trailmix from the internet,
    mailman dropped it off by the door and all the local Squirrels I\'ve been feeding came over,
    ripped the box open, and ate it. How rude, I probably shoudn\'t have been feeding them all this time.
    `
  },

  {
    date: '2020-03-28T22:31:17.209Z',
    html: `I continue my work on the little Shebang Slash Beat Sequencer, I am searching for an easy UI configuration, that is also fully featured (can edit a huge song), and has a huge area for configuring things beyond Octave and Note. The area that opens up below when user clicks a line number will be used for sound synthesis configuration that could be as many as 10 dropdowns. I don\'t like horizontal scrolling, this is what this test is about. But there is something wrong with Vertical Scrolling, like here in the <a href="https://www.youtube.com/watch?v=gdSslkrN1kk" rel="noopener noreferrer" target="_blank">Mod Trackers</a>, it just feels too awkward to compose a song downwards. On the other hand I don\'t want to recreate the [Ableton] UI, editing music this way is too slow. I\'ll probably keep creating these little UI widgets, but begin connecting them together under a common beat. This way the end result is a dashboard of easy to use musical instruments, and probably some fat <span class="shake shake-force">${octicons.squirrel.toSVG()}squirrels.`
  },


  {
    date: '2020-03-27T13:12:01.513Z',
    html: 'Captains Log, Star-date Day Eleven. I connected the Beat Sequencer to Sound. Click on any of the tiny boxes and when the loop comes around the sound will fire. Tip: put a drum every four squares, and something that makes a Tsk every other square. Music is really-really simple, like language, music evolved with us, all it takes is sticks and places to hit them with. Actually we don\'t even need sticks <a href="https://youtu.be/V76psBrEypg?t=611" class="strong text-warning" rel="noopener noreferrer" target="_blank">Tuvan Singing</a> '
  },


  {
    date: '2020-03-26T23:56:25.371Z',
    html: 'Quarantine Day Ten. My arms grew so powerful from all the rest that I mistakenly struck myself several times. I busied myself today relearning how to handle all my amazing strength. Renamed Hash Bang to <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)" rel="noopener noreferrer" target="_blank">Shebang</a>, as it is the most commonly used variant. Begun working on a beat sequencer, and a song maker. The idea here is that Chords, Bass, Melodies can all be handled by the <a href="https://github.com/Tonejs/Tone.js/wiki/Arpeggiator" rel="noopener noreferrer" target="_blank">Arpeggiator</a>, but the beat is a bit more complex, and needs a little tool. The tool I have up today uses re-styled checkboxes, a perfect fit for the sequencer.'
  },


  {
    date: '2020-03-25T23:33:22.740Z',
    html: 'Captain\'s Log: Ninth Day of Quarantine: I found one more chicken, am ready for dinner. I created a small <a href="https://en.wikipedia.org/wiki/Soundboard_(computer_program)" rel="noopener noreferrer" target="_blank">Soundboard</a> for what is basically a tiny collection of LOFI Hip-Hop sounds. A tiny collection will do, because we have the the synthesizer taking care of everything else. I added some Hip sounds to the THE WARRIOR Album Single and it does sound very well. Realistically it is difficult to call it music at this point, I have all the components but there were bugs along the way. <a href="https://sapper.svelte.dev/docs#Server-side_rendering" class="text-warning" rel="noopener noreferrer" target="_blank">Svelte Sapper</a> is complicated to visualize, it pre-creates some things, meaning before I publish to the website, Sapper will create a pre-ran version of the site. When a visitor visits, the pre-ran (pre-generated static version) will then be upgraded to a real version, and replaced by now running live version. It is the correct technology, and it didn\'t get me, but it does take a moment to figure out when a bug jumps out of nowhere.'
  },

  {
    date: '2020-03-24T21:11:29.310Z',
    html: 'Captain\'s Log Supplemental: Day Eight and Half... of Quarantine. I almost finished eating my 30 day supply of Chicken, my muscles have tripled in size, and I have the strength of 300. I begun releasing a New Album entitled <strong class="text-white">THE WARRIOR</strong> Inspired by <a href="https://www.youtube.com/results?search_query=Tron+Legacy" class="strong text-warning" rel="noopener noreferrer" target="_blank">TRON</a> and <a href="https://www.youtube.com/watch?v=mVxLhy1v-xU" class="text-warning" rel="noopener noreferrer" target="_blank">LOFI Hip-Hop</a>.'
  },

  {
    date: '2020-03-24T15:18:57.286Z',
    html: 'Added mp3 preview for the Sciurine Song. You can also <a href="sciurine.mp3" class="text-warning" rel="noopener noreferrer" target="_blank">download</a> it (Public Domain License).'
  },


  {
    date: '2020-03-24T13:36:42.106Z',
    html: 'Captain\'s Log: Eighth day of the quarantine. I have extended the Sciurine Instrumental Section with a Beautiful Thin Saw (a Sciurine Favorite) and a powerful Electric Cello backing a <a href="https://github.com/Tonejs/Presets/blob/gh-pages/instrument/Synth/TreeTrunk.json" rel="noopener noreferrer" target="_blank">Tree Trunk</a> Synth. As nothing like this has ever been heard on Planet Earth before, the song has risen all the way to the very top of Shire Lyre Squire Squirrel Choir charts and is expected to stay there permanently, forever.'
  },

  {
    date: '2020-03-24T00:46:35.352Z',
    html: 'On the Seventh Day of Quarantine I Added Tremolo (<a href="https://en.wikipedia.org/wiki/Low-frequency_oscillation" rel="noopener noreferrer" target="_blank">LFO</a> effect) to the  Sciurines in Memphis song (it is used in the second movement [middle of the song]), and made our imaginary band a sick medieval logo. All my generative music uses [Scientific Pitch Notation], take that Mozart. It looks like the CPU requirements are too high for mobile devices, small price to pay for a taste of Medieval <a href="https://www.dictionary.com/browse/sciurine" rel="noopener noreferrer" target="_blank">Sciurine</a> Pop. <a href="https://www.quora.com/On-GitHub-what-is-the-significance-of-the-Ship-It-squirrel?share=1" rel="noopener noreferrer" target="_blank">Ship it!</a>'
  },

  {
    date: '2020-03-23T20:32:49.019Z',
    html: 'Added High Fidelity mode for Dehydration in Memphis, it should be possible to [almost] play it on mobile now (need a speedy CPU), though it is kind of not the point. The real value in the HD toggle is hearing the actual Synthesizer without any HD filters.'
  },
  {
    date: '2020-03-23T13:41:42.846Z',
    html: 'Added membrane synth (Drums) to the Dehydration in Memphis Generative Album (It sounds like the <a href="https://en.wikipedia.org/wiki/Terminator_(character)" rel="noopener noreferrer" target="_blank">T-800</a> is collaborating with the <a href="http://www.scp-wiki.net/scp-2050" rel="noopener noreferrer" target="_blank">Sciurine Poor-Fellows</a>, and he\'s good.)'
  },

  {
    date: '2020-03-22T20:14:25.929Z',
    html: `Day Six of Quarantine:
  Created a New Autogenerative Music Widget and disguised it as an immature <a href="https://www.dictionary.com/browse/sciurine" rel="noopener noreferrer" target="_blank">Sciurine</a> Urine joke.
  The technology is extremely advanced.
  I am for the first time in forever connecting virtual synthesizers through a <a href="https://tonejs.github.io/docs/13.8.25/Reverb" rel="noopener noreferrer" target="_blank">Reverb Convolver</a>.
  This reshapes the Synthesized Sounds, the synthesizer waveform, into a more realistic sounding instrument. Reverb just about does it, if Commodore 64 came with a decent reverb it would sound amazing, nothing like chiptunes.
  I have gotten used to breaking up my Generative Music into movements, and the initial song comes with 24 measures, where evey eight measures I do something interesting with the higher pitched instruments.
  For the most part I fell like using A Basic <a href="https://github.com/Tonejs/Tone.js/wiki/Arpeggiator" rel="noopener noreferrer" target="_blank">Arpeggiator</a> for everything, I am yet to test it with real world sound samples (digital sound recordings as opposed to synthesizer based sounds.)`
  }


]
function updateLinks(item, entryId){
    if(item.link){
      Object.keys(item.link).forEach(function(key){
        if(item.link[key]){
          const regexp = new RegExp(`\\[${key}\\]`,'g');
          item.html = item.html.replace(regexp,`<a href="${item.link[key]}" rel="noopener noreferrer" target="_blank">${key}</a>`);
        }
      });
    };
    Object.keys(linkDatabase).forEach(function(key){
      if(linkDatabase[key]){
        const regexp = new RegExp(`\\[${key}\\]`,'g');
        item.html = item.html.replace(regexp,`<a href="${linkDatabase[key]}" rel="noopener noreferrer" target="_blank">${key}</a>`);
      }
    });
    return item;
};

onMount(async () => {


    research = research.map(updateLinks);
    news = news.map(updateLinks);

      // Object.keys(research.link).forEach(function(key){
      //   if(item.link[key]){
      //     const regexp = new RegExp(`\\[${key}\\]`,'g');
      //     item.html = item.html.replace(regexp,`<a href="${item.link[key]}" rel="noopener noreferrer" target="_blank">${key}</a>`);
      //   }
      // });

    //});

  //})
});

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
    <News news={research} icon="mortar-board" title="Research Blog" items="30"/>
    </div>

    <div class="col pb-3">
    <RandomVideo duration="40"/>
    </div>

    <div class="col pb-3">
    <RandomVideo duration="40"/>
    </div>


    <div class="col pb-3">
        <div class="card text-white bg-dark shadow">
          <a href="{daw.url}"><img src="{daw.img}" class="card-img-top" alt="{daw.name}"></a>
          <div class="card-body p-3">
            <h5 class="card-text">{daw.name}</h5>
            <p class="card-text">{daw.text}</p>
            <a href="{daw.url}" class="btn btn-primary">{daw.name} &raquo;</a>
            <!-- <p class="card-text"><small class="text-muted">Updated {videos.changed}</small></p> -->
          </div>
        </div>
    </div>

    <div class="col pb-3">
    <SeasonCalculator/>
    </div>

    <div class="col pb-3">
    <Squirrel/>
    </div>

    <div class="col pb-3">
    <BeatSequencer/>
    </div>

    <div class="col pb-3">
    <LofiSoundboard title="Salamander Piano Sampler" sample="salamander" minOctave="1" maxOctave="9"/>
    </div>

    <div class="col pb-3">
    <LofiSoundboard title="Shebang Slash Soundboard" sample="shebang" minOctave="1" maxOctave="6"/>
    </div>


    <div class="col pb-3">
    <HiphopSong/>
    </div>

    <div class="col pb-3">
    <SciurineSong/>
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
    <SongBeatCalculator/>
    </div>

    <div class="col pb-3">
    <SongTempoChangeCalculator/>
    </div>

    <div class="col pb-3">
    <BodybuildingAdvice/>
    </div>







    </div>
</div>
