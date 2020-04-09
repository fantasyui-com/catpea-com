import icons from '../devices/icons.js';
const octicons = icons();


// TODO: CRYPTOGRAPHER

const database = [

    {
      date: '2020-04-09T22:07:45.885Z',
      html: [
        `Yay, Night Mode seems to have worked out, I even gave it nice and tidy animation. [Octicons] had a [light bulb] for me so it all went smoothly. Give it a try, go to the [Research] page, put on some shades, and click on the ${octicons['light-bulb'].toSVG({"class":"fill-warning"})} icon &uarr;.`,
        ``,
        `<figure class="figure float-right"> <img src="research/bulb.png" class="figure-img w-100 rounded" alt="Night Mode Toggle"> <figcaption class="figure-caption text-right">Night Mode Toggle</figcaption> </figure>`,
      ],
      link:{
        'light bulb':'https://octicons.github.com/icon/light-bulb/'
      }
    },

    {
      date: '2020-04-09T21:22:15.282Z',
      html: [
        `I might have come up with a way to toggle night mode on websites, even dark ones. I did this with just two lines of code. Basically what it came down to was asking, "What am I going to do with a red/danger alert box, during night mode?" And the answer is, it had to dark, everything has to be dark in night mode. There cannot be colorful things and especially things with backgrounds.`,
        ``,
        `HUGE BONUS! Applications that are written dark, that look good in dark colors, do not, at all, require dark more. It is simple and logical, but get this: Applications that are Bright, Silver, as most applications are... MUST BE REWRITTEN TO SUPPORT NIGHT MODE. Isn't that unusual. All my work does not need any changes because it is already in dark more.`,
        ``,
        `So, on this website, I don't really need night mode. But, as experimental research goes I do need a system for it. So here is how this will work. This very page, The Research Blog, will be the first one to get night mode, and will be put in dark more by default. Now if somebody wants DAY MODE, then they can switch it off, and the page will become blinding.`,
        ``,
        `I'll work on that for a couple of hours, it shouldn't take long, I already have a demo on the [THEME] page.`,
      ],
    },

    {
      date: '2020-04-09T19:29:25.681Z',
      html: [
        `I fixed up the [THEME] page where I show off some more advanced backgrounds. But, overall this has been a study of color. Not just how to create the palettes but how to configure colors in bootstrap.`,
        `This is a small success. Basically, it comes down to not using any text colors unless it is necessary, at which point make sure the background matches. As to background colors, the primary color doe backgrounds is bg-dark, or if it is a white website then bg-light. The coloring has to be used as little as possible because it does not really work.`,
        `Since I am using a programmable component layer over [Bootstrap], I can automate colorification, combined with the notion that it must be used sparingly. I'll be able to create multicolored websites soon, or as the case might be, websites with multiple coherent color themes.`,
        ``,
        `This was more difficult than I expected. And when complete it will be quite a framework for web applications.`,
      ],
    },



    {
      date: '2020-04-09T15:55:13.217Z',
      html: [
        `I upgraded [Palette] and begun using it somewhat. The website has new colors that almost came directly from [Palette].`,
        `Getting colors to like each other is not easy, but that's why [Palette] exists. It is crafted towards generating those six colors (Primary, Secondary, Success, Info, Warning, Danger) in such a way that they will blend together in harmony.`,
        `I will need more preview arrangements, I need to be able to see what colors work well with the primary background. But this is easy, and every color has a separate slider, for a Human-based adjustment. So it is not just color theory, but also good taste.`,
        ``,
        `I learned a lot about working with bootstrap these past few weeks, while I did well designing all the widgets, I still wasn't too certain about what colors I could use in which places.`,
        `I have learned that Primary, Secondary and White, are the main colors, if I need to make something jump out that's all I got. Success, Info, Warning, Danger are for non-creative decorations. And there is also two more colors Dark and Light. And I use these for backgrounds only. A dark website will use bg-dark for all the widgets, and a white website will use bg-light. There isn't really a way to flip-flop between the two without human intervention. In a couple of months I could outline a plan that would allow switching between dark and white. Personally, I think all websites and applications should be dark. I'll make a website that can switch between the two, but that will take some experimenting. [Bootstrap] is the same way, they basically say if you want something dark say bg-dark+text-light and that hard-coded into the design. I would need to make a program that toggles between bg-dark+text-light and bg-light+text-dark on application level (a tier above the design).`,
      ],

    },
    {
      date: '2020-04-08T23:35:35.074Z',
      html: [
        `I created a new tool I named [Palette] this time it deals with color theory.`,
        `Right now it is focused on the five primary colors that most designers use.`,
        `In context of this tool they are labeled: Primary, Secondary, Success, Info, Warning, Danger.`,
        '[Bootstrap] developers call them contextual colors.',
        ``,
        '[Color Theory] is a tiny-tiny little bit more complicated than adjusting colors and themes.',
        'But it is not very complicated. Most often it is just a cylinder of hues with colors going around.',
      ],

    },

    {
      date: '2020-04-08T23:01:17.448Z',
      html: [
        `I wanted to quickly demonstrate what I mean when I say the UI works on both Mobile Devices and Desktop Computers. The first image shows the application in desktop mode, and second on mobile. I cut the mobile up into columns because the image was too long. What happends is that the Desktop version collapses into a single long column on mobile. The application is still usable on mobile. This is not always the case with other applications, people don't always build the layout right.`,
        `<figure class="figure float-right"> <img src="research/desktop.png" class="figure-img w-100 rounded" alt="Mobile vs. Desktop"> <figcaption class="figure-caption text-right">Application In Desktop Mode</figcaption> </figure>`,
        `<figure class="figure float-right"> <img src="research/mobile.png" class="figure-img w-100 rounded" alt="Mobile vs. Desktop"> <figcaption class="figure-caption text-right">Application In Mobile Mode (I had to cut it up in multiple columns)</figcaption> </figure>`,
      ]

    },

    {
      date: '2020-04-08T16:28:09.783Z',
      html: [
      `I finished laying down the groundwork for [Bootstrap]+[Svelte] components. As predicted, there is wisdom in following Bootstrap's Conventions. The code is short, clean and lightweight.`,
      `I only styled the big grid in [CATPEA DAW] this is a lot of work, or at least getting it off the ground initially was a lot of work. Now that I know how to structure things, things will move faster.`,
      `<figure class="figure float-right"> <img src="research/gui5.png" class="figure-img w-100 rounded" alt="Design Examples"> <figcaption class="figure-caption text-right">Fully Styled Component</figcaption> </figure>`,
      `Here is the [graphics programming language] and the [actual code of the musical form component] it is very compact, but there are multiple layers of programming conventions here, ew, ew.`,
      `I should add that this grid is where the user structures a part of a song, for example The Intro. Each cell in here represents about 16 notes that can be inserted. But also, once the user establishes those 16 notes, they only need to worry about lighting those buttons up, it is always the same 16 notes per row... they just select where those notes are active. And beneath this grid is a list of instruments, and places where those 16 notes go. If the user places sharp-drums as the first instruments, selects all 16 note-spots, then it will play tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk-tsk BUT ONLY IF THE cell in the thing pictured above is lit. So this grid is an activator of melodies. Which are created in the thing pictured below:`,
      `<figure class="figure float-right"> <img src="research/gui6.png" class="figure-img w-100 rounded" alt="Design Examples"> <figcaption class="figure-caption text-right">Yet Un-styled Melody Maker Component</figcaption> </figure>`,

      ],
      link:{
        'graphics programming language':'https://github.com/fantasyui-com/catpea-com/blob/b79570e6459d128d3ecb79ed478ffe65fb23759c/src/style/daw/daw.scss',
        'actual code of the musical form component': 'https://github.com/fantasyui-com/catpea-com/blob/b79570e6459d128d3ecb79ed478ffe65fb23759c/src/components/song-machine/Form.svelte',
      }

    },

    {
      date: '2020-04-08T13:52:16.396Z',
      html: `Clarification as to why my development is taking so long. While I am developing some programs that are *best* on the desktop. I am actually developing User Interfaces that work on Mobile Phones, and "grow" to fit tablet and desktop. Making user interfaces that work property on Mobile and Desktop is kind of hard, the more detailed they become the harder it is to ensure compatibility. `,

    },

    {
      date: '2020-04-08T01:41:32.088Z',
      html: `Yup, it was a github problem, they only serve regularly named files. Everything was fine on my end, on my local servers. But the moment website was uploaded to their server, it would refuse to serve some files. So, on my computer the program ran fine, on github's it was missing files as the server would not serve them just give a File Not Found 404. Pretty awful, I couldn't fully investigate the problem until I uploaded to github where the error was occurring.`,

    },

    {
      date: '2020-04-07T21:11:12.541Z',
      html: `I am testing the other stuff I added now. I narrowed down problems down to one thing so if something is still broken I'll fix it now. I wrote a [cute little program] to apply the bug fixes. It is in a language called [Bash] ([Bash Tutorial]). It is my pet language. Not favorite, but like a bitey pet Lynx type of thing. All my music processing software that I used at the gym was written in Bash. It is an old language.`,
      link:{
        'cute little program':'https://github.com/fantasyui-com/catpea-com/blob/master/bugfix-commonjs-helpers.sh'
      }
    },

    {
      date: '2020-04-07T19:44:14.734Z',
      html: `Another website crash, [Svelte] isn't reporting errors properly. Working on it now. I think I know what is going on, but it is just a theory for now. Microsoft is is rolling out github server upgrade, and unusual file-names are causing errors. I got errors from files starting with dot and files starting with underscore. This will fix problems, but I don't know if it is the exact problem I have here, right now.`,
    },

    {
      date: '2020-04-07T18:43:22.379Z',
      name: 'The Navbar Kerfuffle',
      html: [

        `When on Mobile/Tablet (or in a small Desktop Window) Website Navigation collapses and shows an open icon (three lines), now when clicked it will open very smoothly. Previously it just popped into existence (I am not a fan of animations like that, but it tends to be a mark of good programming.) `,


        `I continued researching the Navbar issues, and I discovered bootstrap can't make it work without programming. There is no way to transition the menu from height:0pixels (closed) to height:auto (open) because the underlying language does not concern it self with the measurement of what auto actually means. There are no reasonable ways around it. They are stuck using a [big program] for it. And by big I mean 433 lines of code.`,
        `Let me tell you how many lines my program has.`,
        `[ZERO] (the three lines are configuration/maintenance not real code)`,
        `<figure class="figure float-right"> <img src="research/wee.png" class="figure-img w-100 rounded" alt="No Code"> <figcaption class="figure-caption text-right">Woo! No Code</figcaption> </figure>`,
        `The framework I use comes with the collapsing animation built in.`,
        `When I say that [Bootstrap] is behind in programming, they are, they really are. [Svelte] has a superior animation subsystem, and there is nothing to compare here.`,
        `In the morning I felt that [Navbar]-[Svelte] integration was problematic, now having taken a closer look, I find their [big program] is the problem here.`,
        `Bootstrap is currently at version 4.4, they are already making big changes for 5.0. I am not the first to notice that their JavaScript is a problem, they will catch up.`,

      ],
      link: {
        'ZERO':'https://github.com/fantasyui-com/catpea-com/blob/d12cb893c59f447a94b5146c003f457e0122bab8/src/components/Nav.svelte#L2-L4',
        'take a look':'https://getbootstrap.com/docs/4.4/components/navbar/',
        'Navbar':'https://getbootstrap.com/docs/4.4/components/navbar/',
        'big program':'https://github.com/twbs/bootstrap/blob/master/js/src/collapse.js'
      }
    },

    {
      date: '2020-04-07T13:41:39.748Z',
      name: 'Dealing With Incompatible Systems',
      html: [
        `There are some anomalies in this system but they are easily dealt with.`,
        `This morning I've been researching the combination of technologies behind the collapsible Navbar on the top of the page.`,
        `The reason why there is complexity here is screen size reporting, the navbar is structured by a non-programmable language, kind of an automatic language.`,
        `There is no way to say "Oh, the screen size is this much, I'll do this here, then do that there. Instead what is said is screen size small collapse menu. And nothing else can be said." With [Svelte] something must be added, svelte has a particular way of approaching animations.`,
        `That means the existing navbar and svelte/programming-framework are incompatible, cannot work together.`,
        `The existing navbar must be removed, and new one must be programmed in.`,
        `This is a large project because of how important compatibility among devices is in this context (main menu can't fail, otherwise the whole website is broken).
        BUT! If we allow that [Bootstrap] the existing UI framework I use here is a suggestion and collection of snippets.
        Then, most of this work is already done, I just have to copy Navbar.
        I'll create a new program, name it Navigator, and start with the Navbar code base.`,
        `Eventually [Bootstrap] people will alter their programming to catch up with technologies like [Svelte] and then I'll be able to go back to using the standard Navbar.`
      ]
    },

    {
      date: '2020-04-07T13:12:33.080Z',
      name: 'Impossibilities and Superiorities',
      html: [
        `I am looking over the code, most things that could be done to make the site better are almost impossible due to the restriction that this meeting of technologies imposes.`,
        `It is the only way to make things actually work.`,
        `The browser was not originally designed for applications. Over last couple of decades it gained technologies that can make applications like CATPEA.`,
        `But that meas balancing multiple technologies, and that balance causes severe restrictions in what can go where.`,
        `I have worked with numerous technologies developed specifically for making Applications, but they are much worse than the upgraded browser.`,
        `This is because nothing has received as much attention as the web. So, even though this technology stack is greatly restricted, it is also very powerful.`,
      ]
    },


    {
      date: '2020-04-06T22:18:33.170Z',
      html: `

        Working with the GUI, testing what I can alter, what I can't.
        I still have no idea what catpea is good for, what website format I should create.
        There is also a division of widgets forming some are useful tools (Song Beat Counter) others are little information displays (You Tube Videos, Season Countdown).
        As far as User Interface Design and getting things done goes, it is hard to beat chaos.

      <figure class="figure float-right"> <img src="research/gui2.png" class="figure-img w-100 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">UI Thus Far</figcaption> </figure>
      <figure class="figure float-right"> <img src="research/gui3.png" class="figure-img w-100 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">UI Thus Far</figcaption> </figure>

      `
    },

    {
      date: '2020-04-06T19:21:21.474Z',
      html: `I am testing separate [Quarantine]/[Research] sections in the main menu. The current scroll-bar within a scroll-bar setup was for testing, I wanted to see if it worked or if I needed to so something special. Well, they are both blogs, very similar to the warrior book, they should just have the same UI. This also brings me closer to proper Web Design, where I take a moment to make some fancy graphics to decorate typographical creations.`
    },

    {
      date: '2020-04-06T15:16:22.095Z',
      html: `I continue my GUI Theme development research, today's test is about creating a custom component for the digital workstation. My research revealed that it is more efficient not to use the helper classes I created. By using helper classes such as bg-primary instead of the longer way I end up over-complicating things in the end. I am entering a stage of simplification as I can tell a lot of the things I invented work great. What I would like to see, is as little confusion as possible. If I keep the code simple today, then in a few weeks I can start thinking about selling "Digital Audio Workstation Theme" at [Bootstrap Themes], more importantly I get to learn more about Bootstrap's coding conventions, and perhaps make my own Bootstrap even.`
    },

    {
      date: '2020-04-05T22:35:47.063Z',
      html: `Expanded color subsystem, and finished configuring the build system. It should work OK when installed as a desktop shortcut. I have to figure out some way to make catpea useful.`
    },

    {
      date: '2020-04-05T16:56:55.639Z',
      html: `It took me a moment to figure out how to structure colors/shades for User Interface in the [CATPEA DAW]. The problem was I needed more colors, but I don't want to go against [Bootstrap]'s way of doing things. So, where they have a color scheme like this: primary-color, secondary-color, muted-color, warning-color. I added  primary-color-dark, secondary-color-dark, muted-color-dark, warning-color-dark and primary-color-light, secondary-color-light, muted-color-light, warning-color-light. So when two of bootstrap colors start biting each other for example button and box (that the button is in) I can make the button lighter by saying button color: primary-color-light, so I tripled color count, in such a way that all the users of the [THEME] just need to remember "Oh, yeah, all the colors have a dark and light variation now. Hmm." so [CATPEA DAW] UI is back to semi-normal now, and I updated the [THEME] page to show off this upgrade.`
    },

    {
      date: '2020-04-04T19:47:42.610Z',
      html: `Whoopsie, I crashed the website generator with long winded code explanations with samples. All fixed now. I always worry github will shut me down, I don't think they like Code Mavericks like me. If something ever happens like that, I'll switch within a day or two, catpea.com domain name will stay the same.`
    },

    {
      date: '2020-04-04T19:04:39.833Z',
      html: `

      <p>Ewwwwwww! I switched from [node-sass] to [sass], node-sass got old, I guess.</p>
      I wasn't really paying too much attention to SASS (a UI programming language) because I think CSS should be shaped with JS, as these are native browser <p>technologies. But since [Bootstrap] is forcing me into [sass], I might as well make use of the language, and... I guess its functions as well.</p>

      <p>Since this is a new addition to the system, there is both a learning curve, and bugs.</p>
      <p>So I've been trying to execute color.adjust(#6b717f, $red: 15); these are the big fancy new functions, but I've been getting errors for days.</p>

      <p>Well, now that I switched to [sass] (from node-sass) there were changes, but I still got an error.</p>
      <p>It turns out they have a new module system, and before I make use of the color function I have to execute @use 'sass:color'; on top of the program file.</p>

      <p>That's how it is done in all programming languages, but since I upgraded, I had to learn few new things about the new version of the language.</p>

      <p>Now, this does not mean that I approve of the existence of the [SASS Programming Language] in my code. But it is OK.</p>

      As the first, thing here, I created a custom function, this is written in JavaScript, and it is integrated with SASS. The function measures readability between a background color and a foreground color, and it is interesting... Because even though everyone says "if readability is more than 4.5 you are peachy",</p>

      <p>When working with themes, when kind of knowing colors, the 4.5 threshold can be lowered down to 1.5 even.</p>

      <p>The big deal here is being able to say, keep darkening/lightening that color until it passes the readability test.</p>

      <p>Here is an image of a recent test of using my [wcag-contrast](foreground, background) function until a color is readable.</p>

      <p>Note how text in the first column it not readable as the background and text-color converge in the middle.</p>
      <p>And now look at the second column, where SMART coloring is taking place.</p>

      <p>I know it is still dark, I kept the color change threshold very low on purpose, to make the overall UI graphics nice. The point is that the text is keeping up with the background, it is keeping juuuuuuust a wee bit above, un-readability.</p>


      <figure class="figure float-right"> <img src="research/smart-color.png" class="figure-img w-100 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">Automatic Coloring</figcaption> </figure>

      <p class="">As a side-note, programming-wise this is not really impressive, it is like 5 lines of code, so pro-programmers would yawn at this,
      but it is a big deal for me, because I am getting really precise and delicate control over colors in my Dark Theme here, that it is only 5 lines of code, is great for me, I can just type in a bit of code and be done with worrying about color readability for some UI component or button/label combo. I like this. And I like being given the opportunity to ponder if I want something to grow brighter (like a label on a button) or darker, like in the case of a number-label on a table of data (like a row number in Excel). </p>

      `,

    },

    {
      date: '2020-04-03T23:25:54.011Z',
      html: `
      Zoinks! I started work on a Graphical Theme for Applications, I called it [THEME]. It provides extensions for [Bootstrap] and components based on [CATPEA DAW]. I'll use it for my research here, and try to keep it tidy and inline with Bootstrap's Programming conventions so that I can think about getting into [Bootstrap Expo] and later [Bootstrap Themes]. I don't really want to create some stressful situation about sales, tech-support, and bug fixes; but I do like following [Bootstrap] conventions (it helps me keep code un-confusing) and I like learning about all this. Here's early: [THEME].
      `,

    },

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
      <figure class="figure float-right"> <img src="research/piano.png" class="figure-img w-100 rounded" alt="GUI Ideas"> <figcaption class="figure-caption text-right">Piano Fun</figcaption> </figure>
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


function process(data) {
  const clean = data.map(item => {
    if(typeof item.html !== 'string'){
      item.html = item.html.map(d=>(d.charAt(0)=='<')?d:`<p>${d}</p>`).join('')
    }
    return item;
  })
  return clean;

} // fun

// Import data into exports
export default function main(name){
  return process(database);
}
