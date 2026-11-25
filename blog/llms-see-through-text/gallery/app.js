const $=s=>document.querySelector(s);
const shortNames={M12:'Homer Simpson',G01:'Scatter-point elephant',X01:'RGB cat',R05:'Polygon motorcycle',W06:'CSS castle',M04:'Armadillo mesh',E03:'SVG astronaut'};
function element(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;}
function link(text,href,download=false){const a=element('a','',text);a.href=href;if(download)a.download='';return a;}
function renderExample(e){
  const article=element('article','example');article.id=e.id;
  article.append(element('h2','',e.title),element('p','example-meta',`${e.kind} · ${e.characters.toLocaleString('en-US')} source characters · Complete text below`));
  const comparison=element('div','comparison'),sourcePanel=element('section','source-panel'),renderPanel=element('section','render-panel');
  sourcePanel.append(element('div','panel-label','TEXT THE MODEL RECEIVED'));
  const pre=element('pre');pre.tabIndex=0;pre.setAttribute('aria-label',`Complete source for ${shortNames[e.id]}; scroll to read`);pre.append(element('code','',e.source));sourcePanel.append(pre);
  renderPanel.append(element('div','panel-label','RENDER OF THE SAME FILE'));
  const image=element('img');image.src=e.image;image.alt=`Benchmark render: ${e.answer}`;image.loading='lazy';renderPanel.append(image);
  comparison.append(sourcePanel,renderPanel);article.append(comparison);
  const row=element('div','answer-row'),answer=element('div','recorded-answer');answer.append(document.createTextNode('Recorded answer: '),element('strong','',e.answer),element('span','correct','Correct'));
  const downloads=element('div','downloads');downloads.append(link('Download source',e.sourceUrl,true),link('Full input JSON',e.inputUrl,true));row.append(answer,downloads);article.append(row);
  const details=element('details','question-details');details.append(element('summary','',`Question, ${e.options.length} answer options and asset credit`),element('p','question-copy',e.question));
  const options=element('ul','options');for(const option of e.options)options.append(element('li','',option));details.append(options,element('p','credit',e.credit));article.append(details);
  return article;
}
$('#font-size').addEventListener('input',e=>{document.documentElement.style.setProperty('--code-size',e.target.value+'px');$('#font-value').textContent=e.target.value+' px';});
$('#wrap').addEventListener('change',e=>{document.documentElement.style.setProperty('--code-white-space',e.target.checked?'pre-wrap':'pre');document.documentElement.style.setProperty('--code-wrap',e.target.checked?'anywhere':'normal');});
fetch('examples.json').then(r=>{if(!r.ok)throw Error('Unable to load examples');return r.json();}).then(examples=>{
  const content=document.createDocumentFragment();for(const e of examples){content.append(renderExample(e));$('#navigation').append(link(shortNames[e.id],`#${e.id}`));}$('#examples').replaceChildren(content);
  if(location.hash){document.getElementById(location.hash.slice(1))?.scrollIntoView();}
}).catch(()=>{$('#examples').textContent='The examples could not be loaded. Reload this page to try again.';});
