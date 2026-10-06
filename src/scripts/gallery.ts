const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const dialog = document.querySelector<HTMLDialogElement>('[data-gallery]');
if (dialog && typeof dialog.showModal === 'function') {
  const slides = Array.from(dialog.querySelectorAll<HTMLElement>('[data-gallery-slide]'));
  const thumbs = Array.from(dialog.querySelectorAll<HTMLButtonElement>('[data-gallery-select]'));
  const counter = dialog.querySelector<HTMLElement>('[data-gallery-counter]')!;
  let selected = 0;
  let opener: HTMLElement | null = null;
  let animation: Animation | undefined;
  const show = (index: number) => {
    selected = (index + slides.length) % slides.length;
    animation?.cancel();
    slides.forEach((slide,i) => {slide.hidden = i !== selected;});
    thumbs.forEach((thumb,i) => thumb.setAttribute('aria-pressed',String(i === selected)));
    counter.textContent = `${String(selected + 1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
    counter.setAttribute('aria-label',`${counter.textContent}: ${slides[selected].dataset.title}`);
    if (dialog.open) {
      const thumb = thumbs[selected];
      const strip = thumb?.parentElement;
      if (thumb && strip) {
        const thumbRect = thumb.getBoundingClientRect();
        const stripRect = strip.getBoundingClientRect();
        const left = thumbRect.left < stripRect.left
          ? thumbRect.left - stripRect.left
          : thumbRect.right > stripRect.right ? thumbRect.right - stripRect.right : 0;
        if (left) strip.scrollBy({left,behavior:'instant'});
      }
    }
    if (!reducedMotion()) animation = slides[selected].animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}], {duration:230,easing:'ease-out'});
  };
  document.querySelectorAll<HTMLAnchorElement>('[data-gallery-open]').forEach(link => link.addEventListener('click',event => {
    const index = slides.findIndex(slide => slide.dataset.gallerySlide === link.dataset.galleryOpen);
    if (index < 0 || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();opener = link;dialog.showModal();document.body.classList.add('gallery-is-open');show(index);
    dialog.querySelector<HTMLButtonElement>('[data-gallery-close]')?.focus({preventScroll:true});
  }));
  dialog.querySelector('[data-gallery-close]')?.addEventListener('click',()=>dialog.close());
  dialog.querySelector('[data-gallery-prev]')?.addEventListener('click',()=>show(selected-1));
  dialog.querySelector('[data-gallery-next]')?.addEventListener('click',()=>show(selected+1));
  thumbs.forEach((thumb,i)=>thumb.addEventListener('click',()=>show(i)));
  dialog.addEventListener('keydown',event=>{
    if(event.key === 'ArrowRight'){event.preventDefault();show(selected+1);}
    if(event.key === 'ArrowLeft'){event.preventDefault();show(selected-1);}
    if(event.key === 'Home'){event.preventDefault();show(0);}
    if(event.key === 'End'){event.preventDefault();show(slides.length-1);}
  });
  dialog.addEventListener('close',()=>{document.body.classList.remove('gallery-is-open');animation?.cancel();opener?.focus({preventScroll:true});});
  let touchX = 0, touchY = 0;
  const stage = dialog.querySelector<HTMLElement>('.gallery-stage')!;
  stage.addEventListener('touchstart',event=>{touchX=event.touches[0].clientX;touchY=event.touches[0].clientY;},{passive:true});
  stage.addEventListener('touchend',event=>{
    const dx=event.changedTouches[0].clientX-touchX, dy=event.changedTouches[0].clientY-touchY;
    if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.5) show(selected+(dx<0?1:-1));
  },{passive:true});
}

document.querySelectorAll<HTMLElement>('[data-reel]').forEach(root=>{
  const track=root.querySelector<HTMLElement>('[data-reel-track]')!;
  const cards=Array.from(track.querySelectorAll<HTMLElement>('.sight-card'));
  const previous=root.querySelector<HTMLButtonElement>('[data-reel-prev]')!;
  const next=root.querySelector<HTMLButtonElement>('[data-reel-next]')!;
  const count=root.querySelector<HTMLElement>('[data-reel-count]')!;
  const progress=root.querySelector<HTMLElement>('[data-reel-progress]')!;
  root.classList.add('reel-ready');
  let current=0, pending=false;
  const positions=()=>cards.map(card=>card.getBoundingClientRect().left-track.getBoundingClientRect().left+track.scrollLeft);
  const update=()=>{
    const max=track.scrollWidth-track.clientWidth;
    const points=positions();
    current=points.reduce((best,pos,i)=>Math.abs(pos-track.scrollLeft)<Math.abs(points[best]-track.scrollLeft)?i:best,0);
    if(max>0 && track.scrollLeft>=max-3) current=cards.length-1;
    previous.disabled=track.scrollLeft<=3;next.disabled=track.scrollLeft>=max-3;
    count.textContent=`${String(current+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
    progress.style.transform=`scaleX(${max>0?.22+.78*track.scrollLeft/max:1})`;
    pending=false;
  };
  const go=(index:number)=>track.scrollTo({left:positions()[Math.max(0,Math.min(index,cards.length-1))],behavior:reducedMotion()?'instant':'smooth'});
  const step=(direction:number)=>{
    const max=track.scrollWidth-track.clientWidth;
    const points=positions().map(point=>Math.min(max,Math.max(0,point)));
    const target=direction>0?points.find(point=>point>track.scrollLeft+3):points.filter(point=>point<track.scrollLeft-3).at(-1);
    track.scrollTo({left:target??(direction>0?max:0),behavior:reducedMotion()?'instant':'smooth'});
  };
  previous.addEventListener('click',()=>step(-1));next.addEventListener('click',()=>step(1));
  track.addEventListener('keydown',event=>{
    if(event.target!==track)return;
    if(event.key==='ArrowRight'){event.preventDefault();step(1);}
    if(event.key==='ArrowLeft'){event.preventDefault();step(-1);}
    if(event.key==='Home'){event.preventDefault();go(0);}
    if(event.key==='End'){event.preventDefault();go(cards.length-1);}
  });
  track.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(update);}},{passive:true});
  new ResizeObserver(update).observe(track);
  let pointer:number|null=null, startX=0, startScroll=0, dragged=false;
  track.addEventListener('pointerdown',event=>{
    if(event.pointerType!=='mouse'||event.button!==0||(event.target as Element).closest('summary,button'))return;
    pointer=event.pointerId;startX=event.clientX;startScroll=track.scrollLeft;dragged=false;
  });
  track.addEventListener('pointermove',event=>{
    if(pointer!==event.pointerId)return;
    const dx=event.clientX-startX;
    if(Math.abs(dx)>6&&!dragged){dragged=true;track.setPointerCapture(event.pointerId);track.classList.add('is-dragging');}
    if(dragged){event.preventDefault();track.scrollLeft=startScroll-dx;}
  });
  const release=()=>{pointer=null;track.classList.remove('is-dragging');};
  track.addEventListener('pointerup',release);track.addEventListener('pointercancel',release);track.addEventListener('lostpointercapture',release);
  track.addEventListener('pointerleave',()=>{if(!dragged)pointer=null;});
  track.addEventListener('click',event=>{if(dragged){event.preventDefault();event.stopPropagation();dragged=false;}},true);
  track.addEventListener('dragstart',event=>event.preventDefault());
  update();
});
export {};
