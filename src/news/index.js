import research from './research.js';
import quarantine from './quarantine.js';
import linkdb from './links.js';
const links = linkdb();


function interpolateLinks(key, url, objectReference){
  // constructs a replacement pattern square bracket link name square bravket
  // then searches for that pattern and replaces it with html
  const regexp = new RegExp(`\\[${key}\\]`,'g');
  const href = url;
  const isExternal = href.startsWith('http');

  let link = `<a href="${href}">${key}</a>`;
  if(isExternal){
    link = `<a href="${href}" rel="noopener noreferrer" target="_blank">${key}</a>`;
  }
  objectReference.html = objectReference.html.replace(regexp,link);
}


function updateLinks(objectReference, entryId){
  // Looks at the link library first,
  if(objectReference.link) Object.keys(objectReference.link) .filter(key=>!!objectReference.link[key]) .map(key=>interpolateLinks(key,objectReference.link[key],objectReference));
  Object.keys(links) .filter(key=>!!links[key]) .map(key=>interpolateLinks(key,links[key],objectReference));
  return objectReference;
};


export default function main(name){
  const report = {};
  report.research = research().map(updateLinks);
  report.quarantine = quarantine().map(updateLinks);
  return report;
}
