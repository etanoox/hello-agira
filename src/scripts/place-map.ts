document.querySelectorAll<HTMLElement>('[data-place-map]').forEach(root => {
  const button=root.querySelector<HTMLButtonElement>('[data-load-map]');
  const frame=root.querySelector<HTMLIFrameElement>('iframe');
  const cover=root.querySelector<HTMLElement>('[data-map-cover]');
  if(!button || !frame || !cover) return;
  button.hidden=false;
  button.addEventListener('click',()=>{
    const source=frame.dataset.src;
    if(!source) return;
    const url=new URL(source);
    if(url.origin!=='https://www.google.com' || url.pathname!=='/maps') return;
    frame.src=url.href;
    frame.hidden=false;
    cover.hidden=true;
    frame.focus();
  },{once:true});
});
export {};
