#!/usr/bin/env -S node --experimental-modules

// https://github.com/jonathantneal/mdcss

import fs from 'fs-extra';
import path from 'path';
import sass from 'sass';
import mdcss from 'mdcss';
import theme from 'mdcss-theme-github';

const options = {
  logo:'/cats/cat-01.png',
  destination:'./docs/styleguide',
  examples:{
    css:[

    ],
    htmlcss:`border:0;clip:auto;display:block;height:auto;margin:1rem;padding:1rem;0;position:static;width:auto`,
    bodycss:`border:0;clip:auto;display:block;height:auto;margin:1rem;padding:1rem;0;position:static;width:auto`,
  },
}

options.examples.css.push('theme.css');

async function main(){
  const rendered = sass.renderSync({file: "src/style/index.scss"});
  const css = rendered.css.toString();
  const result = await mdcss.process(css, options);
  fs.writeFileSync(path.join(options.destination, 'theme.css'), css);
}

main()
