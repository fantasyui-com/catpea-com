import icons from '../devices/icons.js';
const octicons = icons();


// TODO: CRYPTOGRAPHER

const database = [


  {
    date: '2020-04-15T13:01:26.880Z',
    html: `

      Begun work on Theme.

      I want it to be heavy, decorated with 3D-like features.

      Initially want to restyle default bootstrap classes, without introducing any bonus extras.

      I want to keep compatibility with [Bootswatch].

      This theme needs to be a drop-in replacement for standard [Bootstrap] and [Bootswatch] themes.

    `,
    link:{
    }
  },


];


function process(data) {
  const clean = data.map(item => {
    item.html = item.html.trim().split('\n').map(i=>i.trim());
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
