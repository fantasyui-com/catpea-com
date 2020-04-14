import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';


import json from '@rollup/plugin-json';
import chroma from 'chroma-js';
import sass from 'sass';



//import octicons from 'octicons';

import sveltePreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src' ],
    //  includePaths: ["node_modules/bootstrap/dist/css"],


    functions: {
        // This function uses the synchronous API, and can be passed to either
        // renderSync() or render().
        'wcag-contrast($color1, $color2)': function(sassColor1, sassColor2) {
          let result = 0;

          let color1 = [sassColor1.getR(), sassColor1.getG(), sassColor1.getB(), sassColor1.getA()]
          let color2 = [sassColor2.getR(), sassColor2.getG(), sassColor2.getB(), sassColor2.getA()]
          result = chroma.contrast(color1, color2);

          //console.log('CONTRAST', result, color1, color2);

          return new sass.types.Number(result);
        },

        // This function uses the asynchronous API, and can only be passed to
        // render().
        'sqrt($number)': function(number, done) {
          if (!(number instanceof sass.types.Number)) {
            throw "$number: Expected a number.";
          } else if (number.getUnit()) {
            throw "$number: Expected a unitless number.";
          }

          done(new sass.types.Number());
        }
      }


    // functions: {
    //   'octicon($name: "squirrel")': function(name) {
    //     return octicons[name||"squirrel"].toSVG();
    //   }
    // }
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
});

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      json(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),

      svelte({

        dev,
        hydratable: true,
        emitCss: true,
        preprocess, // <-- ADDED THIS LINE

      }),

      resolve({
        // preferBuiltins: true,
        // mainFields: ['browser'],
        browser: true,
        dedupe
      }),
      commonjs(),

      legacy && babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
        runtimeHelpers: true,
        exclude: ['node_modules/@babel/**'],
        presets: [
          ['@babel/preset-env', {
            targets: '> 0.25%, not dead'
          }]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),

      !dev && terser({
        module: true
      }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      json(),
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess, // <-- ADDED THIS LINE
      }),
      resolve({
        dedupe
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    onwarn,
  }
};
