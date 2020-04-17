const database = {
  'Beat Sequencer Source': 'https://github.com/fantasyui-com/catpea-com/blob/master/src/components/BeatSequencer.svelte',

  'Bootstrap Expo': 'https://expo.getbootstrap.com/',
  'Bootstrap': 'https://getbootstrap.com/',
  'Bootstrap Themes': 'https://themes.getbootstrap.com/',
  'Bootstrap Versions':'https://getbootstrap.com/docs/versions/',
  'Bootswatch':'https://github.com/thomaspark/bootswatch/',

  'Bash': 'https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29',
  'Bash Tutorial': 'https://www.youtube.com/watch?v=v-F3YLd6oMw',

  'Ableton': 'https://www.ableton.com/en/live/',
  'LMMS': 'https://lmms.io/',
  'Scientific Pitch Notation': 'https://en.wikipedia.org/wiki/Scientific_pitch_notation',
  'Yamaha C5 Grand Piano':'https://usa.yamaha.com/products/musical_instruments/pianos/grand_pianos/cx_series/cx-series.html',

  'Palette':'/palette',
  'CATPEA DAW':'/daw',
  'Composer':'/daw',
  'Theme':'/theme',
  'THEME':'/theme',
  'Quarantine':'/quarantine',
  'Research':'/research',
  'Designer':'/designer',

  'news.catpea.com':'http://news.catpea.com',
  'news':'http://news.catpea.com',

  'Rollup': 'https://rollupjs.org/guide/en/',
  'Octicons require a json file': 'https://github.com/primer/octicons/commit/875bc333ce4dc6a460a116dfd315a56dbb23120f#diff-c93a11fe3afdd3ccfbe1f152a8cf7b20L1',
  'Svelte': 'https://svelte.dev/',
  'Sapper': 'https://sapper.svelte.dev/',
  'SVG': 'https://www.w3.org/Graphics/SVG/WG/wiki/SVG_FAQ',
  'Octicons':'https://octicons.github.com/',
  'github is having problems':'https://www.githubstatus.com/',
  'github was having problems':'https://www.githubstatus.com/',

  'JavaScript Array':'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
  'HSL':'https://www.youtube.com/watch?v=NAw2_NtGNaA',
  'HSV':'https://www.youtube.com/watch?v=yNgH3wv4crg',
  'CSS':'https://www.youtube.com/watch?v=gT0Lh1eYk78',

  'node-sass':'https://github.com/sass/node-sass',

  'Sass':'https://sass-lang.com',
  'SASS Programming Language':'https://sass-lang.com/documentation/at-rules/control/if',
  'wcag-contrast':'https://www.w3.org/TR/WCAG20-TECHS/G18.html',
  'Color Theory':'https://www.youtube.com/watch?v=NN5h6Uwtqzw',
};


function process(data) {

  return data;

} // fun

// Import data into exports
export default function main(name){
  return process(database);
}
