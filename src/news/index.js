import research from './research.js';
import quarantine from './quarantine.js';
import linkdb from './links.js';
const links = linkdb();

function updateLinks(item, entryId){
    if(item.link){
      Object.keys(item.link).forEach(function(key){
        if(item.link[key]){
          const regexp = new RegExp(`\\[${key}\\]`,'g');
          item.html = item.html.replace(regexp,`<a href="${item.link[key]}" rel="noopener noreferrer" target="_blank">${key}</a>`);
        }
      });
    };
    Object.keys(links).forEach(function(key){
      if(links[key]){
        const regexp = new RegExp(`\\[${key}\\]`,'g');
        item.html = item.html.replace(regexp,`<a href="${links[key]}" rel="noopener noreferrer" target="_blank">${key}</a>`);
      }
    });
    return item;
};


export default function main(name){
  const report = {};
  report.research = research().map(updateLinks);
  report.quarantine = quarantine().map(updateLinks);
  return report;
}
